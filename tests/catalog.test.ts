import path from "node:path";
import { describe, expect, it } from "vitest";
import { createCatalog } from "../src/domain/catalog.js";
import { loadCatalogFromDataDir } from "../src/domain/loaders.js";

describe("catalog", () => {
  it("loads the handcrafted sample catalog with all seeded entity kinds", () => {
    const catalog = createCatalog();

    expect(catalog.getByKind("element")).toHaveLength(7);
    expect(catalog.getByKind("building")).toHaveLength(3);
    expect(catalog.getByKind("plant")).toHaveLength(1);
    expect(catalog.getByKind("critter")).toHaveLength(1);
    expect(catalog.getByKind("geyser")).toHaveLength(1);
    expect(catalog.listOperations()).toHaveLength(6);
  });

  it("can load entities from the data directory through runtime imports", async () => {
    const catalog = await loadCatalogFromDataDir(path.resolve("data/oni"));

    expect(catalog.list().length).toBeGreaterThanOrEqual(13);
    expect(catalog.getByKind("building").map((entity) => entity.slug)).toContain("electrolyzer");
  });
});
