import type { Plant } from '../../../src/oni/types.js';

export const bluffBriar: Plant = {
  id: 'bluffBriar',
  name: 'Bluff Briar',
  growthCycles: 0,
  harvest: [],
  water: 5000,
  description: 'A decorative plant that provides +10 decor.',
  temperature: { min: 15, max: 30 },
  decoration: true,
  seedId: 'bluffBriarSeed',
  seedName: 'Bluff Briar Seed',
};
