import type { Critter } from '../../../src/oni/types.js';

export const crab: Critter = {
  id: 'crab',
  name: 'Crab',
  feed: [{ id: 'sand', amount: 70000 }],
  produce: [{ id: 'shellMaterial', amount: 35000 }],
  heatProduction: 500,
  description: 'A critter from the Frosty Planet DLC.',
  hp: 25,
  lifespan: 100,
  temperature: { min: -20, max: 30 },
  caloriesNeeded: 70000,
  spaceRequired: 12,
  layEgg: { eggId: 'crabEgg', eggName: 'Crab Egg', incubationCycles: 20 },
  dlc: 'frosty_planet',
};
