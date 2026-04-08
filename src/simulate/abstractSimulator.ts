import type { OperationId } from "../core/ids.js";
import { OniRegistry } from "../domain/registry.js";
import type { SimulationAssignment, SimulationResult } from "../domain/types.js";
import { ResourceLedger } from "./resourceLedger.js";

export class SimulationPlanBuilder {
  private readonly assignments = new Map<OperationId, number>();

  add(operationId: OperationId, count = 1): this {
    this.assignments.set(operationId, (this.assignments.get(operationId) ?? 0) + count);
    return this;
  }

  build(): SimulationAssignment[] {
    return [...this.assignments.entries()].map(([operationId, count]) => ({ operationId, count }));
  }
}

export class AbstractSimulator {
  constructor(private readonly registry: OniRegistry) {}

  run(assignments: readonly SimulationAssignment[]): SimulationResult {
    const net = new ResourceLedger();
    const grossInputs = new ResourceLedger();
    const grossOutputs = new ResourceLedger();
    let totalHeat = 0;
    let totalLabor = 0;

    for (const assignment of assignments) {
      const binding = this.registry.getOperation(assignment.operationId);
      if (!binding) {
        throw new Error(`Unknown operation: ${assignment.operationId}`);
      }

      for (const input of binding.operation.inputs) {
        const value = input.amountPerCycle * assignment.count;
        net.add(input.resource, -value);
        grossInputs.add(input.resource, value);
      }

      for (const output of binding.operation.outputs) {
        const value = output.amountPerCycle * assignment.count;
        net.add(output.resource, value);
        grossOutputs.add(output.resource, value);
      }

      totalHeat += binding.operation.thermal.heatKdtuPerCycle * assignment.count;
      totalLabor += binding.operation.labor.dupeSecondsPerCycle * assignment.count;
    }

    return {
      netResources: net.asReadonlyMap(),
      grossInputs: grossInputs.asReadonlyMap(),
      grossOutputs: grossOutputs.asReadonlyMap(),
      totalHeatKdtuPerCycle: totalHeat,
      totalLaborSecondsPerCycle: totalLabor,
    };
  }
}
