import { describe, expect, it } from "vitest";
import { operationId, resourceId } from "../src/core/ids.js";
import { createCatalog } from "../src/domain/catalog.js";
import { AbstractSimulator, SimulationPlanBuilder } from "../src/simulate/abstractSimulator.js";

describe("AbstractSimulator", () => {
  it("aggregates resource, heat, and labor totals across multiple operations", () => {
    const simulator = new AbstractSimulator(createCatalog());
    const plan = new SimulationPlanBuilder()
      .add(operationId("electrolyzer:split-water"), 1)
      .add(operationId("hatch:convert-minerals-to-coal"), 2)
      .build();

    const result = simulator.run(plan);

    expect(result.netResources.get(resourceId("oxygen"))).toBeCloseTo(532.8);
    expect(result.netResources.get(resourceId("coal"))).toBeCloseTo(140);
    expect(result.netResources.get(resourceId("water"))).toBeCloseTo(-600);
    expect(result.totalHeatKdtuPerCycle).toBeCloseTo(1.25);
    expect(result.totalLaborSecondsPerCycle).toBeCloseTo(15);
  });

  it("coalesces repeated operation assignments through the builder", () => {
    const builder = new SimulationPlanBuilder();
    const assignments = builder
      .add(operationId("mealwood:grow-meal-lice"), 1)
      .add(operationId("mealwood:grow-meal-lice"), 2)
      .build();

    expect(assignments).toEqual([{ operationId: operationId("mealwood:grow-meal-lice"), count: 3 }]);
  });
});
