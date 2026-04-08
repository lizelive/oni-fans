import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ResourceMap, computeNetFlow, laborPerCycle, kg, g, resource, CYCLE_TIME_SECONDS, DUPLICANT_LABOR_PER_CYCLE_SECONDS } from '../helpers.js';

describe('ResourceMap', () => {
  test('add and get', () => {
    const map = new ResourceMap();
    map.add('water', 1000);
    assert.equal(map.get('water'), 1000);
  });

  test('add accumulates', () => {
    const map = new ResourceMap();
    map.add('water', 1000);
    map.add('water', 500);
    assert.equal(map.get('water'), 1500);
  });

  test('subtract', () => {
    const map = new ResourceMap();
    map.add('water', 1000);
    map.subtract('water', 400);
    assert.equal(map.get('water'), 600);
  });

  test('get missing returns 0', () => {
    const map = new ResourceMap();
    assert.equal(map.get('oxygen'), 0);
  });

  test('toArray', () => {
    const map = new ResourceMap();
    map.add('water', 100);
    map.add('oxygen', 200);
    const arr = map.toArray();
    assert.equal(arr.length, 2);
    const waterEntry = arr.find(e => e.id === 'water');
    assert.ok(waterEntry);
    assert.equal(waterEntry.amount, 100);
  });

  test('merge', () => {
    const a = new ResourceMap();
    a.add('water', 100);
    const b = new ResourceMap();
    b.add('water', 50);
    b.add('oxygen', 200);
    const merged = a.merge(b);
    assert.equal(merged.get('water'), 150);
    assert.equal(merged.get('oxygen'), 200);
  });

  test('scale', () => {
    const map = new ResourceMap();
    map.add('water', 100);
    map.add('oxygen', 50);
    const scaled = map.scale(3);
    assert.equal(scaled.get('water'), 300);
    assert.equal(scaled.get('oxygen'), 150);
  });
});

describe('computeNetFlow', () => {
  test('simple net flow', () => {
    const inputs = [{ id: 'water', amount: 1000 }];
    const outputs = [{ id: 'oxygen', amount: 500 }, { id: 'hydrogen', amount: 112 }];
    const { net } = computeNetFlow(inputs, outputs, 1);
    assert.equal(net.get('water'), -1000);
    assert.equal(net.get('oxygen'), 500);
    assert.equal(net.get('hydrogen'), 112);
  });

  test('scale factor', () => {
    const inputs = [{ id: 'water', amount: 1000 }];
    const outputs = [{ id: 'oxygen', amount: 500 }];
    const { net } = computeNetFlow(inputs, outputs, 2);
    assert.equal(net.get('water'), -2000);
    assert.equal(net.get('oxygen'), 1000);
  });
});

describe('helper functions', () => {
  test('kg converts to grams * 1000', () => {
    assert.equal(kg(5), 5000);
  });

  test('g returns same amount', () => {
    assert.equal(g(100), 100);
  });

  test('resource creates Resource object', () => {
    const r = resource('water', 1000, 20);
    assert.equal(r.id, 'water');
    assert.equal(r.amount, 1000);
    assert.equal(r.temperature, 20);
  });

  test('resource without temperature', () => {
    const r = resource('oxygen', 500);
    assert.equal(r.temperature, undefined);
  });

  test('laborPerCycle', () => {
    assert.equal(laborPerCycle(300), 1);
    assert.equal(laborPerCycle(301), 2);
    assert.equal(laborPerCycle(600), 2);
    assert.equal(laborPerCycle(0), 0);
  });

  test('constants', () => {
    assert.equal(CYCLE_TIME_SECONDS, 600);
    assert.equal(DUPLICANT_LABOR_PER_CYCLE_SECONDS, 300);
  });
});
