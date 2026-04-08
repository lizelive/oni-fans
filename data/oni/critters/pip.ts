import type { Critter } from '../../../src/oni/types.js';

export const pip: Critter = {
  id: 'pip',
  name: 'Pip',
  feed: [{ id: 'lumber', amount: 140000 }],
  produce: [{ id: 'dirt', amount: 70000 }],
  heatProduction: 500,
  description: 'An arboreal critter that eats arbor tree branches and can plant wild seeds.',
  hp: 25,
  lifespan: 100,
  temperature: { min: 10, max: 35 },
  caloriesNeeded: 140000,
  spaceRequired: 12,
  layEgg: { eggId: 'pipEgg', eggName: 'Pip Egg', incubationCycles: 20 },
};
