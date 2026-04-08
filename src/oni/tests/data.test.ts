import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { elements, getElementById } from '../../../data/oni/elements/index.js';
import { mealwood } from '../../../data/oni/plants/mealwood.js';
import { bristleBlossom } from '../../../data/oni/plants/bristleBlossom.js';
import { hatch } from '../../../data/oni/critters/hatch.js';
import { buildings, algaeTerr, electrolyzer, hydrogenGenerator } from '../../../data/oni/buildings/index.js';

describe('Elements data', () => {
  test('elements array is non-empty', () => {
    assert.ok(elements.length > 0);
  });

  test('water has correct specific heat capacity', () => {
    const water = getElementById('water');
    assert.ok(water);
    assert.equal(water.specificHeatCapacity, 4.179);
  });

  test('water is liquid phase', () => {
    const water = getElementById('water');
    assert.ok(water);
    assert.equal(water.phase, 'liquid');
  });

  test('water boiling point is 100', () => {
    const water = getElementById('water');
    assert.ok(water);
    assert.equal(water.boilingPoint, 100);
  });

  test('oxygen is gas phase', () => {
    const oxygen = getElementById('oxygen');
    assert.ok(oxygen);
    assert.equal(oxygen.phase, 'gas');
  });

  test('hydrogen has high specific heat capacity', () => {
    const hydrogen = getElementById('hydrogen');
    assert.ok(hydrogen);
    assert.ok(hydrogen.specificHeatCapacity > 10, 'Hydrogen SHC should be > 10');
  });

  test('all elements have required fields', () => {
    for (const el of elements) {
      assert.ok(el.id, `Element missing id: ${JSON.stringify(el)}`);
      assert.ok(el.name, `Element ${el.id} missing name`);
      assert.ok(['solid', 'liquid', 'gas', 'plasma'].includes(el.phase), `Element ${el.id} has invalid phase`);
      assert.ok(typeof el.specificHeatCapacity === 'number', `Element ${el.id} missing SHC`);
      assert.ok(typeof el.thermalConductivity === 'number', `Element ${el.id} missing TC`);
    }
  });

  test('ice high temp transition leads to water', () => {
    const ice = getElementById('ice');
    assert.ok(ice);
    assert.equal(ice.highTempTransition, 'water');
  });
});

describe('Plants data', () => {
  test('mealwood has correct properties', () => {
    assert.equal(mealwood.id, 'mealwood');
    assert.equal(mealwood.growthCycles, 3);
    assert.ok(mealwood.harvest.length > 0);
    assert.equal(mealwood.water, 0);
  });

  test('bristleBlossom requires water', () => {
    assert.ok(bristleBlossom.water > 0, 'Bristle Blossom should need water');
  });
});

describe('Buildings data', () => {
  test('buildings array is non-empty', () => {
    assert.ok(buildings.length > 0);
  });

  test('algae terrarium produces oxygen', () => {
    const oxygenOutput = algaeTerr.outputs.find(o => o.id === 'oxygen');
    assert.ok(oxygenOutput, 'Algae terrarium should produce oxygen');
    assert.ok(oxygenOutput.amount > 0);
  });

  test('electrolyzer consumes water', () => {
    const waterInput = electrolyzer.inputs.find(i => i.id === 'water');
    assert.ok(waterInput, 'Electrolyzer should consume water');
  });

  test('electrolyzer produces oxygen and hydrogen', () => {
    const oxyOutput = electrolyzer.outputs.find(o => o.id === 'oxygen');
    const h2Output = electrolyzer.outputs.find(o => o.id === 'hydrogen');
    assert.ok(oxyOutput, 'Electrolyzer should produce oxygen');
    assert.ok(h2Output, 'Electrolyzer should produce hydrogen');
  });

  test('hydrogen generator produces power (negative powerConsumption)', () => {
    assert.ok(hydrogenGenerator.powerConsumption < 0, 'H2 generator should produce power');
  });

  test('all buildings have required fields', () => {
    for (const b of buildings) {
      assert.ok(b.id, `Building missing id`);
      assert.ok(b.name, `Building ${b.id} missing name`);
      assert.ok(Array.isArray(b.inputs), `Building ${b.id} missing inputs`);
      assert.ok(Array.isArray(b.outputs), `Building ${b.id} missing outputs`);
      assert.ok(typeof b.powerConsumption === 'number', `Building ${b.id} missing powerConsumption`);
      assert.ok(typeof b.heatGeneration === 'number', `Building ${b.id} missing heatGeneration`);
    }
  });
});

describe('Critters data', () => {
  test('hatch has correct properties', () => {
    assert.equal(hatch.id, 'hatch');
    assert.ok(hatch.feed.length > 0);
    assert.ok(hatch.heatProduction > 0);
  });

  test('hatch consumes coal', () => {
    const coalFeed = hatch.feed.find(f => f.id === 'coal');
    assert.ok(coalFeed, 'Hatch should eat coal');
    assert.equal(coalFeed.amount, 140000);
  });
});
