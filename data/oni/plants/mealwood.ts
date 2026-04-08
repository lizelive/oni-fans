import type { Plant } from '../../../src/oni/types.js';

export const mealwood: Plant = {
  id: 'mealwood',
  name: 'Mealwood',
  growthCycles: 3,
  harvest: [{ id: 'mealwood', amount: 1600 }],
  water: 0,
  fertilizer: [{ id: 'dirt', amount: 10000 }],
};
