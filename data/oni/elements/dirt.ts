import { defineElement } from "../../../src/domain/define.js";

export const dirt = defineElement({
  slug: "dirt",
  name: "Dirt",
  description: "A foundational fertilizer used by Mealwood and other crops.",
  tags: ["solid", "farming"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/dirt", "https://oxygennotincluded.wiki.gg/wiki/Dirt"],
  state: "solid",
  category: "Cultivation",
  specificHeatCapacity: 1.48,
  thermalConductivity: 2,
  hardness: 25,
  rawDetails: {
    note: "Common early farming input.",
  },
});

export default dirt;
