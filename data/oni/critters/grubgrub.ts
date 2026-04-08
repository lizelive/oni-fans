import type { Critter } from '../../../src/oni/types.js';

export const grubgrub: Critter = {
  id: 'grubgrub',
  name: 'Grubgrub',
  feed: [{ id: 'sulfur', amount: 35000 }],
  produce: [],
  heatProduction: 500,
  description: 'A Spaced Out companion critter that tends plants, improving their growth.',
  hp: 25,
  lifespan: 100,
  temperature: { min: 25, max: 55 },
  caloriesNeeded: 35000,
  spaceRequired: 12,
  layEgg: { eggId: 'grubgrubEgg', eggName: 'Grubgrub Egg', incubationCycles: 20 },
  dlc: 'spaced_out',
};
