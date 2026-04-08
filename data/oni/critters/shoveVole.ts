import type { Critter } from '../../../src/oni/types.js';

export const shoveVole: Critter = {
  id: 'shoveVole',
  name: 'Shove Vole',
  feed: [{ id: 'regolith', amount: 140000 }],
  produce: [{ id: 'iron', amount: 70000 }],
  heatProduction: 500,
  description: 'A burrowing critter that tunnels through tiles and eats regolith.',
  hp: 25,
  lifespan: 100,
  temperature: { min: 0, max: 110 },
  caloriesNeeded: 140000,
  spaceRequired: 12,
  layEgg: { eggId: 'shoveVoleEgg', eggName: 'Shove Vole Egg', incubationCycles: 20 },
};
