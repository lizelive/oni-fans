import type { Geyser } from '../../../src/oni/types.js';

export const coolSteamVent: Geyser = {
  id: 'coolSteamVent',
  name: 'Cool Steam Vent',
  description: 'Outputs steam at 110°C.',
  output: { id: 'steam', amount: 1500 },
  outputTemp: 110,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 5000,
};

export const steamVent: Geyser = {
  id: 'steamVent',
  name: 'Steam Vent',
  description: 'Outputs steam at 500°C.',
  output: { id: 'steam', amount: 2000 },
  outputTemp: 500,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 5000,
};

export const waterGeyser: Geyser = {
  id: 'waterGeyser',
  name: 'Water Geyser',
  description: 'Outputs water at 95°C.',
  output: { id: 'water', amount: 3333 },
  outputTemp: 95,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 500000,
};

export const coolSlushGeyser: Geyser = {
  id: 'coolSlushGeyser',
  name: 'Cool Slush Geyser',
  description: 'Outputs polluted water at -10°C.',
  output: { id: 'pollutedWater', amount: 1500 },
  outputTemp: -10,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 500000,
};

export const pollutedWaterVent: Geyser = {
  id: 'pollutedWaterVent',
  name: 'Polluted Water Vent',
  description: 'Outputs polluted water at 30°C.',
  output: { id: 'pollutedWater', amount: 3333 },
  outputTemp: 30,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 500000,
};

export const saltWaterGeyser: Geyser = {
  id: 'saltWaterGeyser',
  name: 'Salt Water Geyser',
  description: 'Outputs salt water at 95°C.',
  output: { id: 'saltWater', amount: 3333 },
  outputTemp: 95,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 500000,
};

export const hotPollutedOxygenVent: Geyser = {
  id: 'hotPollutedOxygenVent',
  name: 'Hot Polluted Oxygen Vent',
  description: 'Outputs polluted oxygen at 500°C.',
  output: { id: 'pollutedOxygen', amount: 500 },
  outputTemp: 500,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 5000,
};

export const infectiousPollutedOxygenVent: Geyser = {
  id: 'infectiousPollutedOxygenVent',
  name: 'Infectious Polluted Oxygen Vent',
  description: 'Outputs polluted oxygen with slimelung germs at 60°C.',
  output: { id: 'pollutedOxygen', amount: 500 },
  outputTemp: 60,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 5000,
};

export const chlorineGasVent: Geyser = {
  id: 'chlorineGasVent',
  name: 'Chlorine Gas Vent',
  description: 'Outputs chlorine gas at 60°C.',
  output: { id: 'chlorine', amount: 500 },
  outputTemp: 60,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 5000,
};

export const naturalGasGeyser: Geyser = {
  id: 'naturalGasGeyser',
  name: 'Natural Gas Geyser',
  description: 'Outputs natural gas at 150°C.',
  output: { id: 'naturalGas', amount: 250 },
  outputTemp: 150,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 5000,
};

export const hydrogenVent: Geyser = {
  id: 'hydrogenVent',
  name: 'Hydrogen Vent',
  description: 'Outputs hydrogen gas at 500°C.',
  output: { id: 'hydrogen', amount: 500 },
  outputTemp: 500,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 5000,
};

export const minorVolcano: Geyser = {
  id: 'minorVolcano',
  name: 'Minor Volcano',
  description: 'Outputs small amounts of magma at ~1727°C.',
  output: { id: 'magma', amount: 400 },
  outputTemp: 1726.85,
  eruptionPeriod: { min: 6, max: 12 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 15, max: 135 },
  dormantCycles: { min: 15, max: 113 },
};

export const volcano: Geyser = {
  id: 'volcano',
  name: 'Volcano',
  description: 'Outputs large amounts of magma at ~1727°C.',
  output: { id: 'magma', amount: 4000 },
  outputTemp: 1726.85,
  eruptionPeriod: { min: 6, max: 12 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 15, max: 135 },
  dormantCycles: { min: 15, max: 113 },
};

export const carbonDioxideGeyser: Geyser = {
  id: 'carbonDioxideGeyser',
  name: 'Carbon Dioxide Geyser',
  description: 'Outputs liquid carbon dioxide at -55°C.',
  output: { id: 'liquidCarbonDioxide', amount: 500 },
  outputTemp: -55.15,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 500000,
};

