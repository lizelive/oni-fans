import type { Plant } from '../../../src/oni/types.js';

export const duskCap: Plant = {
  id: 'duskCap',
  name: 'Dusk Cap',
  growthCycles: 7.5,
  harvest: [{ id: 'mushroom', amount: 4000 }],
  water: 0,
  fertilizer: [{ id: 'slime', amount: 4000 }],
  description: 'A mushroom that grows in carbon dioxide-rich environments.',
  temperature: { min: 5, max: 35 },
  atmosphere: ['carbonDioxide'],
  calories: 2400000,
  seedId: 'duskCapSeed',
  seedName: 'Dusk Cap Seed',
};
