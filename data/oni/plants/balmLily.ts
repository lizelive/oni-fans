import type { Plant } from '../../../src/oni/types.js';

export const balmLily: Plant = {
  id: 'balmLily',
  name: 'Balm Lily',
  growthCycles: 12,
  harvest: [{ id: 'balmLilyFlower', amount: 1000 }],
  water: 0,
  description: 'A medicinal flower that grows in chlorine atmospheres.',
  temperature: { min: 8, max: 37 },
  atmosphere: ['chlorine'],
  seedId: 'balmLilySeed',
  seedName: 'Balm Lily Seed',
};
