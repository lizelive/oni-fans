import alchemy_workbench_1 from "../data/alchemy_workbench_1.json" with { type: 'json' };
import alchemy_workbench_2 from "../data/alchemy_workbench_2.json" with { type: 'json' };
import church_workbench from "../data/church_workbench.json" with { type: 'json' };
import distillation_cube_2 from "../data/distillation_cube_2.json" with { type: 'json' };

import furnace from "../data/furnace.json" with { type: 'json' };
import stone_cutter from "../data/stone_cutter.json" with { type: 'json' };
import hand_mixer from "../data/hand_mixer.json" with { type: 'json' };
import alchemy_mill from "../data/alchemy_mill.json" with { type: 'json' };

import anvil_2 from "../data/anvil_2.json" with { type: 'json' };
import carpenters_workbench_2 from "../data/carpenters_workbench_2.json" with { type: 'json' };
import chopping_spot from "../data/chopping_spot.json" with { type: 'json' };
import circular_saw from "../data/circular_saw.json" with { type: 'json' };

/**
 * data
 * @type {Data}
 */
export const Data = merge(carpenters_workbench_2, chopping_spot, circular_saw, alchemy_workbench_1, alchemy_workbench_2, church_workbench, distillation_cube_2, furnace, stone_cutter, hand_mixer, alchemy_mill, anvil_2);


// extra




/**
 * merge multiple data sources
 * @param {... Data} data 
 * @returns {Data}
 */
function merge(...data) {
    return data.reduce((acc, cur) => {
        for (const key in cur) {
            if (acc[key]) {
                acc[key] = { ...acc[key], ...cur[key] };
            } else {
                acc[key] = cur[key];
            }
        }
        return acc;
    }, {});
}