import type { Plant } from '../../../src/oni/types.js';

export const mirthLeaf: Plant = {
  id: 'mirthLeaf',
  name: 'Mirth Leaf',
  growthCycles: 0,
  harvest: [],
  water: 2500,
  description: 'A decorative plant that provides +25 decor.',
  temperature: { min: 10, max: 45 },
  decoration: true,
  seedId: 'mirthLeafSeed',
  seedName: 'Mirth Leaf Seed',
};
