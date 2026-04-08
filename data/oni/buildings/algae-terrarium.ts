import { resourceId } from "../../../src/core/ids.js";
import { defineBuilding, flow, labor, operation, powerProfile, thermal } from "../../../src/domain/define.js";

export const algaeTerrarium = defineBuilding({
  slug: "algae-terrarium",
  name: "Algae Terrarium",
  description: "Low-tech oxygen source that consumes algae and water while requiring regular dupe labor.",
  tags: ["oxygen", "labor-heavy", "early-game"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/algaeterrarium", "https://oxygennotincluded.wiki.gg/wiki/Algae_Terrarium"],
  category: "Oxygen",
  size: { width: 2, height: 2 },
  power: powerProfile({ wattsConsumed: 0 }),
  thermal: thermal(-0.2),
  constructionMaterials: [flow(resourceId("copper-ore"), 30), flow(resourceId("sandstone"), 125)],
  operations: [
    operation("algae-terrarium:scrub-carbon-and-produce-oxygen", {
      name: "Scrub Carbon and Produce Oxygen",
      inputs: [flow(resourceId("algae"), 30), flow(resourceId("water"), 300), flow(resourceId("carbon-dioxide"), 333.33)],
      outputs: [flow(resourceId("oxygen"), 400), flow(resourceId("polluted-water"), 290.33)],
      labor: labor(30, 1),
      thermal: thermal(-0.2),
      power: powerProfile({ wattsConsumed: 0 }),
      tags: ["oxygen-production", "carbon-sink"],
    }),
  ],
  rawDetails: {
    note: "Labor heavy but heat light.",
  },
});

export default algaeTerrarium;
