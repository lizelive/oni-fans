import type { Plant } from '../../../src/oni/types.js';

export const bristleBlossom: Plant = {
  id: 'bristleBlossom',
  name: 'Bristle Blossom',
  growthCycles: 6,
  harvest: [{ id: 'bristleBerry', amount: 1600 }],
  water: 20000,
  light: 2400,
  description: 'A flowering plant that thrives in well-lit, watered conditions.',
  temperature: { min: 5, max: 30 },
  calories: 1600000,
  seedId: 'bristleBlossomSeed',
  seedName: 'Bristle Blossom Seed',
};
