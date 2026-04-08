import type { Critter } from '../../../src/oni/types.js';

export const puft: Critter = {
  id: 'puft',
  name: 'Puft',
  feed: [{ id: 'pollutedOxygen', amount: 50000 }],
  produce: [{ id: 'slime', amount: 25000 }],
  heatProduction: 500,
  description: 'A floating critter that breathes polluted oxygen and excretes slime.',
  hp: 25,
  lifespan: 75,
  temperature: { min: 5, max: 42 },
  caloriesNeeded: 140000,
  spaceRequired: 16,
  layEgg: { eggId: 'puftEgg', eggName: 'Puftlet Egg', incubationCycles: 20 },
  variants: [
    {
      id: 'puftPrince',
      name: 'Puft Prince',
      feed: [{ id: 'oxygen', amount: 50000 }],
      produce: [{ id: 'oxylite', amount: 25000 }],
      heatProduction: 500,
      description: 'Breathes oxygen and excretes oxylite.',
    },
    {
      id: 'densePuft',
      name: 'Dense Puft',
      feed: [{ id: 'carbonDioxide', amount: 50000 }],
      produce: [{ id: 'coal', amount: 25000 }],
      heatProduction: 500,
      description: 'Breathes carbon dioxide and excretes coal.',
    },
    {
      id: 'squeakyPuft',
      name: 'Squeaky Puft',
      feed: [{ id: 'chlorine', amount: 50000 }],
      produce: [{ id: 'bleachStone', amount: 25000 }],
      heatProduction: 500,
      description: 'Breathes chlorine and excretes bleach stone.',
    },
  ],
};
