import type { Critter } from '../../../src/oni/types.js';

export const sweetle: Critter = {
  id: 'sweetle',
  name: 'Sweetle',
  feed: [{ id: 'sulfur', amount: 70000 }],
  produce: [{ id: 'sucrose', amount: 35000 }],
  heatProduction: 500,
  description: 'A Spaced Out critter that eats sulfur and excretes sucrose.',
  hp: 25,
  lifespan: 100,
  temperature: { min: 25, max: 55 },
  caloriesNeeded: 70000,
  spaceRequired: 12,
  layEgg: { eggId: 'sweetleEgg', eggName: 'Sweetle Egg', incubationCycles: 20 },
  dlc: 'spaced_out',
};
