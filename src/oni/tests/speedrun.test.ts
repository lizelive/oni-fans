import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { solveSpeedrun } from '../speedrun.js';

describe('Speedrun solver', () => {
  test('solves simple single milestone', async () => {
    const route = await solveSpeedrun(
      {
        milestones: ['research_station'],
        requirements: {
          research_station: [{ id: 'sandstone', amount: 400000 }],
        },
      },
      [{ id: 'sandstone', amount: 400000 }]
    );

    assert.ok(route.steps.length > 0, 'Should have steps');
    assert.ok(route.totalTime > 0, 'Should have total time');
  });

  test('gathers missing resources before building', async () => {
    const route = await solveSpeedrun(
      {
        milestones: ['research_station'],
        requirements: {
          research_station: [{ id: 'sandstone', amount: 400000 }],
        },
      },
      [] // no starting resources
    );

    const gatherStep = route.steps.find(s => s.action.includes('Gather'));
    assert.ok(gatherStep, 'Should have a gather step when resources are missing');
    const sandstoneGained = gatherStep.resourcesGained.find(r => r.id === 'sandstone');
    assert.ok(sandstoneGained, 'Should gather sandstone');
  });

  test('multi-milestone route has steps for each milestone', async () => {
    const route = await solveSpeedrun(
      {
        milestones: ['basic_research', 'advanced_research'],
        requirements: {
          basic_research: [{ id: 'dirt', amount: 200000 }],
          advanced_research: [{ id: 'copper', amount: 100000 }],
        },
      },
      [{ id: 'dirt', amount: 200000 }, { id: 'copper', amount: 100000 }]
    );

    assert.ok(route.steps.length >= 2, 'Should have steps for each milestone');
  });

  test('returns total time', async () => {
    const route = await solveSpeedrun(
      {
        milestones: ['m1'],
        requirements: { m1: [{ id: 'iron', amount: 1000 }] },
      },
      [{ id: 'iron', amount: 1000 }]
    );
    assert.ok(typeof route.totalTime === 'number');
    assert.ok(route.totalTime >= 0);
  });
});
