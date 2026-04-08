import type { Arith, IntNum, RatNum } from "z3-solver";
import { OniRegistry } from "../domain/registry.js";
import type {
  OperationBinding,
  OptimizationProblem,
  OptimizationResult,
  RouteStep,
  SolvedOperationCount,
} from "../domain/types.js";
import { AbstractSimulator } from "../simulate/abstractSimulator.js";
import { getZ3 } from "./z3-context.js";

const SOLVER_SCALE = 1000;

function scale(value: number): number {
  return Math.round(value * SOLVER_SCALE);
}

function arithValue(expr: Arith): number {
  if ((expr as IntNum).__typename === "IntNum") {
    return Number((expr as IntNum).value());
  }
  if ((expr as RatNum).__typename === "RatNum") {
    return (expr as RatNum).asNumber();
  }
  return Number(expr.toString());
}

function sumTerms<Name extends string>(seed: Arith<Name>, terms: readonly Arith<Name>[]): Arith<Name> {
  return terms.reduce<Arith<Name>>((sum, term) => sum.add(term), seed);
}

function buildRoute(bindings: readonly OperationBinding[], counts: readonly SolvedOperationCount[]): RouteStep[] {
  const countById = new Map(counts.map((count) => [count.operationId, count.count]));
  const producersByResource = new Map<string, import("../core/ids.js").OperationId[]>();
  for (const binding of bindings) {
    for (const output of binding.operation.outputs) {
      const current = producersByResource.get(output.resource) ?? [];
      current.push(binding.operation.id);
      producersByResource.set(output.resource, current);
    }
  }

  const phases = new Map<string, number>();
  const visiting = new Set<string>();
  const resolvePhase = (binding: OperationBinding): number => {
    const key = binding.operation.id;
    if (phases.has(key)) {
      return phases.get(key)!;
    }
    if (visiting.has(key)) {
      return 1;
    }
    visiting.add(key);

    let phase = 1;
    for (const input of binding.operation.inputs) {
      const producers = producersByResource.get(input.resource) ?? [];
      for (const producerId of producers) {
        const producerBinding = bindings.find((candidate) => candidate.operation.id === producerId);
        if (producerBinding && countById.get(producerId)) {
          phase = Math.max(phase, resolvePhase(producerBinding) + 1);
        }
      }
    }

    visiting.delete(key);
    phases.set(key, phase);
    return phase;
  };

  return counts
    .map((count) => {
      const binding = bindings.find((candidate) => candidate.operation.id === count.operationId);
      if (!binding) {
        throw new Error(`Missing binding for ${count.operationId}`);
      }
      return {
        phase: resolvePhase(binding),
        operationId: count.operationId,
        entityName: binding.entity.name,
        count: count.count,
        rationale:
          binding.operation.inputs.length === 0
            ? "Base source or free emission"
            : `Unlocks ${binding.operation.outputs.map((output) => output.resource).join(", ")}`,
      } satisfies RouteStep;
    })
    .sort((left, right) => left.phase - right.phase || left.entityName.localeCompare(right.entityName));
}

export class ProductionOptimizer {
  constructor(private readonly registry: OniRegistry) {}

  async solve(problem: OptimizationProblem): Promise<OptimizationResult | null> {
    const z3 = await getZ3();
    const { Context } = z3;
    const { Int, Optimize } = new Context("oni-fans");
    const optimize = new Optimize();
    const zero = Int.val(0);
    const bindings = this.registry
      .listOperations()
      .filter((binding) => !problem.bannedOperations?.includes(binding.operation.id));

    const vars = new Map(bindings.map((binding) => [binding.operation.id, Int.const(`count_${binding.operation.id}`)]));

    for (const variable of vars.values()) {
      optimize.add(variable.ge(0));
    }

    const resources = this.registry.collectResources();

    for (const resource of resources) {
      const producers = bindings.flatMap((binding) =>
        binding.operation.outputs
          .filter((output) => output.resource === resource)
          .map((output) => vars.get(binding.operation.id)!.mul(scale(output.amountPerCycle))),
      );
      const consumers = bindings.flatMap((binding) =>
        binding.operation.inputs
          .filter((input) => input.resource === resource)
          .map((input) => vars.get(binding.operation.id)!.mul(scale(input.amountPerCycle))),
      );

      const supply = sumTerms(zero, producers);
      const demand = sumTerms(zero, consumers);
      const externalSupply =
        scale(problem.externalSupplies?.find((candidate) => candidate.resource === resource)?.amountPerCycle ?? 0);
      const goal = scale(problem.goals.find((candidate) => candidate.resource === resource)?.minimumPerCycle ?? 0);
      optimize.add(supply.add(externalSupply).sub(demand).ge(goal));
    }

    if (problem.maxHeatKdtuPerCycle !== undefined) {
      const totalHeat = sumTerms(
        zero,
        bindings.map((binding) => vars.get(binding.operation.id)!.mul(scale(binding.operation.thermal.heatKdtuPerCycle))),
      );
      optimize.add(totalHeat.le(scale(problem.maxHeatKdtuPerCycle)));
    }

    if (problem.maxLaborSecondsPerCycle !== undefined) {
      const totalLabor = sumTerms(
        zero,
        bindings.map((binding) => vars.get(binding.operation.id)!.mul(scale(binding.operation.labor.dupeSecondsPerCycle))),
      );
      optimize.add(totalLabor.le(scale(problem.maxLaborSecondsPerCycle)));
    }

    if (problem.maxBuildings !== undefined) {
      const totalBuildings = sumTerms(
        zero,
        bindings.map((binding) => vars.get(binding.operation.id)!),
      );
      optimize.add(totalBuildings.le(problem.maxBuildings));
    }

    const totalLaborObjective = sumTerms(
      zero,
      bindings.map((binding) => vars.get(binding.operation.id)!.mul(scale(binding.operation.labor.dupeSecondsPerCycle))),
    );
    const totalHeatObjective = sumTerms(
      zero,
      bindings.map((binding) => vars.get(binding.operation.id)!.mul(scale(binding.operation.thermal.heatKdtuPerCycle))),
    );
    const totalCountObjective = sumTerms(
      zero,
      bindings.map((binding) => vars.get(binding.operation.id)!),
    );

    optimize.minimize(totalLaborObjective);
    optimize.minimize(totalHeatObjective);
    optimize.minimize(totalCountObjective);

    const check = await optimize.check();
    if (check !== "sat") {
      optimize.release();
      return null;
    }

    const model = optimize.model();
    const operations: SolvedOperationCount[] = [];
    for (const binding of bindings) {
      const value = arithValue(model.get(vars.get(binding.operation.id)!) as unknown as Arith);
      if (value > 0) {
        operations.push({
          operationId: binding.operation.id,
          entityId: binding.entity.id,
          count: Math.round(value),
        });
      }
    }

    const simulation = new AbstractSimulator(this.registry).run(
      operations.map((operation) => ({ operationId: operation.operationId, count: operation.count })),
    );

    optimize.release();

    return {
      operations,
      route: buildRoute(bindings, operations),
      netResources: simulation.netResources,
      totalHeatKdtuPerCycle: simulation.totalHeatKdtuPerCycle,
      totalLaborSecondsPerCycle: simulation.totalLaborSecondsPerCycle,
    };
  }
}
