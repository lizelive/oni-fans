import type { Critter } from '../../../src/oni/types.js';

export const divergent: Critter = {
  id: 'divergent',
  name: 'Divergent',
  feed: [{ id: 'sulfur', amount: 70000 }],
  produce: [{ id: 'sucrose', amount: 35000 }],
  heatProduction: 500,
  description: 'A Spaced Out critter that comes in worm and beetle variants.',
  hp: 25,
  lifespan: 100,
  temperature: { min: 25, max: 55 },
  caloriesNeeded: 70000,
  spaceRequired: 12,
  layEgg: { eggId: 'divergentEgg', eggName: 'Divergent Egg', incubationCycles: 20 },
  dlc: 'spaced_out',
  variants: [
    {
      id: 'divergentWorm',
      name: 'Divergent Worm',
      feed: [{ id: 'sulfur', amount: 70000 }],
      produce: [{ id: 'sucrose', amount: 35000 }],
      heatProduction: 500,
      description: 'The worm variant of the Divergent.',
    },
    {
      id: 'divergentBeetle',
      name: 'Divergent Beetle',
      feed: [{ id: 'sulfur', amount: 70000 }],
      produce: [{ id: 'sucrose', amount: 35000 }],
      heatProduction: 500,
      description: 'The beetle variant of the Divergent.',
    },
  ],
};
