import {Data} from "./src/data.mjs"


// get all the item names, and check for duplicates that are almost the same

/**
 * get all item names
 * @param {Data} data 
 * @returns {Set<string>}
 */
function getAllNames(data) {
    const names = new Set();
    const products = new Set();
    for (const recipe in data.recipe) {
        for (const item in data.recipe[recipe].reagents) {
            names.add(item);
        }
        for (const item in data.recipe[recipe].products) {
            names.add(item);
            products.add(item);
        }
        if (data.recipe[recipe].catalysts) {
            for (const item in data.recipe[recipe].catalysts) {
                names.add(item);
            }
        }
    }
    const uncraftable = names.difference(products); 
    console.log( uncraftable);
    return names;
}

getAllNames(Data);

let numGraves = 10;
let want = {
    "Lye injection": 10,
    "Glue injection": 10,
    "Silver injection": 10,
    "Gold injection": 10,
    
    "Marble sculpture II": 10,
    "Marble grave fence II" : 10,
}