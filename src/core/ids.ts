export type Brand<T, Name extends string> = T & { readonly __brand: Name };

export type EntityId = Brand<string, "EntityId">;
export type ResourceId = Brand<string, "ResourceId">;
export type OperationId = Brand<string, "OperationId">;

export type OniEntityKind =
  | "element"
  | "building"
  | "plant"
  | "critter"
  | "geyser"
  | "food"
  | "resource"
  | "equipment"
  | "medicine"
  | "research"
  | "biome"
  | "other";

export const KIND_DIRECTORY: Record<OniEntityKind, string> = {
  element: "elements",
  building: "buildings",
  plant: "plants",
  critter: "critters",
  geyser: "geysers",
  food: "foods",
  resource: "resources",
  equipment: "equipment",
  medicine: "medicine",
  research: "research",
  biome: "biomes",
  other: "other",
};

export function entityId(value: string): EntityId {
  return value as EntityId;
}

export function resourceId(value: string): ResourceId {
  return value as ResourceId;
}

export function operationId(value: string): OperationId {
  return value as OperationId;
}
