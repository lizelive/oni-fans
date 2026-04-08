import { readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { OniRegistry } from "./registry.js";
import type { OniEntity } from "./types.js";

function isOniEntity(value: unknown): value is OniEntity {
  return typeof value === "object" && value !== null && "kind" in value && "id" in value && "slug" in value;
}

async function collectDataFiles(rootDir: string): Promise<string[]> {
  const entries = await readdir(rootDir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectDataFiles(fullPath)));
      continue;
    }

    if (!entry.name.endsWith(".ts") && !entry.name.endsWith(".js")) {
      continue;
    }
    if (entry.name === "index.ts" || entry.name === "index.js") {
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

export async function loadCatalogFromDataDir(rootDir: string): Promise<OniRegistry> {
  const files = await collectDataFiles(rootDir);
  const entities: OniEntity[] = [];
  const seenIds = new Set<string>();

  for (const filePath of files) {
    const module = await import(pathToFileURL(filePath).href);
    const candidates = [module.default, ...Object.values(module)].filter(isOniEntity);
    for (const candidate of candidates) {
      if (seenIds.has(candidate.id)) {
        continue;
      }
      seenIds.add(candidate.id);
      entities.push(candidate);
    }
  }

  return new OniRegistry(entities);
}
