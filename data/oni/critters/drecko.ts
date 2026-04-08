import type { Critter } from '../../../src/oni/types.js';

export const drecko: Critter = {
  id: 'drecko',
  name: 'Drecko',
  feed: [{ id: 'balmLilyFlower', amount: 20000 }],
  produce: [{ id: 'reedFiber', amount: 1000 }, { id: 'phosphorite', amount: 10000 }],
  heatProduction: 1000,
  description: 'A reptilian critter that grows harvestable fiber in hydrogen atmospheres.',
  hp: 25,
  lifespan: 150,
  temperature: { min: 15, max: 55 },
  caloriesNeeded: 140000,
  spaceRequired: 12,
  layEgg: { eggId: 'dreckoEgg', eggName: 'Drecklet Egg', incubationCycles: 20 },
  variants: [
    {
      id: 'glossyDrecko',
      name: 'Glossy Drecko',
      feed: [{ id: 'mealLice', amount: 20000 }],
      produce: [{ id: 'plastic', amount: 1000 }, { id: 'phosphorite', amount: 10000 }],
      heatProduction: 1000,
      description: 'Eats Mealwood and produces harvestable plastic.',
    },
  ],
};
