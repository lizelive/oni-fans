import { Data } from '../src/data.mjs';

console.log('Sample generated recipe keys:');
const keys = Object.keys(Data.recipe || {}).filter(k => k.startsWith('gather_'));
console.log(keys.slice(0, 30));

// show a crop recipe example
const cropKey = keys.find(k => k.includes('wheat'));
if (cropKey) console.log('\nExample recipe for', cropKey, JSON.stringify(Data.recipe[cropKey], null, 2));
else console.log('\nNo wheat recipe generated');
