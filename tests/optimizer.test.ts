import { describe, expect, it } from "vitest";
import { operationId, resourceId } from "../src/core/ids.js";
import { createCatalog } from "../src/domain/catalog.js";
import { ConstraintProblemBuilder } from "../src/optimize/problem.js";
import { ProductionOptimizer } from "../src/optimize/solver.js";

describe("ProductionOptimizer", () => {
  it("chooses the electrolyzer when labor is tight and water is available", async () => {
    const optimizer = new ProductionOptimizer(createCatalog());
    const problem = new ConstraintProblemBuilder()
      .require(resourceId("oxygen"), 500)
      .supply(resourceId("water"), 600)
      .capHeat(5)
      .capLabor(10)
      .build();

    const result = await optimizer.solve(problem);

    expect(result).not.toBeNull();
    expect(result?.operations).toContainEqual({
      operationId: operationId("electrolyzer:split-water"),
      entityId: resourceId("electrolyzer") as never,
      count: 1,
    });
    expect(result?.operations.some((operation) => operation.operationId === operationId("algae-terrarium:scrub-carbon-and-produce-oxygen"))).toBe(false);
  });

  it("prefers the algae terrarium under a zero-heat cap when the feedstock is available", async () => {
    const optimizer = new ProductionOptimizer(createCatalog());
    const problem = new ConstraintProblemBuilder()
      .require(resourceId("oxygen"), 400)
      .supply(resourceId("water"), 300)
      .supply(resourceId("algae"), 30)
      .supply(resourceId("carbon-dioxide"), 400)
      .capHeat(0)
      .capLabor(60)
      .build();

    const result = await optimizer.solve(problem);

    expect(result).not.toBeNull();
    expect(result?.operations.some((operation) => operation.operationId === operationId("algae-terrarium:scrub-carbon-and-produce-oxygen"))).toBe(true);
    expect(result?.totalHeatKdtuPerCycle).toBeLessThanOrEqual(0);
  });

  it("returns null when goals cannot be satisfied from supplied resources", async () => {
    const optimizer = new ProductionOptimizer(createCatalog());
    const problem = new ConstraintProblemBuilder().require(resourceId("oxygen"), 500).capHeat(1).capLabor(5).build();

    const result = await optimizer.solve(problem);

    expect(result).toBeNull();
  });
});
