import { defineElement } from "../../../src/domain/define.js";

export const algae = defineElement({
  slug: "algae",
  name: "Algae",
  description: "Early-game organic solid consumed by oxygen production buildings.",
  tags: ["solid", "organic", "oxygen-production"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/algae", "https://oxygennotincluded.wiki.gg/wiki/Algae"],
  state: "solid",
  category: "Organic",
  specificHeatCapacity: 0.2,
  thermalConductivity: 0.17,
  hardness: 10,
  rawDetails: {
    note: "Often treated as an early scarce oxygen source.",
  },
});

export default algae;
