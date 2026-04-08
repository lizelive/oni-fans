import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { KIND_DIRECTORY } from "../core/ids.js";
import type { OniEntity } from "../domain/types.js";

function toCamelCase(value: string): string {
  return value.replace(/-([a-z])/g, (_, character: string) => character.toUpperCase());
}

function serialize(value: unknown, indent = 0): string {
  const padding = "  ".repeat(indent);
  const nextPadding = "  ".repeat(indent + 1);

  if (value === null) {
    return "null";
  }
  if (typeof value === "string") {
    return JSON.stringify(value);
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "[]";
    }
    return `[
${value.map((item) => `${nextPadding}${serialize(item, indent + 1)}`).join(",\n")}
${padding}]`;
  }

  if (typeof value !== "object") {
    return JSON.stringify(value);
  }

  const entries = Object.entries(value);
  if (entries.length === 0) {
    return "{}";
  }
  return `{
${entries
  .map(([key, entryValue]) => `${nextPadding}${/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key) ? key : JSON.stringify(key)}: ${serialize(entryValue, indent + 1)}`)
  .join(",\n")}
${padding}}`;
}

function defineFunctionForKind(kind: OniEntity["kind"]): string {
  switch (kind) {
    case "element":
      return "defineElement";
    case "building":
      return "defineBuilding";
    case "plant":
      return "definePlant";
    case "critter":
      return "defineCritter";
    case "geyser":
      return "defineGeyser";
    default:
      throw new Error(`Unsupported entity kind: ${kind}`);
  }
}

function stripId(entity: OniEntity): Record<string, unknown> {
  const { id: _ignoredId, kind: _ignoredKind, ...rest } = entity;
  return rest as unknown as Record<string, unknown>;
}

export function renderEntityModule(entity: OniEntity, defineImportPath = "../../../src/domain/define.js"): string {
  const defineFunction = defineFunctionForKind(entity.kind);
  const variableName = toCamelCase(entity.slug);
  return `import { ${defineFunction} } from "${defineImportPath}";

export const ${variableName} = ${defineFunction}(${serialize(stripId(entity))});

export default ${variableName};
`;
}

export class EntityFileEmitter {
  constructor(private readonly outputRoot: string) {}

  async emit(entity: OniEntity): Promise<string> {
    const directory = path.join(this.outputRoot, KIND_DIRECTORY[entity.kind]);
    const destinationPath = path.join(directory, `${entity.slug}.ts`);
    const defineModulePath = path.relative(path.dirname(destinationPath), path.join(process.cwd(), "src", "domain", "define.js"));
    const normalizedImportPath = defineModulePath.replace(/\\/g, "/").replace(/^(?!\.)/, "./");
    await mkdir(directory, { recursive: true });
    await writeFile(destinationPath, renderEntityModule(entity, normalizedImportPath), "utf8");
    return destinationPath;
  }
}
