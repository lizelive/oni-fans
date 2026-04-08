import type { Critter } from '../../../src/oni/types.js';

export const morb: Critter = {
  id: 'morb',
  name: 'Morb',
  feed: [],
  produce: [{ id: 'pollutedOxygen', amount: 100000 }],
  heatProduction: 500,
  description: 'A wild-only critter that emits polluted oxygen. Cannot be tamed.',
  hp: 25,
  lifespan: 75,
  temperature: { min: 0, max: 70 },
  tame: false,
  wild: true,
};
