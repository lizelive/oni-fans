import { defineElement } from "../../../src/domain/define.js";

export const carbonDioxide = defineElement({
  slug: "carbon-dioxide",
  name: "Carbon Dioxide",
  description: "A heavy waste gas from dupes, power, and refinement.",
  tags: ["gas", "waste"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/carbondioxide", "https://oxygennotincluded.wiki.gg/wiki/Carbon_Dioxide"],
  state: "gas",
  category: "Waste Gas",
  specificHeatCapacity: 0.846,
  thermalConductivity: 0.0146,
  molarMass: 44,
  lowTempTransitionC: -48.15,
  rawDetails: {
    note: "Byproduct for algae-based oxygen and combustion.",
  },
});

export default carbonDioxide;
