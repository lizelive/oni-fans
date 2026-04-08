import { resourceId } from "../../../src/core/ids.js";
import { definePlant, flow, labor, operation, range, thermal } from "../../../src/domain/define.js";

export const mealwood = definePlant({
  slug: "mealwood",
  name: "Mealwood",
  description: "Early-game crop that converts dirt into Meal Lice without irrigation.",
  tags: ["food", "farming", "early-game"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/mealwood", "https://oxygennotincluded.wiki.gg/wiki/Mealwood"],
  growthCycles: 3,
  environment: {
    temperatureC: range(10, 30, "C", 15, 25),
    pressureG: range(0, 10000, "g"),
    irrigation: [],
    fertilization: [flow(resourceId("dirt"), 10)],
  },
  operations: [
    operation("mealwood:grow-meal-lice", {
      name: "Grow Meal Lice",
      inputs: [flow(resourceId("dirt"), 10)],
      outputs: [flow(resourceId("meal-lice"), 200)],
      labor: labor(12, 1),
      thermal: thermal(0),
      tags: ["food", "plant"],
    }),
  ],
  rawDetails: {
    planter: "Farm Tile / Hydroponic Farm",
  },
});

export default mealwood;
