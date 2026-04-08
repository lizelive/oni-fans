import { oniEntities } from "../../data/oni/index.js";
import { OniRegistry } from "./registry.js";

export function createCatalog(): OniRegistry {
  return new OniRegistry(oniEntities);
}
