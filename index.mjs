import {Data} from "./src/data.mjs"

console.log(Data);

// get all the item names, and check for duplicates that are almost the same

/**
 * get all item names
 * @param {Data} data 
 * @returns {Set<string>}
 */
function getAllNames(data) {
    const names = new Set();
    for (const recipe in data.recipe) {
        for (const item in data.recipe[recipe].reagents) {
            names.add(item);
        }
        for (const item in data.recipe[recipe].products) {
            names.add(item);
        }
        if (data.recipe[recipe].catalysts) {
            for (const item in data.recipe[recipe].catalysts) {
                names.add(item);
            }
        }
    }
    return names;
}

console.log(getAllNames(Data));

let want = {
    "Lye injection": 1,
    "Glue injection": 1,
    "Silver injection": 1,
    "Gold injection": 1,
    
}