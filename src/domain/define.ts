import { entityId, operationId } from "../core/ids.js";
import type {
  BuildingEntity,
  CritterEntity,
  ElementEntity,
  GeyserEntity,
  LaborProfile,
  NumericRange,
  OniEntity,
  OperationRecipe,
  PlantEntity,
  PowerProfile,
  ResourceFlow,
  ThermalProfile,
} from "./types.js";
import type { ResourceId } from "../core/ids.js";

export function range(min: number, max: number, unit: string, idealMin?: number, idealMax?: number): NumericRange {
  return {
    min,
    max,
    unit,
    ...(idealMin !== undefined ? { idealMin } : {}),
    ...(idealMax !== undefined ? { idealMax } : {}),
  };
}

export function flow(
  resource: ResourceId,
  amountPerCycle: number,
  options: { temperatureC?: number; notes?: string } = {},
): ResourceFlow {
  return {
    resource,
    amountPerCycle,
    ...(options.temperatureC !== undefined ? { temperatureC: options.temperatureC } : {}),
    ...(options.notes !== undefined ? { notes: options.notes } : {}),
  };
}

export function labor(dupeSecondsPerCycle: number, errandsPerCycle?: number): LaborProfile {
  return {
    dupeSecondsPerCycle,
    ...(errandsPerCycle !== undefined ? { errandsPerCycle } : {}),
  };
}

export function thermal(
  heatKdtuPerCycle: number,
  options: { outputTemperatureC?: number; overheatTemperatureC?: number } = {},
): ThermalProfile {
  return {
    heatKdtuPerCycle,
    ...(options.outputTemperatureC !== undefined ? { outputTemperatureC: options.outputTemperatureC } : {}),
    ...(options.overheatTemperatureC !== undefined ? { overheatTemperatureC: options.overheatTemperatureC } : {}),
  };
}

export function powerProfile(values: PowerProfile): PowerProfile {
  return values;
}

export function operation(
  slug: string,
  recipe: Omit<OperationRecipe, "id">,
): OperationRecipe {
  return {
    id: operationId(slug),
    ...recipe,
  };
}

function defineBase<T extends { slug: string }>(entity: T): T & { readonly id: ReturnType<typeof entityId> } {
  return {
    ...entity,
    id: entityId(entity.slug),
  };
}

export function defineElement(entity: Omit<ElementEntity, "kind" | "id">): ElementEntity {
  return defineBase({ kind: "element", ...entity }) as ElementEntity;
}

export function defineBuilding(entity: Omit<BuildingEntity, "kind" | "id">): BuildingEntity {
  return defineBase({ kind: "building", ...entity }) as BuildingEntity;
}

export function definePlant(entity: Omit<PlantEntity, "kind" | "id">): PlantEntity {
  return defineBase({ kind: "plant", ...entity }) as PlantEntity;
}

export function defineCritter(entity: Omit<CritterEntity, "kind" | "id">): CritterEntity {
  return defineBase({ kind: "critter", ...entity }) as CritterEntity;
}

export function defineGeyser(entity: Omit<GeyserEntity, "kind" | "id">): GeyserEntity {
  return defineBase({ kind: "geyser", ...entity }) as GeyserEntity;
}
