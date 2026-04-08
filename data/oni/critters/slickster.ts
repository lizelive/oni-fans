import type { Critter } from '../../../src/oni/types.js';

export const slickster: Critter = {
  id: 'slickster',
  name: 'Slickster',
  feed: [{ id: 'carbonDioxide', amount: 20000 }],
  produce: [{ id: 'crudeOil', amount: 10000 }],
  heatProduction: 500,
  description: 'A slippery critter that breathes carbon dioxide and excretes crude oil.',
  hp: 25,
  lifespan: 150,
  temperature: { min: 35, max: 70 },
  caloriesNeeded: 140000,
  spaceRequired: 12,
  layEgg: { eggId: 'slicksterEgg', eggName: 'Slickster Egg', incubationCycles: 20 },
  variants: [
    {
      id: 'moltenSlickster',
      name: 'Molten Slickster',
      feed: [{ id: 'carbonDioxide', amount: 20000 }],
      produce: [{ id: 'petroleum', amount: 10000 }],
      heatProduction: 500,
      description: 'Thrives in extreme heat and excretes petroleum.',
    },
    {
      id: 'longhairSlickster',
      name: 'Longhair Slickster',
      feed: [{ id: 'oxygen', amount: 20000 }],
      produce: [{ id: 'crudeOil', amount: 10000 }],
      heatProduction: 500,
      description: 'Breathes oxygen and excretes crude oil at lower temperatures.',
    },
  ],
};
