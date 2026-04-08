import { mkdtemp, readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import mealwood from "../data/oni/plants/mealwood.js";
import { EntityFileEmitter, renderEntityModule } from "../src/ingest/entity-file-emitter.js";

describe("entity file emitter", () => {
  it("renders a TypeScript module that preserves the ONI folder convention", () => {
    const source = renderEntityModule(mealwood);

    expect(source).toContain('import { definePlant } from "../../../src/domain/define.js";');
    expect(source).toContain("export const mealwood = definePlant(");
  });

  it("writes the module into the expected data subdirectory", async () => {
    const tempRoot = await mkdtemp(path.join(os.tmpdir(), "oni-fans-"));
    const emitter = new EntityFileEmitter(path.join(tempRoot, "data", "oni"));
    const filePath = await emitter.emit(mealwood);
    const fileContents = await readFile(filePath, "utf8");

    expect(filePath.replace(/\\/g, "/")).toContain("/plants/mealwood.ts");
    expect(fileContents).toContain("Mealwood");
  });
});
