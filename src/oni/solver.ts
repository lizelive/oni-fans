import { init } from 'z3-solver';
import type { Building, Plant } from './types.js';
import { ResourceMap, laborPerCycle, DUPLICANT_LABOR_PER_CYCLE_SECONDS } from './helpers.js';

export interface SolverGoal {
  require: Partial<Record<string, number>>;
  minimize?: string[];
}

export interface SolverConfig {
  buildings: Building[];
  plants?: Plant[];
  baseResources?: string[];
  goal: SolverGoal;
  maxDuplicants?: number;
}

export interface SolverResult {
  feasible: boolean;
  buildingCounts: Map<string, number>;
  netResources: ResourceMap;
  totalHeat: number;
  duplicantsNeeded: number;
  coolingNeeded: number;
}

export async function solveProduction(config: SolverConfig): Promise<SolverResult> {
  const { Context } = await init();
  const ctx = new Context('main');

  const { buildings, goal, maxDuplicants } = config;

  // Create integer variables for each building count
  const buildingVars = buildings.map(b => ({
    building: b,
    variable: ctx.Int.const(b.id),
  }));

  const solver = new ctx.Optimize();

  // All building counts must be non-negative
  for (const { variable } of buildingVars) {
    solver.add(variable.ge(ctx.Int.val(0)));
  }

  // For each required resource, add constraint that net output >= requirement
  for (const [resourceId, required] of Object.entries(goal.require)) {
    if (required === undefined) continue;

    let netExpr = ctx.Int.val(0);

    for (const { building, variable } of buildingVars) {
      const outputAmount = building.outputs
        .filter(r => r.id === resourceId)
        .reduce((sum, r) => sum + r.amount, 0);
      const inputAmount = building.inputs
        .filter(r => r.id === resourceId)
        .reduce((sum, r) => sum + r.amount, 0);

      const netPerBuilding = outputAmount - inputAmount;
      if (netPerBuilding !== 0) {
        netExpr = netExpr.add(variable.mul(ctx.Int.val(Math.round(netPerBuilding))));
      }
    }

    solver.add(netExpr.ge(ctx.Int.val(Math.round(required))));
  }

  // Power balance: enforce only when we have power-producing buildings
  {
    let powerExpr = ctx.Int.val(0);
    for (const { building, variable } of buildingVars) {
      const net = -Math.round(building.powerConsumption);
      if (net !== 0) {
        powerExpr = powerExpr.add(variable.mul(ctx.Int.val(net)));
      }
    }
    const hasPowerProducers = buildings.some(b => b.powerConsumption < 0);
    if (hasPowerProducers) {
      solver.add(powerExpr.ge(ctx.Int.val(0)));
    }
  }

  // Duplicant labor constraint
  if (maxDuplicants !== undefined) {
    let laborExpr = ctx.Int.val(0);
    for (const { building, variable } of buildingVars) {
      if (building.laborSeconds > 0) {
        laborExpr = laborExpr.add(
          variable.mul(ctx.Int.val(Math.round(building.laborSeconds)))
        );
      }
    }
    const maxLaborSeconds = maxDuplicants * DUPLICANT_LABOR_PER_CYCLE_SECONDS;
    solver.add(laborExpr.le(ctx.Int.val(maxLaborSeconds)));
  }

  // Minimize total number of buildings
  let totalBuildings = ctx.Int.val(0);
  for (const { variable } of buildingVars) {
    totalBuildings = totalBuildings.add(variable);
  }
  solver.minimize(totalBuildings);

  const result = await solver.check();

  if (result !== 'sat') {
    return {
      feasible: false,
      buildingCounts: new Map(),
      netResources: new ResourceMap(),
      totalHeat: 0,
      duplicantsNeeded: 0,
      coolingNeeded: 0,
    };
  }

  const model = solver.model();
  const buildingCounts = new Map<string, number>();
  const netResources = new ResourceMap();
  let totalHeat = 0;
  let totalLaborSeconds = 0;

  for (const { building, variable } of buildingVars) {
    const countVal = model.eval(variable);
    const count = Number(countVal.toString());
    buildingCounts.set(building.id, count);

    if (count > 0) {
      totalHeat += building.heatGeneration * count;
      totalLaborSeconds += building.laborSeconds * count;

      for (const output of building.outputs) {
        netResources.add(output.id, output.amount * count);
      }
      for (const input of building.inputs) {
        netResources.subtract(input.id, input.amount * count);
      }
    }
  }

  const duplicantsNeeded = laborPerCycle(totalLaborSeconds);

  return {
    feasible: true,
    buildingCounts,
    netResources,
    totalHeat,
    duplicantsNeeded,
    coolingNeeded: Math.max(0, totalHeat),
  };
}
