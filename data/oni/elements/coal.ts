import { defineElement } from "../../../src/domain/define.js";

export const coal = defineElement({
  slug: "coal",
  name: "Coal",
  description: "Burnable solid fuel commonly sourced from Hatches.",
  tags: ["solid", "fuel", "power"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/carbon", "https://oxygennotincluded.wiki.gg/wiki/Coal"],
  state: "solid",
  category: "Fuel",
  specificHeatCapacity: 0.71,
  thermalConductivity: 1,
  hardness: 20,
  rawDetails: {
    note: "Useful mid-game power source.",
  },
});

export default coal;
