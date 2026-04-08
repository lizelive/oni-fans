import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { solveProduction } from '../solver.js';
import { algaeTerr, electrolyzer, hydrogenGenerator, coalGenerator } from '../../../data/oni/buildings/index.js';

describe('Z3 Solver', () => {
  test('finds algae terrariums needed for oxygen production', async () => {
    const result = await solveProduction({
      buildings: [algaeTerr],
      goal: {
        require: { oxygen: 500000 },
      },
    });

    assert.ok(result.feasible, 'Should be feasible');
    const terrariumCount = result.buildingCounts.get('algaeTerrarium') ?? 0;
    assert.ok(terrariumCount >= 1, `Should need at least 1 terrarium, got ${terrariumCount}`);
  });

  test('electrolyzer chain is feasible with hydrogen generator', async () => {
    const result = await solveProduction({
      buildings: [electrolyzer, hydrogenGenerator],
      goal: {
        require: { oxygen: 888000 },
      },
    });

    assert.ok(result.feasible, 'Electrolyzer + H2 gen chain should be feasible');
    const electCount = result.buildingCounts.get('electrolyzer') ?? 0;
    assert.ok(electCount >= 1, 'Should need at least 1 electrolyzer');
  });

  test('impossible goal returns infeasible', async () => {
    const result = await solveProduction({
      buildings: [algaeTerr],
      goal: {
        require: { water: 1000000000 },
      },
    });

    assert.ok(!result.feasible, 'Should be infeasible since terrarium consumes water');
  });

  test('coal generator + algae terrarium feasibility', async () => {
    const result = await solveProduction({
      buildings: [coalGenerator, algaeTerr],
      goal: {
        require: { oxygen: 100000 },
      },
    });

    assert.ok(result.feasible, 'Should find oxygen solution');
  });
});
