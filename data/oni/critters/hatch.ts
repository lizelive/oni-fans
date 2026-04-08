import { resourceId } from "../../../src/core/ids.js";
import { defineCritter, flow, labor, operation, thermal } from "../../../src/domain/define.js";

export const hatch = defineCritter({
  slug: "hatch",
  name: "Hatch",
  description: "Solid-eating critter that converts minerals into coal and meat over time.",
  tags: ["ranching", "coal", "food"],
  dlc: ["base-game", "spaced-out"],
  sources: ["https://oni-db.com/details/hatch", "https://oxygennotincluded.wiki.gg/wiki/Hatch"],
  lifecycleCycles: 100,
  stableSpaceRequired: 12,
  diet: [flow(resourceId("sandstone"), 140)],
  operations: [
    operation("hatch:convert-minerals-to-coal", {
      name: "Convert Minerals to Coal",
      inputs: [flow(resourceId("sandstone"), 140)],
      outputs: [flow(resourceId("coal"), 70)],
      labor: labor(6, 0.2),
      thermal: thermal(0),
      tags: ["critter", "ranching"],
    }),
  ],
  rawDetails: {
    groomingRequired: true,
  },
});

export default hatch;
