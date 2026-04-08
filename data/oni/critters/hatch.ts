import type { Critter } from '../../../src/oni/types.js';

export const hatch: Critter = {
  id: 'hatch',
  name: 'Hatch',
  feed: [{ id: 'sandstone', amount: 140000 }],
  produce: [{ id: 'coal', amount: 70000 }],
  heatProduction: 1000,
  description: 'A burrowing critter that eats minerals and excretes coal.',
  hp: 25,
  lifespan: 100,
  temperature: { min: 12, max: 70 },
  caloriesNeeded: 140000,
  spaceRequired: 12,
  layEgg: { eggId: 'hatchEgg', eggName: 'Hatchling Egg', incubationCycles: 20 },
  variants: [
    {
      id: 'stoneHatch',
      name: 'Stone Hatch',
      feed: [{ id: 'sandstone', amount: 140000 }],
      produce: [{ id: 'sedimentaryRock', amount: 70000 }],
      heatProduction: 1000,
      description: 'Eats raw minerals and excretes sedimentary rock.',
    },
    {
      id: 'sageHatch',
      name: 'Sage Hatch',
      feed: [{ id: 'dirt', amount: 140000 }],
      produce: [{ id: 'coal', amount: 70000 }],
      heatProduction: 1000,
      description: 'Eats organic materials and excretes coal.',
    },
    {
      id: 'smoothHatch',
      name: 'Smooth Hatch',
      feed: [{ id: 'refinedMetal', amount: 140000 }],
      produce: [{ id: 'iron', amount: 70000 }],
      heatProduction: 1000,
      description: 'Eats refined metals and excretes iron.',
    },
  ],
};
