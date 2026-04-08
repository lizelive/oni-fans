import type { Plant } from '../../../src/oni/types.js';

export const arborTree: Plant = {
  id: 'arborTree',
  name: 'Arbor Tree',
  growthCycles: 4.5,
  harvest: [{ id: 'lumber', amount: 300000 }],
  water: 0,
  irrigation: [{ id: 'pollutedWater', amount: 70000 }],
  fertilizer: [{ id: 'dirt', amount: 10000 }],
  description: 'A large tree that produces harvestable Lumber from its branches.',
  temperature: { min: 10, max: 33 },
  seedId: 'arborTreeSeed',
  seedName: 'Arbor Tree Seed',
};
