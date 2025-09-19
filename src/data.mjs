import alchemy_workbench_2 from "../data/alchemy_workbench_2.json" with { type: 'json' };
import church_workbench from "../data/church_workbench.json" with { type: 'json' };
import distillation_cube_2 from "../data/distillation_cube_2.json" with { type: 'json' };
/**
 * data
 * @type {Data}
 */
export const Data = merge(alchemy_workbench_2, church_workbench, distillation_cube_2);

/**
 * merge multiple data sources
 * @param {... Data} data 
 * @returns {Data}
 */
function merge(... data) {
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