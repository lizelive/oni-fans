import { resourceId } from "../../../src/core/ids.js";
import { defineBuilding, flow, labor, operation, powerProfile, thermal } from "../../../src/domain/define.js";

export const coalGenerator = defineBuilding({
  slug: "coal-generator",
  name: "Coal Generator",
  description: "Burns coal to generate electrical power while emitting heat and carbon dioxide.",
  tags: ["power", "combustion"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/coalgenerator", "https://oxygennotincluded.wiki.gg/wiki/Coal_Generator"],
  category: "Power",
  size: { width: 3, height: 3 },
  power: powerProfile({ wattsGenerated: 600 }),
  thermal: thermal(9),
  constructionMaterials: [flow(resourceId("metal-ore"), 200)],
  operations: [
    operation("coal-generator:burn-coal", {
      name: "Burn Coal",
      inputs: [flow(resourceId("coal"), 600)],
      outputs: [flow(resourceId("carbon-dioxide"), 20)],
      labor: labor(10, 0.2),
      thermal: thermal(9),
      power: powerProfile({ wattsGenerated: 600 }),
      tags: ["power", "heat-positive"],
    }),
  ],
  rawDetails: {
    note: "Often paired with Hatches for sustained power.",
  },
});

export default coalGenerator;
