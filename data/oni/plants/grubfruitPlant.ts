import type { Plant } from '../../../src/oni/types.js';

export const grubfruitPlant: Plant = {
  id: 'grubfruitPlant',
  name: 'Grubfruit Plant',
  growthCycles: 8,
  harvest: [{ id: 'grubfruit', amount: 4000 }],
  water: 0,
  fertilizer: [{ id: 'sulfur', amount: 10000 }],
  description: 'A Spaced Out plant that produces Grubfruit when tended by Grubgrubs.',
  temperature: { min: -30, max: 50 },
  calories: 2000000,
  dlc: 'spaced_out',
  seedId: 'grubfruitPlantSeed',
  seedName: 'Grubfruit Plant Seed',
};
