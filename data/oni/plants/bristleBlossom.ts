import type { Plant } from '../../../src/oni/types.js';

export const bristleBlossom: Plant = {
  id: 'bristleBlossom',
  name: 'Bristle Blossom',
  growthCycles: 3,
  harvest: [{ id: 'bristleBerry', amount: 4 }],
  water: 35000, // 35kg water per cycle
  light: 10000, // 10000 lux
};
