import type { Building } from '../../../src/oni/types.js';

// ---------------------------------------------------------------------------
// Life Support
// ---------------------------------------------------------------------------

export const algaeTerr: Building = {
  id: 'algaeTerrarium',
  name: 'Algae Terrarium',
  category: 'life_support',
  powerConsumption: 0,
  heatGeneration: 500,
  laborSeconds: 0,
  buildCost: [{ id: 'dirt', amount: 100000 }],
  inputs: [
    { id: 'algae', amount: 18000 },
    { id: 'water', amount: 180000 },
  ],
  outputs: [
    { id: 'oxygen', amount: 24000 },
    { id: 'pollutedWater', amount: 174000 },
  ],
  cycleTime: 600,
  width: 1,
  height: 2,
  description: 'Absorbs CO2 and converts algae + water into oxygen. Emits polluted water as a byproduct.',
  floodable: true,
  overheatable: false,
  decor: -10,
  decorRadius: 1,
};

export const algaeDiffuser: Building = {
  id: 'algaeDiffuser',
  name: 'Oxygen Diffuser',
  category: 'life_support',
  powerConsumption: 0,
  heatGeneration: 1500,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [{ id: 'algae', amount: 330000 }],
  outputs: [{ id: 'oxygen', amount: 300000 }],
  cycleTime: 600,
  width: 1,
  height: 2,
  description: 'Rapidly converts algae into oxygen. Generates significant heat.',
  floodable: true,
  overheatable: false,
  decor: -10,
  decorRadius: 1,
};

export const electrolyzer: Building = {
  id: 'electrolyzer',
  name: 'Electrolyzer',
  category: 'life_support',
  powerConsumption: 120,
  heatGeneration: 1250,
  laborSeconds: 0,
  buildCost: [
    { id: 'metalOre', amount: 400000 },
    { id: 'rawMineral', amount: 200000 },
  ],
  inputs: [{ id: 'water', amount: 600000 }],
  outputs: [
    { id: 'oxygen', amount: 532800, temperature: 70 },
    { id: 'hydrogen', amount: 67200, temperature: 70 },
  ],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Splits water into oxygen and hydrogen gas.',
  requiredTech: 'Gas Piping',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
  outputTemp: 70,
};

