import type { Critter } from '../../../src/oni/types.js';

export const beeta: Critter = {
  id: 'beeta',
  name: 'Beeta',
  feed: [{ id: 'uranium', amount: 35000 }],
  produce: [{ id: 'enrichedUranium', amount: 17500 }],
  heatProduction: 2000,
  description: 'A Spaced Out aggressive critter that produces enriched uranium. Requires radiation.',
  hp: 50,
  lifespan: 100,
  temperature: { min: 15, max: 65 },
  caloriesNeeded: 140000,
  spaceRequired: 16,
  layEgg: { eggId: 'beetaEgg', eggName: 'Beeta Egg', incubationCycles: 20 },
  dlc: 'spaced_out',
};
