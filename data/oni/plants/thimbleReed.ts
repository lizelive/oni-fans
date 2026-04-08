import type { Plant } from '../../../src/oni/types.js';

export const thimbleReed: Plant = {
  id: 'thimbleReed',
  name: 'Thimble Reed',
  growthCycles: 6,
  harvest: [{ id: 'reedFiber', amount: 1000 }],
  water: 160000,
  description: 'An industrial fiber plant with high water requirements.',
  temperature: { min: 22, max: 37 },
  seedId: 'thimbleReedSeed',
  seedName: 'Thimble Reed Seed',
};
