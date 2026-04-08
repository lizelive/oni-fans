import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ProductionGraph } from '../helpers.js';
import { algaeTerr, electrolyzer, hydrogenGenerator } from '../../../data/oni/buildings/index.js';

describe('ProductionGraph', () => {
  test('empty graph has no resources', () => {
    const graph = new ProductionGraph();
    const net = graph.computeNetResources();
    assert.equal(net.toArray().length, 0);
  });

  test('single algae terrarium produces oxygen', () => {
    const graph = new ProductionGraph();
    graph.addNode({ building: algaeTerr, scale: 1 });
    const net = graph.computeNetResources();
    assert.ok(net.get('oxygen') > 0, 'Should produce oxygen');
    assert.ok(net.get('algae') < 0, 'Should consume algae');
  });

  test('two algae terrariums produce double oxygen', () => {
    const graph1 = new ProductionGraph();
    graph1.addNode({ building: algaeTerr, scale: 1 });
    const net1 = graph1.computeNetResources();

    const graph2 = new ProductionGraph();
    graph2.addNode({ building: algaeTerr, scale: 2 });
    const net2 = graph2.computeNetResources();

    assert.equal(net2.get('oxygen'), net1.get('oxygen') * 2);
  });

  test('electrolyzer + hydrogen generator chain', () => {
    const graph = new ProductionGraph();
    graph.addNode({ building: electrolyzer, scale: 1 });
    graph.addNode({ building: hydrogenGenerator, scale: 1 });
    const net = graph.computeNetResources();

    assert.ok(net.get('oxygen') > 0);
    assert.ok(net.get('water') < 0);
    assert.ok(Math.abs(net.get('hydrogen')) < 1000);
  });

  test('heat calculation', () => {
    const graph = new ProductionGraph();
    graph.addNode({ building: algaeTerr, scale: 1 });
    const heat = graph.computeTotalHeat();
    assert.equal(heat, algaeTerr.heatGeneration);
  });

  test('heat scales with building count', () => {
    const graph = new ProductionGraph();
    graph.addNode({ building: algaeTerr, scale: 3 });
    const heat = graph.computeTotalHeat();
    assert.equal(heat, algaeTerr.heatGeneration * 3);
  });

  test('labor requirements', () => {
    const graph = new ProductionGraph();
    graph.addNode({ building: algaeTerr, scale: 1 });
    const labor = graph.computeLaborRequirements();
    assert.equal(labor.cycleTime, 600);
    assert.ok(labor.duplicants >= 0);
  });

  test('surpluses and deficits', () => {
    const graph = new ProductionGraph();
    graph.addNode({ building: algaeTerr, scale: 1 });
    const surpluses = graph.getSurpluses();
    const deficits = graph.getDeficits();

    assert.ok(surpluses.get('oxygen') > 0);
    assert.ok(deficits.get('algae') < 0);
  });
});
