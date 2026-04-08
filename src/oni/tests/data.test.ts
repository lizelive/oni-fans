import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { elements, getElementById } from '../../../data/oni/elements/index.js';
import { mealwood } from '../../../data/oni/plants/mealwood.js';
import { bristleBlossom } from '../../../data/oni/plants/bristleBlossom.js';
import { hatch } from '../../../data/oni/critters/hatch.js';
import { buildings, algaeTerr, electrolyzer, hydrogenGenerator } from '../../../data/oni/buildings/index.js';
import { plants } from '../../../data/oni/plants/index.js';
import { critters } from '../../../data/oni/critters/index.js';
import { geysers } from '../../../data/oni/geysers/index.js';
import { foodItems } from '../../../data/oni/food/index.js';
import { diseases } from '../../../data/oni/diseases/index.js';

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

  test('water boiling point is 99.4', () => {
    const water = getElementById('water');
    assert.ok(water);
    assert.equal(water.boilingPoint, 99.4);
  });

  test('oxygen is gas phase', () => {
    const oxygen = getElementById('oxygen');
    assert.ok(oxygen);
    assert.equal(oxygen.phase, 'gas');
  });

  test('hydrogen has correct specific heat capacity', () => {
    const hydrogen = getElementById('hydrogen');
    assert.ok(hydrogen);
    assert.equal(hydrogen.specificHeatCapacity, 2.400);
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

  test('hatch consumes sandstone', () => {
    const sandstoneFeed = hatch.feed.find(f => f.id === 'sandstone');
    assert.ok(sandstoneFeed, 'Hatch should eat sandstone');
    assert.equal(sandstoneFeed.amount, 140000);
  });
});

describe('Data counts', () => {
  test('plant count >= 15', () => {
    assert.ok(plants.length >= 15, `Expected at least 15 plants, got ${plants.length}`);
  });

  test('critter count >= 10', () => {
    assert.ok(critters.length >= 10, `Expected at least 10 critters, got ${critters.length}`);
  });

  test('element count >= 80', () => {
    assert.ok(elements.length >= 80, `Expected at least 80 elements, got ${elements.length}`);
  });

  test('building count >= 50', () => {
    assert.ok(buildings.length >= 50, `Expected at least 50 buildings, got ${buildings.length}`);
  });

  test('geyser count >= 15', () => {
    assert.ok(geysers.length >= 15, `Expected at least 15 geysers, got ${geysers.length}`);
  });

  test('food count >= 20', () => {
    assert.ok(foodItems.length >= 20, `Expected at least 20 food items, got ${foodItems.length}`);
  });
});

describe('Geysers data', () => {
  test('geysers array is non-empty', () => {
    assert.ok(geysers.length > 0);
  });

  test('all geysers have required fields', () => {
    for (const g of geysers) {
      assert.ok(g.id, `Geyser missing id`);
      assert.ok(g.name, `Geyser ${g.id} missing name`);
      assert.ok(g.output, `Geyser ${g.id} missing output`);
      assert.ok(typeof g.outputTemp === 'number', `Geyser ${g.id} missing outputTemp`);
      assert.ok(g.eruptionPeriod, `Geyser ${g.id} missing eruptionPeriod`);
      assert.ok(g.dormancyPeriod, `Geyser ${g.id} missing dormancyPeriod`);
      assert.ok(g.activeCycles, `Geyser ${g.id} missing activeCycles`);
      assert.ok(g.dormantCycles, `Geyser ${g.id} missing dormantCycles`);
    }
  });
});

describe('Food data', () => {
  test('foodItems array is non-empty', () => {
    assert.ok(foodItems.length > 0);
  });

  test('all food items have required fields', () => {
    for (const f of foodItems) {
      assert.ok(f.id, `Food missing id`);
      assert.ok(f.name, `Food ${f.id} missing name`);
      assert.ok(typeof f.quality === 'number', `Food ${f.id} missing quality`);
      assert.ok(typeof f.calories === 'number', `Food ${f.id} missing calories`);
      assert.ok(typeof f.spoilTime === 'number', `Food ${f.id} missing spoilTime`);
    }
  });

  test('food quality is in valid range', () => {
    for (const f of foodItems) {
      assert.ok(f.quality >= -1 && f.quality <= 6, `Food ${f.id} has quality ${f.quality} outside range [-1, 6]`);
    }
  });
});

describe('Diseases data', () => {
  test('diseases array is non-empty', () => {
    assert.ok(diseases.length > 0);
  });

  test('all diseases have required fields', () => {
    for (const d of diseases) {
      assert.ok(d.id, `Disease missing id`);
      assert.ok(d.name, `Disease ${d.id} missing name`);
      assert.ok(['germ', 'radiation', 'other'].includes(d.type), `Disease ${d.id} has invalid type`);
      assert.ok(Array.isArray(d.effects), `Disease ${d.id} missing effects`);
    }
  });
});
