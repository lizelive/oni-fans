import type { Plant } from '../../../src/oni/types.js';

export const sleetWheat: Plant = {
  id: 'sleetWheat',
  name: 'Sleet Wheat',
  growthCycles: 18,
  harvest: [{ id: 'sleetWheatGrain', amount: 18000 }],
  water: 20000,
  fertilizer: [{ id: 'dirt', amount: 1000 }],
  description: 'A frigid grain that thrives in sub-zero temperatures.',
  temperature: { min: -55, max: 5 },
  calories: 600000,
  seedId: 'sleetWheatSeed',
  seedName: 'Sleet Wheat Seed',
};
