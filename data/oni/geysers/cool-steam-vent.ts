import { resourceId } from "../../../src/core/ids.js";
import { defineGeyser, flow, labor, operation, thermal } from "../../../src/domain/define.js";

export const coolSteamVent = defineGeyser({
  slug: "cool-steam-vent",
  name: "Cool Steam Vent",
  description: "Renewable source of hot steam that can feed oxygen and water loops after cooling.",
  tags: ["renewable", "steam", "water"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/coolsteamvent", "https://oxygennotincluded.wiki.gg/wiki/Cool_Steam_Vent"],
  temperatureC: 110,
  activeCycles: 60,
  dormantCycles: 90,
  operations: [
    operation("cool-steam-vent:emit-steam", {
      name: "Emit Steam",
      inputs: [],
      outputs: [flow(resourceId("steam"), 1500, { temperatureC: 110 })],
      labor: labor(0),
      thermal: thermal(0, { outputTemperatureC: 110 }),
      tags: ["geyser", "renewable-source"],
    }),
  ],
  rawDetails: {
    eruptionNote: "Average output varies by seed.",
  },
});

export default coolSteamVent;
