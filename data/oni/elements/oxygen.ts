import { defineElement } from "../../../src/domain/define.js";

export const oxygen = defineElement({
  slug: "oxygen",
  name: "Oxygen",
  description: "The main breathable gas for duplicants.",
  tags: ["breathable", "gas", "life-support"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/oxygen", "https://oxygennotincluded.wiki.gg/wiki/Oxygen"],
  state: "gas",
  category: "Breathable Gas",
  specificHeatCapacity: 1.005,
  thermalConductivity: 0.024,
  molarMass: 32,
  lowTempTransitionC: -182.95,
  rawDetails: {
    wikiCategory: "Elements",
  },
});

export default oxygen;
