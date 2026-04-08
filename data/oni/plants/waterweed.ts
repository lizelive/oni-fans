import type { Plant } from '../../../src/oni/types.js';

export const waterweed: Plant = {
  id: 'waterweed',
  name: 'Waterweed',
  growthCycles: 12,
  harvest: [{ id: 'lettuce', amount: 400 }],
  water: 0,
  irrigation: [{ id: 'saltWater', amount: 5000 }],
  fertilizer: [{ id: 'bleachStone', amount: 500 }],
  description: 'An aquatic plant that produces edible Lettuce.',
  temperature: { min: 22, max: 65 },
  calories: 400000,
  seedId: 'waterweedSeed',
  seedName: 'Waterweed Seed',
};
