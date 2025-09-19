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
import vine_press from "../data/vine_press.json" with { type: 'json' };
import potters_wheel from "../data/potters_wheel.json" with { type: 'json' };
import cooking from "../data/cooking.json" with { type: 'json' };
import extra from "../data/extra.json" with { type: 'json' };
import jewelry_table from "../data/jewelry_table.json" with { type: 'json' };
import bee_hive from "../data/bee_hive.json" with { type: 'json' };
/**
 * data
 * @type {Data}
 */
export let Data = merge(carpenters_workbench_2, chopping_spot, circular_saw, alchemy_workbench_1, alchemy_workbench_2, church_workbench, distillation_cube_2, furnace, stone_cutter, hand_mixer, alchemy_mill, anvil_2, vine_press, potters_wheel, cooking, extra, jewelry_table, bee_hive);



let Base = [
    "River sand",
    "Log"
];

let Vegetable = [

]

let Bugs = [

]
// extra


// Heuristic categories for adding "harvest" or "catch" recipes.
// Assumptions made:
// - Fish-like items (Eel, Tilapia, Gudgeon etc.) are 'catch' and use 'fishing_spot' tag.
// - Crops (Wheat, Pumpkin, Carrot, Cabbage, Onion, Nori, Hiccup grass, Lentils) use 'field' tag and are 'harvest'.
// - Mobs/animals (Bee, Frog, Moth, Butterfly, Bat wing source items) use 'trap' or 'hunting_spot'.
// - Insect-like / pollinators (Bee, Moth, Butterfly) are caught via 'trap'.
// - Misc resources like Ore, Coal, Limestone use 'mine' tag and are 'mine' actions (treated as harvest).

const fishes = ['Eel', 'Tilapia', 'Frog', 'Gudgeon'];
const crops = ['Hemp', "Hops", 'Beet', 'Wheat', 'Pumpkin', 'Carrot', 'Cabbage', 'Onion', 'Nori', 'Lentils', 'Grapes'];
const mobs = ['Bat wing', 'Green jelly',
    'Blue jelly',
    'Black jelly',
    'Orange jelly',
    'Blue jelly',
    'Black jelly',
    'Orange jelly',

    'Spider web'
];

const forageInsects = ['Moth', 'Butterfly'];
const foragePlants = [
    'Hiccup grass', 'Red mushroom',
    'Yellow flower',
    'White flower',
    "Red flower",
    'Red apple',
    'Wooden stick',

    "Berry"
];


// Further classify forage into plants vs insects
const ores = ['Clay', 'River sand', 'Coal', 'Iron ore', 'Silver nugget', 'Gold nugget', 'Pyrite', 'A piece of marble', 'Limestone', 'Metal scrap'];




const buy = [
    "Feather",
    "Chicken egg",
    "Jug of milk"
]

// Build recipe objects for harvesting/catching
function makeGatherRecipe(item, opts = {}) {
    const id = `gather_${item.toLowerCase().replace(/[^a-z0-9]+/g, '_')}`;
    return {
        [id]: {
            workbench_tags: opts.workbench_tags || [],
            reagents: opts.reagents || {},
            products: { ...(opts.products || { [item]: opts.amount || 1 }) },
            energy_cost: opts.energy_cost || 5,
            notes: opts.notes || `Gathered from ${opts.source || 'world'}`
        }
    };
}

// Collect generated recipes
const generatedRecipes = {};

// fishes -> fishing_spot (catch)
for (const f of fishes) {
    Object.assign(generatedRecipes, makeGatherRecipe(f, { workbench_tags: ['fishing_spot'], amount: 1, energy_cost: 8, source: 'fish' }));
}

// crops -> field (harvest)
for (const c of crops) {
    // seed name heuristic: "<Crop> seed"
    const seedName = `${c} seed`;
    // crops consume 1 seed and produce the crop plus 1 seed back (seed-preserving harvest)
    const products = {
        "Crop waste": 2
    };
    products[c] = 3; // yield of crop
    products[seedName] = 4; // returned seeds
    Object.assign(
        generatedRecipes,
        makeGatherRecipe(c, {
            workbench_tags: ['field'],
            reagents: { [seedName]: 4 },
            products,
            energy_cost: 6,
            source: 'crop',
            notes: `Harvested from field using ${seedName}`
        })
    );
}

// mobs -> hunting_spot (catch)
for (const m of mobs) {
    Object.assign(generatedRecipes, makeGatherRecipe(m, { workbench_tags: ['hunting_spot'], amount: 1, energy_cost: 7, source: 'mob' }));
}

// forage -> different handling for plants vs insects
for (const f of foragePlants) {
    // plant forage just yields the item using a 'forage' spot
    Object.assign(generatedRecipes, makeGatherRecipe(f, { workbench_tags: ['forage'], amount: 2, energy_cost: 4, source: 'forage' }));
}
for (const f of forageInsects) {
    // insects caught via trap
    Object.assign(generatedRecipes, makeGatherRecipe(f, { workbench_tags: ['trap'], amount: 1, energy_cost: 5, source: 'forage' }));
}

// ores -> mine
for (const o of ores) {
    Object.assign(generatedRecipes, makeGatherRecipe(o, { workbench_tags: ['mine'], amount: 1, energy_cost: 10, source: 'ore' }));
}

// buy -> shop (buy)
for (const b of buy) {
    Object.assign(generatedRecipes, makeGatherRecipe(b, { workbench_tags: ['shop'], amount: 1, energy_cost: 5, source: 'buy' }));
}



// Merge generated recipes into `extra` (or create a wrapper) by attaching to Data after merge.
// We'll export a helper to attach recipes at runtime when Data is created below.

// Now that generatedRecipes exists, attach into Data.recipe
if (!Data.recipe) Data.recipe = {};
for (const key in generatedRecipes) {
    if (!Data.recipe[key]) Data.recipe[key] = generatedRecipes[key];
}

// delete all recyle_ recipes
for (const key in Data.recipe) {
    if (key.startsWith('recycle_')) {
        delete Data.recipe[key];
    }
}


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