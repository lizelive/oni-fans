import type { Plant } from '../../../src/oni/types.js';

export const bogBucket: Plant = {
  id: 'bogBucket',
  name: 'Bog Bucket',
  growthCycles: 12,
  harvest: [{ id: 'bogJelly', amount: 3500 }],
  water: 0,
  irrigation: [{ id: 'pollutedWater', amount: 40000 }],
  fertilizer: [{ id: 'slime', amount: 10000 }],
  description: 'A murky plant that thrives in warm, polluted conditions.',
  temperature: { min: 25, max: 55 },
  calories: 1840000,
  dlc: 'spaced_out',
  seedId: 'bogBucketSeed',
  seedName: 'Bog Bucket Seed',
};
