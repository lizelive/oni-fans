import type { Critter } from '../../../src/oni/types.js';

export const pacu: Critter = {
  id: 'pacu',
  name: 'Pacu',
  feed: [{ id: 'algae', amount: 140000 }],
  produce: [{ id: 'pollutedDirt', amount: 70000 }],
  heatProduction: 500,
  description: 'An aquatic fish critter that eats algae and produces polluted dirt.',
  hp: 25,
  lifespan: 25,
  temperature: { min: 0, max: 35 },
  caloriesNeeded: 140000,
  spaceRequired: 8,
  layEgg: { eggId: 'pacuEgg', eggName: 'Pacu Egg', incubationCycles: 20 },
};
