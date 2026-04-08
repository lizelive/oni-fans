export type ElementId = string;

export type PhaseType = 'solid' | 'liquid' | 'gas' | 'plasma';

export type SkillLevel = 'novice' | 'skilled' | 'expert';

export interface Resource {
  id: ElementId;
  amount: number; // in grams
  temperature?: number; // in Celsius
}

export interface ResourceFlow {
  inputs: Resource[];
  outputs: Resource[];
}

export type BuildingCategory =
  | 'life_support'
  | 'power'
  | 'food'
  | 'plumbing'
  | 'ventilation'
  | 'refinement'
  | 'medicine'
  | 'furniture'
  | 'research'
  | 'base';

export interface Building {
  id: string;
  name: string;
  category: BuildingCategory;
  powerConsumption: number; // watts (negative = production)
  heatGeneration: number; // DTU/s
  laborSeconds: number; // seconds of duplicant labor per cycle
  buildCost: Resource[];
  inputs: Resource[];
  outputs: Resource[];
  cycleTime: number; // seconds per production cycle
}

export interface Plant {
  id: string;
  name: string;
  growthCycles: number; // number of cycles to mature
  harvest: Resource[];
  water: number; // grams of water per cycle
  light?: number; // lux required
  fertilizer?: Resource[];
}

export interface Critter {
  id: string;
  name: string;
  feed: Resource[];
  produce: Resource[];
  heatProduction: number; // DTU/s
}

export interface Element {
  id: ElementId;
  name: string;
  phase: PhaseType;
  specificHeatCapacity: number; // kDTU/g/°C
  thermalConductivity: number; // DTU/s/m/°C
  meltingPoint?: number; // °C
  boilingPoint?: number; // °C
  lowTempTransition?: ElementId;
  highTempTransition?: ElementId;
}

export interface ProductionNode {
  building: Building;
  scale: number; // number of buildings
}

export interface DuplicantLabor {
  totalLaborSeconds: number;
  duplicants: number;
  cycleTime: number; // 600 seconds
}

export interface HeatBalance {
  totalHeatGeneration: number; // DTU/s
  coolingCapacity: number; // DTU/s
  isBalanced: boolean;
}

export interface SimulationResult {
  resources: Map<string, number>; // net flow per cycle
  labor: DuplicantLabor;
  heat: HeatBalance;
}
