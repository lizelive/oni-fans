import type { EntityId, OniEntityKind, OperationId, ResourceId } from "../core/ids.js";

export type RawDetailValue =
  | string
  | number
  | boolean
  | null
  | readonly RawDetailValue[]
  | { readonly [key: string]: RawDetailValue };

export interface NumericRange {
  readonly min: number;
  readonly max: number;
  readonly unit: string;
  readonly idealMin?: number;
  readonly idealMax?: number;
}

export interface ResourceFlow {
  readonly resource: ResourceId;
  readonly amountPerCycle: number;
  readonly temperatureC?: number;
  readonly notes?: string;
}

export interface LaborProfile {
  readonly dupeSecondsPerCycle: number;
  readonly errandsPerCycle?: number;
}

export interface ThermalProfile {
  readonly heatKdtuPerCycle: number;
  readonly outputTemperatureC?: number;
  readonly overheatTemperatureC?: number;
}

export interface PowerProfile {
  readonly wattsConsumed?: number;
  readonly wattsGenerated?: number;
  readonly batteryCapacityJoules?: number;
}

export interface OperationRecipe {
  readonly id: OperationId;
  readonly name: string;
  readonly inputs: readonly ResourceFlow[];
  readonly outputs: readonly ResourceFlow[];
  readonly labor: LaborProfile;
  readonly thermal: ThermalProfile;
  readonly power?: PowerProfile;
  readonly tags?: readonly string[];
  readonly notes?: string;
}

export interface ImageAsset {
  readonly sourceUrl: string;
  readonly localPath: string;
  readonly title?: string;
}

export interface EntityBase {
  readonly kind: OniEntityKind;
  readonly id: EntityId;
  readonly slug: string;
  readonly name: string;
  readonly description?: string;
  readonly tags: readonly string[];
  readonly dlc: readonly string[];
  readonly sources: readonly string[];
  readonly image?: ImageAsset;
  readonly rawDetails?: RawDetailValue;
}

export interface ElementEntity extends EntityBase {
  readonly kind: "element";
  readonly state: "solid" | "liquid" | "gas" | "special";
  readonly category?: string;
  readonly specificHeatCapacity?: number;
  readonly thermalConductivity?: number;
  readonly hardness?: number;
  readonly molarMass?: number;
  readonly lowTempTransitionC?: number;
  readonly highTempTransitionC?: number;
}

export interface BuildingEntity extends EntityBase {
  readonly kind: "building";
  readonly category?: string;
  readonly size?: {
    readonly width: number;
    readonly height: number;
  };
  readonly constructionMaterials?: readonly ResourceFlow[];
  readonly operations: readonly OperationRecipe[];
  readonly power?: PowerProfile;
  readonly thermal?: ThermalProfile;
  readonly decor?: number;
}

export interface PlantEntity extends EntityBase {
  readonly kind: "plant";
  readonly growthCycles?: number;
  readonly environment?: {
    readonly temperatureC?: NumericRange;
    readonly pressureG?: NumericRange;
    readonly atmosphereTags?: readonly string[];
    readonly irrigation?: readonly ResourceFlow[];
    readonly fertilization?: readonly ResourceFlow[];
  };
  readonly operations: readonly OperationRecipe[];
}

export interface CritterEntity extends EntityBase {
  readonly kind: "critter";
  readonly lifecycleCycles?: number;
  readonly stableSpaceRequired?: number;
  readonly diet?: readonly ResourceFlow[];
  readonly operations: readonly OperationRecipe[];
}

export interface GeyserEntity extends EntityBase {
  readonly kind: "geyser";
  readonly temperatureC?: number;
  readonly activeCycles?: number;
  readonly dormantCycles?: number;
  readonly operations: readonly OperationRecipe[];
}

export type OperationalEntity = BuildingEntity | PlantEntity | CritterEntity | GeyserEntity;

export type OniEntity =
  | ElementEntity
  | BuildingEntity
  | PlantEntity
  | CritterEntity
  | GeyserEntity;

export interface OperationBinding {
  readonly entity: OperationalEntity;
  readonly operation: OperationRecipe;
}

export interface ResourceGoal {
  readonly resource: ResourceId;
  readonly minimumPerCycle: number;
}

export interface ResourceSupply {
  readonly resource: ResourceId;
  readonly amountPerCycle: number;
}

export interface OptimizationProblem {
  readonly goals: readonly ResourceGoal[];
  readonly externalSupplies?: readonly ResourceSupply[];
  readonly maxHeatKdtuPerCycle?: number;
  readonly maxLaborSecondsPerCycle?: number;
  readonly maxBuildings?: number;
  readonly preferredResources?: readonly ResourceId[];
  readonly bannedOperations?: readonly OperationId[];
}

export interface SolvedOperationCount {
  readonly operationId: OperationId;
  readonly entityId: EntityId;
  readonly count: number;
}

export interface RouteStep {
  readonly phase: number;
  readonly operationId: OperationId;
  readonly entityName: string;
  readonly count: number;
  readonly rationale: string;
}

export interface OptimizationResult {
  readonly operations: readonly SolvedOperationCount[];
  readonly route: readonly RouteStep[];
  readonly netResources: ReadonlyMap<ResourceId, number>;
  readonly totalHeatKdtuPerCycle: number;
  readonly totalLaborSecondsPerCycle: number;
}

export interface SimulationAssignment {
  readonly operationId: OperationId;
  readonly count: number;
}

export interface SimulationResult {
  readonly netResources: ReadonlyMap<ResourceId, number>;
  readonly grossInputs: ReadonlyMap<ResourceId, number>;
  readonly grossOutputs: ReadonlyMap<ResourceId, number>;
  readonly totalHeatKdtuPerCycle: number;
  readonly totalLaborSecondsPerCycle: number;
}
