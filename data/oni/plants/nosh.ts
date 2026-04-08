import type { Plant } from '../../../src/oni/types.js';

export const noshBean: Plant = {
  id: 'noshBean',
  name: 'Nosh Bean',
  growthCycles: 6,
  harvest: [{ id: 'noshBean', amount: 6000 }],
  water: 25000, // 25kg per cycle
  fertilizer: [{ id: 'phosphorite', amount: 10000 }],
};
