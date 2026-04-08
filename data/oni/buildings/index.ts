import type { Building } from '../../../src/oni/types.js';

export const algaeTerr: Building = {
  id: 'algaeTerrarium',
  name: 'Algae Terrarium',
  category: 'life_support',
  powerConsumption: 0,
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [
    { id: 'algae', amount: 800000 },
    { id: 'sandstone', amount: 100000 },
  ],
  inputs: [
    { id: 'algae', amount: 270000 },
    { id: 'water', amount: 300000 },
  ],
  outputs: [
    { id: 'oxygen', amount: 500000 },
    { id: 'pollutedWater', amount: 30000 },
  ],
  cycleTime: 600,
};

export const electrolyzer: Building = {
  id: 'electrolyzer',
  name: 'Electrolyzer',
  category: 'life_support',
  powerConsumption: 120,
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [
    { id: 'iron', amount: 1000000 },
    { id: 'copper', amount: 200000 },
  ],
  inputs: [
    { id: 'water', amount: 1000000 },
  ],
  outputs: [
    { id: 'oxygen', amount: 888000 },
    { id: 'hydrogen', amount: 112000 },
  ],
  cycleTime: 600,
};

export const carbonSkimmer: Building = {
  id: 'carbonSkimmer',
  name: 'Carbon Skimmer',
  category: 'ventilation',
  powerConsumption: 120,
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [
    { id: 'iron', amount: 800000 },
  ],
  inputs: [
    { id: 'pollutedWater', amount: 1000000 },
    { id: 'co2', amount: 300000 },
  ],
  outputs: [
    { id: 'pollutedWater', amount: 1300000 },
  ],
  cycleTime: 600,
};

export const waterPurifier: Building = {
  id: 'waterPurifier',
  name: 'Water Purifier',
  category: 'plumbing',
  powerConsumption: 60,
  heatGeneration: 2000,
  laborSeconds: 30,
  buildCost: [
    { id: 'iron', amount: 600000 },
    { id: 'bleachStone', amount: 100000 },
  ],
  inputs: [
    { id: 'pollutedWater', amount: 1000000 },
    { id: 'bleachStone', amount: 1000 },
  ],
  outputs: [
    { id: 'water', amount: 900000 },
    { id: 'dirt', amount: 100000 },
  ],
  cycleTime: 600,
};

export const coalGenerator: Building = {
  id: 'coalGenerator',
  name: 'Coal Generator',
  category: 'power',
  powerConsumption: -600, // produces 600W
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [
    { id: 'iron', amount: 2000000 },
  ],
  inputs: [
    { id: 'coal', amount: 600000 },
  ],
  outputs: [
    { id: 'co2', amount: 200000 },
  ],
  cycleTime: 600,
};

export const hydrogenGenerator: Building = {
  id: 'hydrogenGenerator',
  name: 'Hydrogen Generator',
  category: 'power',
  powerConsumption: -800, // produces 800W
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [
    { id: 'iron', amount: 2000000 },
    { id: 'copper', amount: 200000 },
  ],
  inputs: [
    { id: 'hydrogen', amount: 112000 },
  ],
  outputs: [],
  cycleTime: 600,
};

export const toilet: Building = {
  id: 'outhouse',
  name: 'Outhouse',
  category: 'base',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [
    { id: 'dirt', amount: 200000 },
  ],
  inputs: [
    { id: 'food', amount: 1000 },
  ],
  outputs: [
    { id: 'pollutedDirt', amount: 65000 },
  ],
  cycleTime: 600,
};

export const sink: Building = {
  id: 'washBasin',
  name: 'Wash Basin',
  category: 'base',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [
    { id: 'sandstone', amount: 200000 },
  ],
  inputs: [
    { id: 'water', amount: 5000 },
  ],
  outputs: [
    { id: 'pollutedWater', amount: 5000 },
  ],
  cycleTime: 600,
};

export const researchStation: Building = {
  id: 'researchStation',
  name: 'Research Station',
  category: 'research',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 600,
  buildCost: [
    { id: 'sandstone', amount: 400000 },
  ],
  inputs: [
    { id: 'dirt', amount: 200000 },
  ],
  outputs: [],
  cycleTime: 600,
};

export const messTable: Building = {
  id: 'messTable',
  name: 'Mess Table',
  category: 'furniture',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [
    { id: 'sandstone', amount: 200000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
};

export const cot: Building = {
  id: 'cot',
  name: 'Cot',
  category: 'furniture',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [
    { id: 'sandstone', amount: 200000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
};

export const buildings: Building[] = [
  algaeTerr,
  electrolyzer,
  carbonSkimmer,
  waterPurifier,
  coalGenerator,
  hydrogenGenerator,
  toilet,
  sink,
  researchStation,
  messTable,
  cot,
];
