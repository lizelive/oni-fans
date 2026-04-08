import type { Critter } from '../../../src/oni/types.js';

export const shineBug: Critter = {
  id: 'shineBug',
  name: 'Shine Bug',
  feed: [{ id: 'phosphorite', amount: 20000 }],
  produce: [],
  heatProduction: 500,
  description: 'A luminescent critter that emits 1800 lux of light.',
  hp: 5,
  lifespan: 75,
  temperature: { min: 5, max: 45 },
  caloriesNeeded: 20000,
  spaceRequired: 12,
  layEgg: { eggId: 'shineBugEgg', eggName: 'Shine Bug Egg', incubationCycles: 20 },
  variants: [
    {
      id: 'sunBug',
      name: 'Sun Bug',
      feed: [{ id: 'phosphorite', amount: 20000 }],
      produce: [],
      heatProduction: 500,
      description: 'A brighter variant of the Shine Bug.',
    },
    {
      id: 'royalBug',
      name: 'Royal Bug',
      feed: [{ id: 'phosphorite', amount: 20000 }],
      produce: [],
      heatProduction: 500,
      description: 'A rare, regal variant of the Shine Bug.',
    },
  ],
};
