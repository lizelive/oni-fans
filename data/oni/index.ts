import algae from "./elements/algae.js";
import carbonDioxide from "./elements/carbon-dioxide.js";
import coal from "./elements/coal.js";
import dirt from "./elements/dirt.js";
import oxygen from "./elements/oxygen.js";
import steam from "./elements/steam.js";
import water from "./elements/water.js";
import algaeTerrarium from "./buildings/algae-terrarium.js";
import coalGenerator from "./buildings/coal-generator.js";
import electrolyzer from "./buildings/electrolyzer.js";
import hatch from "./critters/hatch.js";
import coolSteamVent from "./geysers/cool-steam-vent.js";
import mealwood from "./plants/mealwood.js";

export const oniEntities = [
  oxygen,
  water,
  algae,
  dirt,
  coal,
  carbonDioxide,
  steam,
  electrolyzer,
  algaeTerrarium,
  coalGenerator,
  mealwood,
  hatch,
  coolSteamVent,
] as const;
