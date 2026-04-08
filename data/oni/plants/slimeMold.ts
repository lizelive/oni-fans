import type { Plant } from '../../../src/oni/types.js';

export const slimeMold: Plant = {
  id: 'slimeMold',
  name: 'Slime Mold',
  growthCycles: 5,
  harvest: [{ id: 'slimeMold', amount: 4000 }],
  water: 0,
  fertilizer: [{ id: 'pollutedWater', amount: 20000 }],
};
