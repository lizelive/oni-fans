import type { Critter } from '../../../src/oni/types.js';

export const pokeshell: Critter = {
  id: 'pokeshell',
  name: 'Pokeshell',
  feed: [{ id: 'pollutedDirt', amount: 140000 }],
  produce: [{ id: 'sand', amount: 70000 }],
  heatProduction: 500,
  description: 'A crustacean critter that eats polluted dirt and rot piles, excreting sand. Its crushed eggs produce lime.',
  hp: 25,
  lifespan: 100,
  temperature: { min: 10, max: 60 },
  caloriesNeeded: 140000,
  spaceRequired: 12,
  layEgg: { eggId: 'pokeshellEgg', eggName: 'Pokeshell Egg', incubationCycles: 20 },
};