export const rustDeoxidizer: Building = {
  id: 'rustDeoxidizer',
  name: 'Rust Deoxidizer',
  category: 'life_support',
  powerConsumption: 60,
  heatGeneration: 500,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 400000 }],
  inputs: [
    { id: 'rust', amount: 450000 },
    { id: 'salt', amount: 150000 },
  ],
  outputs: [
    { id: 'oxygen', amount: 342000 },
    { id: 'chlorine', amount: 18000 },
    { id: 'ironOre', amount: 240000 },
  ],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Extracts oxygen from rust using salt as a catalyst.',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const oxygenMaskStation: Building = {
  id: 'oxygenMaskStation',
  name: 'Oxygen Mask Station',
  category: 'equipment',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [
    { id: 'rawMineral', amount: 200000 },
    { id: 'oxylite', amount: 50000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 2,
  description: 'Stores oxylite for duplicant oxygen masks.',
};

export const atmoSuitDock: Building = {
  id: 'atmoSuitDock',
  name: 'Atmo Suit Dock',
  category: 'equipment',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'refinedMetal', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 4,
  description: 'Stores and charges atmo suits for duplicant use.',
  requiredTech: 'Suits',
};

export const jetSuitDock: Building = {
  id: 'jetSuitDock',
  name: 'Jet Suit Dock',
  category: 'equipment',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [
    { id: 'refinedMetal', amount: 400000 },
    { id: 'plastic', amount: 200000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 4,
  description: 'Stores and refuels jet suits.',
  requiredTech: 'Jet Suits',
  dlc: 'spaced_out',
};

export const carbonSkimmer: Building = {
  id: 'carbonSkimmer',
  name: 'Carbon Skimmer',
  category: 'life_support',
  powerConsumption: 120,
  heatGeneration: 500,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [
    { id: 'water', amount: 600000 },
    { id: 'co2', amount: 180000 },
  ],
  outputs: [{ id: 'pollutedWater', amount: 600000 }],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Removes CO2 from the atmosphere by running water through a filter, producing polluted water.',
  requiredTech: 'Air Systems',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const deodorizer: Building = {
  id: 'deodorizer',
  name: 'Deodorizer',
  category: 'life_support',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 25000 }],
  inputs: [
    { id: 'pollutedOxygen', amount: 60000 },
    { id: 'sand', amount: 80000 },
  ],
  outputs: [{ id: 'oxygen', amount: 60000 }],
  cycleTime: 600,
  width: 1,
  height: 2,
  description: 'Passively filters polluted oxygen into clean oxygen using filtration medium.',
  floodable: true,
  overheatable: false,
};

// ---------------------------------------------------------------------------
// Power
// ---------------------------------------------------------------------------

export const manualGenerator: Building = {
  id: 'manualGenerator',
  name: 'Manual Generator',
  category: 'power',
  powerConsumption: -400,
  heatGeneration: 1000,
  laborSeconds: 600,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'A hamster wheel that generates power when operated by a duplicant.',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const coalGenerator: Building = {
  id: 'coalGenerator',
  name: 'Coal Generator',
  category: 'power',
  powerConsumption: -600,
  heatGeneration: 9000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [{ id: 'coal', amount: 600000 }],
  outputs: [{ id: 'co2', amount: 12000 }],
  cycleTime: 600,
  width: 3,
  height: 3,
  description: 'Burns coal to generate power. Produces CO2 as a byproduct.',
  requiredTech: 'Internal Combustion',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const hydrogenGenerator: Building = {
  id: 'hydrogenGenerator',
  name: 'Hydrogen Generator',
  category: 'power',
  powerConsumption: -800,
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [
    { id: 'metalOre', amount: 200000 },
    { id: 'rawMineral', amount: 100000 },
  ],
  inputs: [{ id: 'hydrogen', amount: 67200 }],
  outputs: [],
  cycleTime: 600,
  width: 4,
  height: 3,
  description: 'Burns hydrogen gas to generate power cleanly.',
  requiredTech: 'Renewable Energy',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const naturalGasGenerator: Building = {
  id: 'naturalGasGenerator',
  name: 'Natural Gas Generator',
  category: 'power',
  powerConsumption: -800,
  heatGeneration: 8000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 400000 }],
  inputs: [{ id: 'naturalGas', amount: 54000 }],
  outputs: [
    { id: 'co2', amount: 13500 },
    { id: 'pollutedWater', amount: 40500 },
  ],
  cycleTime: 600,
  width: 2,
  height: 3,
  description: 'Burns natural gas to generate power. Emits CO2 and polluted water.',
  requiredTech: 'Fossil Fuels',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const petroleumGenerator: Building = {
  id: 'petroleumGenerator',
  name: 'Petroleum Generator',
  category: 'power',
  powerConsumption: -2000,
  heatGeneration: 8000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 800000 }],
  inputs: [{ id: 'petroleum', amount: 1200000 }],
  outputs: [
    { id: 'co2', amount: 450000 },
    { id: 'pollutedWater', amount: 450000 },
  ],
  cycleTime: 600,
  width: 4,
  height: 3,
  description: 'Burns petroleum to generate high amounts of power. Produces CO2 and polluted water.',
  requiredTech: 'Fossil Fuels',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const solarPanel: Building = {
  id: 'solarPanel',
  name: 'Solar Panel',
  category: 'power',
  powerConsumption: -380,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'glass', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 7,
  height: 3,
  description: 'Converts sunlight into electrical power. Output varies with lux intensity.',
  requiredTech: 'Renewable Energy',
  overheatable: false,
  floodable: false,
};

export const steamTurbine: Building = {
  id: 'steamTurbine',
  name: 'Steam Turbine',
  category: 'power',
  powerConsumption: -850,
  heatGeneration: -850000,
  laborSeconds: 0,
  buildCost: [
    { id: 'refinedMetal', amount: 400000 },
    { id: 'plastic', amount: 200000 },
  ],
  inputs: [{ id: 'steam', amount: 1200000, temperature: 125 }],
  outputs: [{ id: 'water', amount: 1200000, temperature: 95 }],
  cycleTime: 600,
  width: 5,
  height: 3,
  description: 'Converts steam at 125°C+ into power and outputs 95°C water. Net heat deletion.',
  requiredTech: 'Renewable Energy',
  overheatable: true,
  overheatTemp: 100,
  floodable: false,
  outputTemp: 95,
};

export const smallBattery: Building = {
  id: 'smallBattery',
  name: 'Battery',
  category: 'power',
  powerConsumption: 0,
  heatGeneration: 1000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 2,
  description: 'Stores up to 10 kJ of power. Generates heat while charging.',
  requiredTech: 'Power Regulation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const largeBattery: Building = {
  id: 'largeBattery',
  name: 'Jumbo Battery',
  category: 'power',
  powerConsumption: 0,
  heatGeneration: 1250,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 400000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Stores up to 40 kJ of power. Generates heat while charging.',
  requiredTech: 'Power Regulation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const smallTransformer: Building = {
  id: 'smallTransformer',
  name: 'Power Transformer',
  category: 'power',
  powerConsumption: 0,
  heatGeneration: 1000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Limits power output to 1 kW on its downstream circuit.',
  requiredTech: 'Power Regulation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const largeTransformer: Building = {
  id: 'largeTransformer',
  name: 'Large Power Transformer',
  category: 'power',
  powerConsumption: 0,
  heatGeneration: 2000,
  laborSeconds: 0,
  buildCost: [
    { id: 'metalOre', amount: 200000 },
    { id: 'rawMineral', amount: 200000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 3,
  height: 2,
  description: 'Limits power output to 4 kW on its downstream circuit.',
  requiredTech: 'Advanced Power Regulation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

// ---------------------------------------------------------------------------
// Food
// ---------------------------------------------------------------------------

export const microbeMusher: Building = {
  id: 'microbeMusher',
  name: 'Microbe Musher',
  category: 'food',
  powerConsumption: 240,
  heatGeneration: 2000,
  laborSeconds: 30,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 3,
  description: 'Prepares basic foods from raw ingredients. Produces low-quality meals.',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
  decor: -15,
  decorRadius: 3,
};

export const electricGrill: Building = {
  id: 'electricGrill',
  name: 'Electric Grill',
  category: 'food',
  powerConsumption: 60,
  heatGeneration: 2000,
  laborSeconds: 30,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Cooks raw ingredients into higher-quality meals.',
  requiredTech: 'Meal Preparation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const gasRange: Building = {
  id: 'gasRange',
  name: 'Gas Range',
  category: 'food',
  powerConsumption: 240,
  heatGeneration: 2000,
  laborSeconds: 30,
  buildCost: [{ id: 'metalOre', amount: 400000 }],
  inputs: [{ id: 'naturalGas', amount: 60000 }],
  outputs: [],
  cycleTime: 600,
  width: 3,
  height: 2,
  description: 'Cooks high-quality meals using natural gas.',
  requiredTech: 'Gourmet Meal Preparation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const farmTile: Building = {
  id: 'farmTile',
  name: 'Farm Tile',
  category: 'food',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'dirt', amount: 100000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'A planter box that allows domesticated plants to grow.',
  requiredTech: 'Basic Farming',
};

export const hydroponicFarm: Building = {
  id: 'hydroponicFarm',
  name: 'Hydroponic Farm',
  category: 'food',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 100000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'A planter box with piped liquid irrigation for plants.',
  requiredTech: 'Agriculture',
};

// ---------------------------------------------------------------------------
// Plumbing
// ---------------------------------------------------------------------------

export const toilet: Building = {
  id: 'outhouse',
  name: 'Outhouse',
  category: 'plumbing',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [{ id: 'dirt', amount: 15000 }],
  outputs: [{ id: 'pollutedDirt', amount: 6700 }],
  cycleTime: 600,
  width: 2,
  height: 3,
  description: 'A basic toilet that uses dirt and produces polluted dirt. Requires emptying.',
  decor: -20,
  decorRadius: 3,
  floodable: true,
};

export const lavatory: Building = {
  id: 'lavatory',
  name: 'Lavatory',
  category: 'plumbing',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [{ id: 'water', amount: 5000 }],
  outputs: [{ id: 'pollutedWater', amount: 11700 }],
  cycleTime: 600,
  width: 2,
  height: 3,
  description: 'A flushing toilet connected to plumbing. Uses water, outputs polluted water.',
  requiredTech: 'Sanitation',
  decor: 0,
  floodable: true,
};

export const sink: Building = {
  id: 'washBasin',
  name: 'Wash Basin',
  category: 'plumbing',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [{ id: 'water', amount: 5000 }],
  outputs: [{ id: 'pollutedWater', amount: 5000 }],
  cycleTime: 600,
  width: 2,
  height: 3,
  description: 'Duplicants wash their hands here to remove germs.',
  floodable: true,
};

export const shower: Building = {
  id: 'shower',
  name: 'Shower',
  category: 'plumbing',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [{ id: 'water', amount: 20000 }],
  outputs: [{ id: 'pollutedWater', amount: 20000 }],
  cycleTime: 600,
  width: 2,
  height: 3,
  description: 'Duplicants shower here for a morale boost.',
  requiredTech: 'Sanitation',
  floodable: true,
  decor: 10,
  decorRadius: 2,
};

export const liquidPump: Building = {
  id: 'liquidPump',
  name: 'Liquid Pump',
  category: 'plumbing',
  powerConsumption: 240,
  heatGeneration: 2000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Pumps liquids into pipes at 10 kg/s.',
  requiredTech: 'Liquid Piping',
  overheatable: true,
  overheatTemp: 75,
  floodable: false,
};

export const gasPump: Building = {
  id: 'gasPump',
  name: 'Gas Pump',
  category: 'plumbing',
  powerConsumption: 240,
  heatGeneration: 2000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 2,
  description: 'Pumps gas into gas pipes at 500 g/s.',
  requiredTech: 'Gas Piping',
  overheatable: true,
  overheatTemp: 75,
};

export const miniGasPump: Building = {
  id: 'miniGasPump',
  name: 'Mini Gas Pump',
  category: 'plumbing',
  powerConsumption: 60,
  heatGeneration: 500,
  laborSeconds: 0,
  buildCost: [{ id: 'refinedMetal', amount: 100000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'A small gas pump that moves 50 g/s.',
  requiredTech: 'Improved Ventilation',
  dlc: 'spaced_out',
};

export const miniLiquidPump: Building = {
  id: 'miniLiquidPump',
  name: 'Mini Liquid Pump',
  category: 'plumbing',
  powerConsumption: 60,
  heatGeneration: 500,
  laborSeconds: 0,
  buildCost: [{ id: 'refinedMetal', amount: 100000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'A small liquid pump that moves 1 kg/s.',
  requiredTech: 'Improved Plumbing',
  dlc: 'spaced_out',
};

export const waterPurifier: Building = {
  id: 'waterPurifier',
  name: 'Water Sieve',
  category: 'plumbing',
  powerConsumption: 120,
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 400000 }],
  inputs: [
    { id: 'pollutedWater', amount: 3000000 },
    { id: 'sand', amount: 600000 },
  ],
  outputs: [
    { id: 'water', amount: 3000000 },
    { id: 'pollutedDirt', amount: 120000 },
  ],
  cycleTime: 600,
  width: 4,
  height: 3,
  description: 'Filters polluted water through sand to produce clean water and polluted dirt.',
  requiredTech: 'Sanitation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const desalinator: Building = {
  id: 'desalinator',
  name: 'Desalinator',
  category: 'plumbing',
  powerConsumption: 120,
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 400000 }],
  inputs: [{ id: 'saltWater', amount: 3000000 }],
  outputs: [
    { id: 'water', amount: 2790000 },
    { id: 'salt', amount: 210000 },
  ],
  cycleTime: 600,
  width: 4,
  height: 3,
  description: 'Removes salt from salt water, producing clean water and table salt.',
  requiredTech: 'Distillation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

// ---------------------------------------------------------------------------
// Ventilation
// ---------------------------------------------------------------------------

export const gasPipe: Building = {
  id: 'gasPipe',
  name: 'Gas Pipe',
  category: 'ventilation',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'Transports gas between buildings.',
};

export const liquidPipe: Building = {
  id: 'liquidPipe',
  name: 'Liquid Pipe',
  category: 'ventilation',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'Transports liquid between buildings.',
};

export const gasBridge: Building = {
  id: 'gasBridge',
  name: 'Gas Bridge',
  category: 'ventilation',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 3,
  height: 1,
  description: 'Bridges gas pipes across gaps or to prioritize flow.',
};

export const liquidBridge: Building = {
  id: 'liquidBridge',
  name: 'Liquid Bridge',
  category: 'ventilation',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 3,
  height: 1,
  description: 'Bridges liquid pipes across gaps or to prioritize flow.',
};

// ---------------------------------------------------------------------------
// Refinement
// ---------------------------------------------------------------------------

export const rockCrusher: Building = {
  id: 'rockCrusher',
  name: 'Rock Crusher',
  category: 'refinement',
  powerConsumption: 240,
  heatGeneration: 16000,
  laborSeconds: 60,
  buildCost: [
    { id: 'metalOre', amount: 200000 },
    { id: 'rawMineral', amount: 200000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 4,
  height: 4,
  description: 'Crushes raw materials into refined materials, sand, or lime.',
  requiredTech: 'Brute-Force Refinement',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
  noise: 35,
  noiseRadius: 5,
};

export const metalRefinery: Building = {
  id: 'metalRefinery',
  name: 'Metal Refinery',
  category: 'refinement',
  powerConsumption: 1200,
  heatGeneration: 16000,
  laborSeconds: 60,
  buildCost: [
    { id: 'metalOre', amount: 400000 },
    { id: 'rawMineral', amount: 400000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 5,
  height: 4,
  description: 'Refines metal ore into pure metal using a liquid coolant loop (400 kg).',
  requiredTech: 'Smelting',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
  noise: 35,
  noiseRadius: 5,
};

export const glassForge: Building = {
  id: 'glassForge',
  name: 'Glass Forge',
  category: 'refinement',
  powerConsumption: 1200,
  heatGeneration: 16000,
  laborSeconds: 60,
  buildCost: [
    { id: 'metalOre', amount: 400000 },
    { id: 'rawMineral', amount: 200000 },
  ],
  inputs: [{ id: 'sand', amount: 1500000 }],
  outputs: [{ id: 'glass', amount: 375000 }],
  cycleTime: 600,
  width: 5,
  height: 4,
  description: 'Melts sand into molten glass. Produces significant heat.',
  requiredTech: 'Temperature Modulation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const kiln: Building = {
  id: 'kiln',
  name: 'Kiln',
  category: 'refinement',
  powerConsumption: 0,
  heatGeneration: 16000,
  laborSeconds: 60,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Fires materials: clay to ceramic, lumber to coal, lime to calcium. No power needed.',
  requiredTech: 'Brute-Force Refinement',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const oilRefinery: Building = {
  id: 'oilRefinery',
  name: 'Oil Refinery',
  category: 'refinement',
  powerConsumption: 480,
  heatGeneration: 16000,
  laborSeconds: 0,
  buildCost: [
    { id: 'metalOre', amount: 400000 },
    { id: 'rawMineral', amount: 200000 },
  ],
  inputs: [{ id: 'crudeOil', amount: 6000000 }],
  outputs: [
    { id: 'petroleum', amount: 3000000 },
    { id: 'naturalGas', amount: 54000 },
  ],
  cycleTime: 600,
  width: 5,
  height: 4,
  description: 'Refines crude oil into petroleum and natural gas.',
  requiredTech: 'Distillation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const polymerPress: Building = {
  id: 'polymerPress',
  name: 'Polymer Press',
  category: 'refinement',
  powerConsumption: 240,
  heatGeneration: 8000,
  laborSeconds: 0,
  buildCost: [
    { id: 'metalOre', amount: 400000 },
    { id: 'rawMineral', amount: 200000 },
  ],
  inputs: [{ id: 'petroleum', amount: 500000 }],
  outputs: [
    { id: 'plastic', amount: 500000 },
    { id: 'steam', amount: 8340 },
  ],
  cycleTime: 600,
  width: 3,
  height: 3,
  description: 'Presses petroleum into plastic. Emits steam as a byproduct.',
  requiredTech: 'Plastics',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const ethanolDistiller: Building = {
  id: 'ethanolDistiller',
  name: 'Ethanol Distiller',
  category: 'refinement',
  powerConsumption: 240,
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 400000 }],
  inputs: [{ id: 'lumber', amount: 600000 }],
  outputs: [
    { id: 'ethanol', amount: 300000 },
    { id: 'pollutedDirt', amount: 200000 },
    { id: 'co2', amount: 100000 },
  ],
  cycleTime: 600,
  width: 4,
  height: 3,
  description: 'Distills lumber into ethanol, polluted dirt, and CO2.',
  requiredTech: 'Distillation',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const fertilizerSynthesizer: Building = {
  id: 'fertilizerSynthesizer',
  name: 'Fertilizer Synthesizer',
  category: 'refinement',
  powerConsumption: 120,
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 400000 }],
  inputs: [
    { id: 'pollutedWater', amount: 23400 },
    { id: 'dirt', amount: 39000 },
    { id: 'phosphorite', amount: 15600 },
  ],
  outputs: [
    { id: 'fertilizer', amount: 72000 },
    { id: 'naturalGas', amount: 6000 },
  ],
  cycleTime: 600,
  width: 4,
  height: 3,
  description: 'Synthesizes fertilizer from polluted water, dirt, and phosphorite.',
  requiredTech: 'Agriculture',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const molecularForge: Building = {
  id: 'molecularForge',
  name: 'Molecular Forge',
  category: 'refinement',
  powerConsumption: 1200,
  heatGeneration: 16000,
  laborSeconds: 120,
  buildCost: [
    { id: 'steel', amount: 400000 },
    { id: 'plastic', amount: 200000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 5,
  height: 4,
  description: 'Creates super-advanced materials from rare ingredients.',
  requiredTech: 'Solid Transport',
  dlc: 'spaced_out',
  overheatable: true,
  overheatTemp: 75,
};

export const sludgePress: Building = {
  id: 'sludgePress',
  name: 'Sludge Press',
  category: 'refinement',
  powerConsumption: 120,
  heatGeneration: 4000,
  laborSeconds: 0,
  buildCost: [{ id: 'metalOre', amount: 400000 }],
  inputs: [{ id: 'mud', amount: 600000 }],
  outputs: [
    { id: 'water', amount: 300000 },
    { id: 'dirt', amount: 300000 },
  ],
  cycleTime: 600,
  width: 4,
  height: 3,
  description: 'Separates mud into clean water and dirt.',
  dlc: 'spaced_out',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

// ---------------------------------------------------------------------------
// Medicine
// ---------------------------------------------------------------------------

export const apothecary: Building = {
  id: 'apothecary',
  name: 'Apothecary',
  category: 'medicine',
  powerConsumption: 240,
  heatGeneration: 2000,
  laborSeconds: 60,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 3,
  description: 'Produces medicine and supplements from raw ingredients.',
  requiredTech: 'Medicine I',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const diseaseClinic: Building = {
  id: 'diseaseClinic',
  name: 'Disease Clinic',
  category: 'medicine',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 60,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 3,
  height: 2,
  description: 'A doctor treats sick duplicants here.',
  requiredTech: 'Medicine I',
};

// ---------------------------------------------------------------------------
// Furniture
// ---------------------------------------------------------------------------

export const cot: Building = {
  id: 'cot',
  name: 'Cot',
  category: 'furniture',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 4,
  height: 2,
  description: 'A basic sleeping spot for duplicants.',
  decor: -10,
  decorRadius: 2,
};

export const comfyBed: Building = {
  id: 'comfyBed',
  name: 'Comfy Bed',
  category: 'furniture',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [
    { id: 'rawMineral', amount: 200000 },
    { id: 'reedFiber', amount: 10000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 4,
  height: 2,
  description: 'A comfortable bed that provides a stamina and morale bonus.',
  requiredTech: 'Interior Decor',
  decor: 5,
  decorRadius: 2,
};

export const messTable: Building = {
  id: 'messTable',
  name: 'Mess Table',
  category: 'furniture',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'A table where duplicants eat their meals for a morale boost.',
  decor: 0,
  decorRadius: 0,
};

// ---------------------------------------------------------------------------
// Research
// ---------------------------------------------------------------------------

export const researchStation: Building = {
  id: 'researchStation',
  name: 'Research Station',
  category: 'research',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 600,
  buildCost: [{ id: 'rawMineral', amount: 400000 }],
  inputs: [{ id: 'dirt', amount: 200000 }],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Duplicants research new technologies here using dirt as a research material.',
};

export const superComputer: Building = {
  id: 'superComputer',
  name: 'Super Computer',
  category: 'research',
  powerConsumption: 120,
  heatGeneration: 2000,
  laborSeconds: 600,
  buildCost: [
    { id: 'refinedMetal', amount: 200000 },
    { id: 'rawMineral', amount: 200000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 3,
  height: 3,
  description: 'Performs tier-2 advanced research.',
  requiredTech: 'Advanced Research',
  overheatable: true,
  overheatTemp: 75,
  floodable: true,
};

export const telescope: Building = {
  id: 'telescope',
  name: 'Telescope',
  category: 'research',
  powerConsumption: 120,
  heatGeneration: 2000,
  laborSeconds: 600,
  buildCost: [
    { id: 'metalOre', amount: 200000 },
    { id: 'glass', amount: 50000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 4,
  height: 4,
  description: 'Analyzes stellar objects for space research.',
  requiredTech: 'Astronomy',
  overheatable: true,
  overheatTemp: 75,
};

// ---------------------------------------------------------------------------
// Stations
// ---------------------------------------------------------------------------

export const groomingStation: Building = {
  id: 'groomingStation',
  name: 'Grooming Station',
  category: 'stations',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 60,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Duplicants groom critters here to keep them tame.',
  requiredTech: 'Animal Control',
};

export const shearingStation: Building = {
  id: 'shearingStation',
  name: 'Shearing Station',
  category: 'stations',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 60,
  buildCost: [{ id: 'metalOre', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 2,
  height: 2,
  description: 'Shears critters to harvest materials like reed fiber.',
  requiredTech: 'Animal Control',
};

// ---------------------------------------------------------------------------
// Automation
// ---------------------------------------------------------------------------

export const thermoSensor: Building = {
  id: 'thermoSensor',
  name: 'Thermo Sensor',
  category: 'automation',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'refinedMetal', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'Sends a green signal when the detected temperature meets the configured threshold.',
  requiredTech: 'Smart Home',
};

export const hydroSensor: Building = {
  id: 'hydroSensor',
  name: 'Hydro Sensor',
  category: 'automation',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'refinedMetal', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'Sends a green signal when liquid pressure meets the configured threshold.',
  requiredTech: 'Smart Home',
};

export const gasElementSensor: Building = {
  id: 'gasElementSensor',
  name: 'Gas Element Sensor',
  category: 'automation',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'refinedMetal', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'Sends a green signal when the specified gas element is detected.',
  requiredTech: 'Smart Home',
};

export const liquidElementSensor: Building = {
  id: 'liquidElementSensor',
  name: 'Liquid Element Sensor',
  category: 'automation',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'refinedMetal', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'Sends a green signal when the specified liquid element is detected.',
  requiredTech: 'Smart Home',
};

export const atmoSensor: Building = {
  id: 'atmoSensor',
  name: 'Atmo Sensor',
  category: 'automation',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'refinedMetal', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'Sends a green signal when gas pressure meets the configured threshold.',
  requiredTech: 'Smart Home',
};

export const automationSwitch: Building = {
  id: 'automationSwitch',
  name: 'Switch',
  category: 'automation',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'refinedMetal', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'A manual on/off switch for automation wires.',
  requiredTech: 'Smart Home',
};

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

export const printingPod: Building = {
  id: 'printingPod',
  name: 'Printing Pod',
  category: 'utilities',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 4,
  height: 5,
  description: 'The starting pod. Prints new duplicants and care packages every 3 cycles.',
  decor: 30,
  decorRadius: 6,
};

export const storageCompactor: Building = {
  id: 'storageCompactor',
  name: 'Storage Compactor',
  category: 'utilities',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 2,
  description: 'Stores solid materials in a compact space.',
  decor: -10,
  decorRadius: 2,
};

export const smartStorageBin: Building = {
  id: 'smartStorageBin',
  name: 'Smart Storage Bin',
  category: 'utilities',
  powerConsumption: 60,
  heatGeneration: 500,
  laborSeconds: 0,
  buildCost: [
    { id: 'refinedMetal', amount: 100000 },
    { id: 'rawMineral', amount: 100000 },
  ],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 2,
  description: 'Stores solid materials with automation port for logistics control.',
  requiredTech: 'Smart Storage',
  decor: -10,
  decorRadius: 2,
};

export const ladder: Building = {
  id: 'ladder',
  name: 'Ladder',
  category: 'base',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 25000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'Allows vertical movement for duplicants.',
};

export const tile: Building = {
  id: 'tile',
  name: 'Tile',
  category: 'base',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 1,
  description: 'A solid floor or wall tile.',
};

export const pneumaticDoor: Building = {
  id: 'pneumaticDoor',
  name: 'Pneumatic Door',
  category: 'base',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 2,
  description: 'A basic unpowered door that duplicants can open and close.',
};

export const mechanizedAirlock: Building = {
  id: 'mechanizedAirlock',
  name: 'Mechanized Airlock',
  category: 'base',
  powerConsumption: 120,
  heatGeneration: 500,
  laborSeconds: 0,
  buildCost: [{ id: 'refinedMetal', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 1,
  height: 2,
  description: 'A powered door that opens and closes quickly. Supports automation.',
  requiredTech: 'Pressure Management',
  overheatable: true,
  overheatTemp: 75,
};

export const tempshiftPlate: Building = {
  id: 'tempshiftPlate',
  name: 'Tempshift Plate',
  category: 'utilities',
  powerConsumption: 0,
  heatGeneration: 0,
  laborSeconds: 0,
  buildCost: [{ id: 'rawMineral', amount: 200000 }],
  inputs: [],
  outputs: [],
  cycleTime: 600,
  width: 3,
  height: 3,
  description: 'Equalizes temperatures within a 3x3 area by increasing thermal conductivity.',
  requiredTech: 'Temperature Modulation',
};

// ---------------------------------------------------------------------------
// Aggregate
// ---------------------------------------------------------------------------

export const buildings: Building[] = [
  // Life Support
  algaeTerr,
  algaeDiffuser,
  electrolyzer,
  rustDeoxidizer,
  oxygenMaskStation,
  atmoSuitDock,
  jetSuitDock,
  carbonSkimmer,
  deodorizer,
  // Power
  manualGenerator,
  coalGenerator,
  hydrogenGenerator,
  naturalGasGenerator,
  petroleumGenerator,
  solarPanel,
  steamTurbine,
  smallBattery,
  largeBattery,
  smallTransformer,
  largeTransformer,
  // Food
  microbeMusher,
  electricGrill,
  gasRange,
  farmTile,
  hydroponicFarm,
  // Plumbing
  toilet,
  lavatory,
  sink,
  shower,
  liquidPump,
  gasPump,
  miniGasPump,
  miniLiquidPump,
  waterPurifier,
  desalinator,
  // Ventilation
  gasPipe,
  liquidPipe,
  gasBridge,
  liquidBridge,
  // Refinement
  rockCrusher,
  metalRefinery,
  glassForge,
  kiln,
  oilRefinery,
  polymerPress,
  ethanolDistiller,
  fertilizerSynthesizer,
  molecularForge,
  sludgePress,
  // Medicine
  apothecary,
  diseaseClinic,
  // Furniture
  cot,
  comfyBed,
  messTable,
  // Research
  researchStation,
  superComputer,
  telescope,
  // Stations
  groomingStation,
  shearingStation,
  // Automation
  thermoSensor,
  hydroSensor,
  gasElementSensor,
  liquidElementSensor,
  atmoSensor,
  automationSwitch,
  // Utilities
  printingPod,
  storageCompactor,
  smartStorageBin,
  ladder,
  tile,
  pneumaticDoor,
  mechanizedAirlock,
  tempshiftPlate,
];
