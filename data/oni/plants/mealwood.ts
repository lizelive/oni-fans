import type { Plant } from '../../../src/oni/types.js';

export const mealwood: Plant = {
  id: 'mealwood',
  name: 'Mealwood',
  growthCycles: 3,
  harvest: [{ id: 'mealLice', amount: 600 }],
  water: 0,
  fertilizer: [{ id: 'dirt', amount: 10000 }],
  description: 'A fuss-free plant that produces Meal Lice when harvested.',
  temperature: { min: 10, max: 30 },
  calories: 600000,
  seedId: 'mealwoodSeed',
  seedName: 'Mealwood Seed',
};
