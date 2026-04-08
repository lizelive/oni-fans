import type { Plant } from '../../../src/oni/types.js';

export const noshSprout: Plant = {
  id: 'noshSprout',
  name: 'Nosh Sprout',
  growthCycles: 21,
  harvest: [{ id: 'noshBean', amount: 12000 }],
  water: 0,
  fertilizer: [{ id: 'ethanol', amount: 20000 }, { id: 'dirt', amount: 5000 }],
  light: 0,
  description: 'A cold-loving plant that grows in the dark.',
  temperature: { min: -25, max: 5 },
  calories: 2400000,
  seedId: 'noshSproutSeed',
  seedName: 'Nosh Sprout Seed',
};
