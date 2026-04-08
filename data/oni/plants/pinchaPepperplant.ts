import type { Plant } from '../../../src/oni/types.js';

export const pinchaPepperplant: Plant = {
  id: 'pinchaPepperplant',
  name: 'Pincha Pepperplant',
  growthCycles: 8,
  harvest: [{ id: 'pinchaPeppernut', amount: 4000 }],
  water: 0,
  irrigation: [{ id: 'pollutedWater', amount: 35000 }],
  fertilizer: [{ id: 'phosphorite', amount: 1000 }],
  description: 'A spicy plant that grows in very hot environments.',
  temperature: { min: 35, max: 85 },
  calories: 0,
  seedId: 'pinchaPepperplantSeed',
  seedName: 'Pincha Pepperplant Seed',
};
