import type { Plant } from '../../../src/oni/types.js';

export const oxyfern: Plant = {
  id: 'oxyfern',
  name: 'Oxyfern',
  growthCycles: 0,
  harvest: [],
  water: 0,
  description: 'A fern that converts carbon dioxide into breathable oxygen.',
  temperature: { min: 10, max: 40 },
  atmosphere: ['carbonDioxide'],
  seedId: 'oxyfernSeed',
  seedName: 'Oxyfern Seed',
};
