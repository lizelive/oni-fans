import type { Plant } from '../../../src/oni/types.js';

export const hexalent: Plant = {
  id: 'hexalent',
  name: 'Hexalent',
  growthCycles: 6,
  harvest: [{ id: 'hexalentFruit', amount: 2000 }],
  water: 0,
  description: 'A frigid plant that grows in hydrogen atmospheres.',
  temperature: { min: -60, max: 0 },
  atmosphere: ['hydrogen'],
  dlc: 'spaced_out',
  seedId: 'hexalentSeed',
  seedName: 'Hexalent Seed',
};
