import { defineElement } from "../../../src/domain/define.js";

export const steam = defineElement({
  slug: "steam",
  name: "Steam",
  description: "High-temperature gaseous water used in turbines and geysers.",
  tags: ["gas", "thermal"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/steam", "https://oxygennotincluded.wiki.gg/wiki/Steam"],
  state: "gas",
  category: "Gas",
  specificHeatCapacity: 4.179,
  thermalConductivity: 0.184,
  molarMass: 18,
  lowTempTransitionC: 99.35,
  rawDetails: {
    note: "Useful in heat-positive production chains.",
  },
});

export default steam;
