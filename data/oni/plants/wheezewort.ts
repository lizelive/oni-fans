import type { Plant } from '../../../src/oni/types.js';

export const wheezewort: Plant = {
  id: 'wheezewort',
  name: 'Wheezewort',
  growthCycles: 0,
  harvest: [],
  water: 0,
  fertilizer: [{ id: 'phosphorite', amount: 1000 }],
  description: 'A cooling plant that absorbs heat from its surroundings at 12 kDTU/s.',
  temperature: { min: -60, max: 95 },
  seedId: 'wheezewortSeed',
  seedName: 'Wheezewort Seed',
};
