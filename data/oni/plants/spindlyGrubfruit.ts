import type { Plant } from '../../../src/oni/types.js';

export const spindlyGrubfruit: Plant = {
  id: 'spindlyGrubfruit',
  name: 'Spindly Grubfruit Plant',
  growthCycles: 16,
  harvest: [{ id: 'grubfruit', amount: 4000 }],
  water: 0,
  description: 'A wild variant of the Grubfruit Plant that grows without tending.',
  temperature: { min: -30, max: 50 },
  calories: 2000000,
  dlc: 'spaced_out',
  seedId: 'spindlyGrubfruitSeed',
  seedName: 'Spindly Grubfruit Seed',
};
