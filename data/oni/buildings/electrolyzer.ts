import { resourceId } from "../../../src/core/ids.js";
import { defineBuilding, flow, labor, operation, powerProfile, thermal } from "../../../src/domain/define.js";

export const electrolyzer = defineBuilding({
  slug: "electrolyzer",
  name: "Electrolyzer",
  description: "Splits water into oxygen and hydrogen with steady heat and power draw.",
  tags: ["oxygen", "refinement", "gas"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/electrolyzer", "https://oxygennotincluded.wiki.gg/wiki/Electrolyzer"],
  category: "Oxygen",
  size: { width: 2, height: 2 },
  power: powerProfile({ wattsConsumed: 120 }),
  thermal: thermal(1.25, { overheatTemperatureC: 75 }),
  constructionMaterials: [flow(resourceId("copper-ore"), 200)],
  operations: [
    operation("electrolyzer:split-water", {
      name: "Split Water",
      inputs: [flow(resourceId("water"), 600)],
      outputs: [flow(resourceId("oxygen"), 532.8), flow(resourceId("hydrogen"), 67.2)],
      labor: labor(3),
      thermal: thermal(1.25, { outputTemperatureC: 70, overheatTemperatureC: 75 }),
      power: powerProfile({ wattsConsumed: 120 }),
      tags: ["oxygen-production", "continuous"],
    }),
  ],
  rawDetails: {
    byproducts: ["Hydrogen"],
  },
});

export default electrolyzer;
