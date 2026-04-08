import type { Critter } from '../../../src/oni/types.js';

export const hatch: Critter = {
  id: 'hatch',
  name: 'Hatch',
  feed: [{ id: 'coal', amount: 140000 }],
  produce: [{ id: 'coal', amount: 70000 }],
  heatProduction: 1000,
};
