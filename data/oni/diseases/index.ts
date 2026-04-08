import type { Disease } from '../../../src/oni/types.js';

export const foodPoisoning: Disease = {
  id: 'foodPoisoning',
  name: 'Food Poisoning',
  description: 'A germ that causes vomiting and diarrhea. Spreads through polluted water and polluted dirt.',
  type: 'germ',
  effects: [
    { attribute: 'bladder', modifier: -100, duration: 1 },
    { attribute: 'stamina', modifier: -20, duration: 1 },
  ],
  cureBuilding: 'outhouse',
  infectionThreshold: 100000,
  spreadMedia: ['pollutedWater', 'pollutedDirt'],
  growthElements: [
    { elementId: 'pollutedWater', growthRate: 300 },
    { elementId: 'pollutedDirt', growthRate: 100 },
  ],
  deathElements: [
    { elementId: 'chlorine', deathRate: 100 },
    { elementId: 'bleachStone', deathRate: 100 },
    { elementId: 'water', deathRate: 3 },
  ],
};

export const slimelung: Disease = {
  id: 'slimelung',
  name: 'Slimelung',
  description: 'A germ that causes coughing and breathing difficulty. Thrives in polluted oxygen and slime.',
  type: 'germ',
  effects: [
    { attribute: 'breathing', modifier: -40, duration: 2 },
    { attribute: 'athletics', modifier: -10, duration: 2 },
  ],
  cureBuilding: 'apothecary',
  infectionThreshold: 100000,
  spreadMedia: ['pollutedOxygen', 'slime'],
  growthElements: [
    { elementId: 'pollutedOxygen', growthRate: 300 },
    { elementId: 'slime', growthRate: 200 },
  ],
  deathElements: [
    { elementId: 'oxygen', deathRate: 50 },
    { elementId: 'chlorine', deathRate: 100 },
  ],
};

export const zombieSpores: Disease = {
  id: 'zombieSpores',
  name: 'Zombie Spores',
  description: 'Deadly spores from Sporechids that dramatically reduce duplicant attributes. Nearly impossible to kill.',
  type: 'germ',
  effects: [
    { attribute: 'athletics', modifier: -30, duration: 5 },
    { attribute: 'strength', modifier: -30, duration: 5 },
    { attribute: 'science', modifier: -30, duration: 5 },
  ],
  infectionThreshold: 1000,
  spreadMedia: ['oxygen', 'pollutedOxygen', 'carbonDioxide'],
};

export const radiationSickness: Disease = {
  id: 'radiationSickness',
  name: 'Radiation Sickness',
  description: 'Caused by high radiation exposure. Reduces duplicant attributes.',
  type: 'radiation',
  effects: [
    { attribute: 'athletics', modifier: -15, duration: 3 },
    { attribute: 'strength', modifier: -15, duration: 3 },
  ],
  cureBuilding: 'diseaseClinic',
  dlc: 'spaced_out',
};

export const allergicReaction: Disease = {
  id: 'allergicReaction',
  name: 'Allergic Reaction',
  description: 'Caused by floral scents from Buddy Buds. Causes sneezing.',
  type: 'other',
  effects: [
    { attribute: 'breathing', modifier: -20, duration: 1 },
  ],
};

export const sunburn: Disease = {
  id: 'sunburn',
  name: 'Sunburn',
  description: 'Caused by prolonged radiation exposure without protection.',
  type: 'radiation',
  effects: [
    { attribute: 'athletics', modifier: -10, duration: 2 },
    { attribute: 'strength', modifier: -10, duration: 2 },
  ],
  dlc: 'spaced_out',
};

export const diseases: Disease[] = [
  foodPoisoning,
  slimelung,
  zombieSpores,
  radiationSickness,
  allergicReaction,
  sunburn,
];
