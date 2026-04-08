export type ElementId = string;

export type PhaseType = 'solid' | 'liquid' | 'gas' | 'plasma';

export type SkillLevel = 'novice' | 'skilled' | 'expert';

export type DlcType = 'base_game' | 'spaced_out' | 'frosty_planet' | 'base_game_and_dlc';

export type ElementCategory =
  | 'raw_mineral'
  | 'metal_ore'
  | 'refined_metal'
  | 'agriculture'
  | 'consumable'
  | 'industrial'
  | 'gas'
  | 'liquid'
  | 'other';

export type FoodQuality = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DiseaseType = 'germ' | 'radiation' | 'other';

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
  | 'base'
  | 'life_support'
  | 'power'
  | 'food'
  | 'plumbing'
  | 'ventilation'
  | 'refinement'
  | 'medicine'
  | 'furniture'
  | 'research'
  | 'stations'
  | 'utilities'
  | 'automation'
  | 'conveyance'
  | 'rocketry'
  | 'radiation'
  | 'equipment';

export interface BuildingMaterial {
  category: string; // e.g., 'metal_ore', 'refined_metal', 'raw_mineral', 'buildable_raw'
  amount: number; // in kg
}

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
  description?: string;
  width?: number; // tiles, default 1
  height?: number; // tiles, default 1
  requiredTech?: string; // research tech name needed to unlock
  overheatable?: boolean;
  overheatTemp?: number; // °C at which it overheats, typically 75°C
  floodable?: boolean;
  decor?: number; // decor bonus/penalty
  decorRadius?: number;
  noise?: number; // noise pollution in dB
  noiseRadius?: number;
  operatingTemp?: { min: number; max: number }; // building operating temperature range
  outputTemp?: number; // fixed output temperature if applicable
  dlc?: DlcType;
  buildingMaterial?: BuildingMaterial[];
}

export interface Plant {
  id: string;
  name: string;
  growthCycles: number; // number of cycles to mature
  harvest: Resource[];
  water: number; // grams of water per cycle
  light?: number; // lux required
  fertilizer?: Resource[];
  description?: string;
  temperature?: { min: number; max: number; ideal?: { min: number; max: number } };
  atmosphere?: string[]; // gas requirements
  pressure?: { min: number; max: number }; // atmospheric pressure range in kg
  irrigation?: Resource[]; // general irrigation inputs (can be polluted water, ethanol, etc.)
  decoration?: boolean;
  calories?: number; // kcal per harvest of the main food item
  domesticated?: boolean;
  seedId?: string;
  seedName?: string;
  dlc?: DlcType;
}

export interface CritterVariant {
  id: string;
  name: string;
  feed: Resource[];
  produce: Resource[];
  heatProduction: number;
  description?: string;
}

export interface Critter {
  id: string;
  name: string;
  feed: Resource[];
  produce: Resource[];
  heatProduction: number; // DTU/s
  description?: string;
  hp?: number;
  lifespan?: number; // cycles
  temperature?: { min: number; max: number; ideal?: { min: number; max: number } };
  caloriesNeeded?: number; // kcal per cycle
  spaceRequired?: number; // tiles per critter for overcrowding
  layEgg?: { eggId: string; eggName: string; incubationCycles: number };
  variants?: CritterVariant[];
  tame?: boolean;
  wild?: boolean;
  dlc?: DlcType;
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
  mass?: number; // kg per tile, default mass
  hardness?: number; // 0-255 for solid elements
  toxicity?: boolean;
  overheatDamage?: boolean; // can overheat buildings
  lowTempTransitionTemp?: number; // temp at which low transition happens
  highTempTransitionTemp?: number; // temp at which high transition happens
  description?: string;
  category?: ElementCategory;
  dlc?: DlcType;
}

export interface Geyser {
  id: string;
  name: string;
  description?: string;
  output: Resource; // what it emits (element + amount per second during eruption)
  outputTemp: number; // °C of output
  eruptionPeriod: { min: number; max: number }; // seconds of active eruption
  dormancyPeriod: { min: number; max: number }; // seconds of dormancy within active period
  activeCycles: { min: number; max: number }; // cycles of activity
  dormantCycles: { min: number; max: number }; // cycles of dormancy
  overpressure?: number; // kg pressure at which geyser stops emitting
  dlc?: DlcType;
}

export interface FoodEffect {
  attribute: string;
  modifier: number;
  duration: number; // cycles
}

export interface Food {
  id: string;
  name: string;
  description?: string;
  quality: FoodQuality; // -1 to 6
  calories: number; // kcal
  spoilTime: number; // cycles until spoilage (0 = doesn't spoil)
  ingredients?: Resource[];
  cookingStation?: string; // building id needed to prepare
  effects?: FoodEffect[];
  dlc?: DlcType;
}

export interface DiseaseEffect {
  attribute: string;
  modifier: number;
  duration: number; // cycles after infection
}

export interface Disease {
  id: string;
  name: string;
  description?: string;
  type: DiseaseType;
  effects: DiseaseEffect[];
  cureBuilding?: string; // building that cures it
  infectionThreshold?: number; // germ count to infect
  spreadMedia?: string[]; // element ids it spreads through
  growthElements?: Array<{ elementId: string; growthRate: number }>; // growth per cycle per element
  deathElements?: Array<{ elementId: string; deathRate: number }>; // death rate per cycle
  dlc?: DlcType;
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
