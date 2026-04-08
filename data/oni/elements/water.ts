import { defineElement } from "../../../src/domain/define.js";

export const water = defineElement({
  slug: "water",
  name: "Water",
  description: "Foundational liquid resource used for oxygen, farming, and cooling.",
  tags: ["liquid", "cooling", "oxygen-production"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/water", "https://oxygennotincluded.wiki.gg/wiki/Water"],
  state: "liquid",
  category: "Liquid",
  specificHeatCapacity: 4.179,
  thermalConductivity: 0.609,
  molarMass: 18,
  lowTempTransitionC: 0,
  highTempTransitionC: 99.35,
  rawDetails: {
    wikiCategory: "Elements",
  },
});

export default water;