export const carbonDioxideVent: Geyser = {
  id: 'carbonDioxideVent',
  name: 'Carbon Dioxide Vent',
  description: 'Outputs carbon dioxide gas.',
  output: { id: 'carbonDioxide', amount: 500 },
  outputTemp: 500,
  eruptionPeriod: { min: 60, max: 1140 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 24, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  overpressure: 5000,
};

export const ironVolcano: Geyser = {
  id: 'ironVolcano',
  name: 'Iron Volcano',
  description: 'Outputs molten iron at ~2527°C.',
  output: { id: 'moltenIron', amount: 400 },
  outputTemp: 2526.85,
  eruptionPeriod: { min: 6, max: 12 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 15, max: 135 },
  dormantCycles: { min: 15, max: 113 },
};

export const copperVolcano: Geyser = {
  id: 'copperVolcano',
  name: 'Copper Volcano',
  description: 'Outputs molten copper at ~2227°C.',
  output: { id: 'moltenCopper', amount: 400 },
  outputTemp: 2226.85,
  eruptionPeriod: { min: 6, max: 12 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 15, max: 135 },
  dormantCycles: { min: 15, max: 113 },
};

export const goldVolcano: Geyser = {
  id: 'goldVolcano',
  name: 'Gold Volcano',
  description: 'Outputs molten gold at ~2627°C.',
  output: { id: 'moltenGold', amount: 400 },
  outputTemp: 2626.85,
  eruptionPeriod: { min: 6, max: 12 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 15, max: 135 },
  dormantCycles: { min: 15, max: 113 },
};

export const cobaltVolcano: Geyser = {
  id: 'cobaltVolcano',
  name: 'Cobalt Volcano',
  description: 'Outputs molten cobalt at ~2527°C.',
  output: { id: 'moltenCobalt', amount: 400 },
  outputTemp: 2526.85,
  eruptionPeriod: { min: 6, max: 12 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 15, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  dlc: 'spaced_out',
};

export const aluminumVolcano: Geyser = {
  id: 'aluminumVolcano',
  name: 'Aluminum Volcano',
  description: 'Outputs molten aluminum at ~2027°C.',
  output: { id: 'moltenAluminum', amount: 400 },
  outputTemp: 2026.85,
  eruptionPeriod: { min: 6, max: 12 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 15, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  dlc: 'spaced_out',
};

export const tungstenVolcano: Geyser = {
  id: 'tungstenVolcano',
  name: 'Tungsten Volcano',
  description: 'Outputs molten tungsten at ~3527°C.',
  output: { id: 'moltenTungsten', amount: 400 },
  outputTemp: 3526.85,
  eruptionPeriod: { min: 6, max: 12 },
  dormancyPeriod: { min: 60, max: 1140 },
  activeCycles: { min: 15, max: 135 },
  dormantCycles: { min: 15, max: 113 },
  dlc: 'spaced_out',
};

export const leakyOilFissure: Geyser = {
  id: 'leakyOilFissure',
  name: 'Leaky Oil Fissure',
  description: 'Outputs crude oil at 327°C.',
  output: { id: 'crudeOil', amount: 3333 },
  outputTemp: 326.85,
  eruptionPeriod: { min: 600, max: 600 },
  dormancyPeriod: { min: 0, max: 0 },
  activeCycles: { min: 50, max: 50 },
  dormantCycles: { min: 0, max: 0 },
  overpressure: 500000,
};

export const oilReservoir: Geyser = {
  id: 'oilReservoir',
  name: 'Oil Reservoir',
  description: 'Outputs crude oil when drilled with an Oil Well building.',
  output: { id: 'crudeOil', amount: 3333 },
  outputTemp: 90,
  eruptionPeriod: { min: 600, max: 600 },
  dormancyPeriod: { min: 0, max: 0 },
  activeCycles: { min: 50, max: 50 },
  dormantCycles: { min: 0, max: 0 },
  overpressure: 500000,
};

export const geysers: Geyser[] = [
  coolSteamVent,
  steamVent,
  waterGeyser,
  coolSlushGeyser,
  pollutedWaterVent,
  saltWaterGeyser,
  hotPollutedOxygenVent,
  infectiousPollutedOxygenVent,
  chlorineGasVent,
  naturalGasGeyser,
  hydrogenVent,
  minorVolcano,
  volcano,
  carbonDioxideGeyser,
  carbonDioxideVent,
  ironVolcano,
  copperVolcano,
  goldVolcano,
  cobaltVolcano,
  aluminumVolcano,
  tungstenVolcano,
  leakyOilFissure,
  oilReservoir,
];
