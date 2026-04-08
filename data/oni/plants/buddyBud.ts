import type { Plant } from '../../../src/oni/types.js';

export const buddyBud: Plant = {
  id: 'buddyBud',
  name: 'Buddy Bud',
  growthCycles: 0,
  harvest: [],
  water: 0,
  description: 'A decorative plant that produces floral scents.',
  temperature: { min: 10, max: 30 },
  decoration: true,
  seedId: 'buddyBudSeed',
  seedName: 'Buddy Bud Seed',
};
