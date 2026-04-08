import type { Critter } from '../../../src/oni/types.js';

export const plugSlug: Critter = {
  id: 'plugSlug',
  name: 'Plug Slug',
  feed: [{ id: 'metalOre', amount: 70000 }],
  produce: [],
  heatProduction: 500,
  description: 'A Spaced Out critter that generates 400W of power when stationed on a ceiling.',
  hp: 25,
  lifespan: 100,
  temperature: { min: 10, max: 50 },
  caloriesNeeded: 70000,
  spaceRequired: 12,
  layEgg: { eggId: 'plugSlugEgg', eggName: 'Plug Slug Egg', incubationCycles: 20 },
  dlc: 'spaced_out',
};
