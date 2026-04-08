import type { Food } from '../../../src/oni/types.js';

export const mealLice: Food = {
  id: 'mealLice',
  name: 'Meal Lice',
  description: 'Raw Mealwood harvest. Unappetizing but edible.',
  quality: -1,
  calories: 600,
  spoilTime: 4,
};

export const pickledMeal: Food = {
  id: 'pickledMeal',
  name: 'Pickled Meal',
  description: 'Meal Lice preserved with table salt.',
  quality: 0,
  calories: 600,
  spoilTime: 32,
  ingredients: [{ id: 'mealLice', amount: 600 }, { id: 'tableSalt', amount: 5 }],
  cookingStation: 'electricGrill',
};

export const mushBar: Food = {
  id: 'mushBar',
  name: 'Mush Bar',
  description: 'An edible bar made from dirt and water.',
  quality: -1,
  calories: 800,
  spoilTime: 4,
  ingredients: [{ id: 'dirt', amount: 75000 }, { id: 'water', amount: 75000 }],
  cookingStation: 'microbeMusher',
};

export const liceloaf: Food = {
  id: 'liceloaf',
  name: 'Liceloaf',
  description: 'A hearty loaf made from Meal Lice and water.',
  quality: 0,
  calories: 1700,
  spoilTime: 4,
  ingredients: [{ id: 'mealLice', amount: 2400 }, { id: 'water', amount: 50000 }],
  cookingStation: 'microbeMusher',
};

export const mushroom: Food = {
  id: 'mushroom',
  name: 'Mushroom',
  description: 'Raw Dusk Cap harvest.',
  quality: 0,
  calories: 2400,
  spoilTime: 4,
};

export const friedMushroom: Food = {
  id: 'friedMushroom',
  name: 'Fried Mushroom',
  description: 'A cooked mushroom with improved taste.',
  quality: 1,
  calories: 2800,
  spoilTime: 4,
  ingredients: [{ id: 'mushroom', amount: 4000 }],
  cookingStation: 'electricGrill',
};

export const bristleBerry: Food = {
  id: 'bristleBerry',
  name: 'Bristle Berry',
  description: 'Raw Bristle Blossom harvest. Pleasant to eat.',
  quality: 2,
  calories: 1600,
  spoilTime: 4,
};

export const gristleBerry: Food = {
  id: 'gristleBerry',
  name: 'Gristle Berry',
  description: 'A grilled Bristle Berry.',
  quality: 3,
  calories: 2000,
  spoilTime: 4,
  ingredients: [{ id: 'bristleBerry', amount: 1600 }],
  cookingStation: 'electricGrill',
};

export const stuffedBerry: Food = {
  id: 'stuffedBerry',
  name: 'Stuffed Berry',
  description: 'A Gristle Berry stuffed with Pincha Peppernut.',
  quality: 4,
  calories: 3200,
  spoilTime: 4,
  ingredients: [{ id: 'gristleBerry', amount: 2000 }, { id: 'pinchaPeppernut', amount: 4000 }],
  cookingStation: 'gasRange',
};

export const noshBean: Food = {
  id: 'noshBean',
  name: 'Nosh Bean',
  description: 'Raw Nosh Sprout harvest.',
  quality: 2,
  calories: 2400,
  spoilTime: 4,
};

export const tofu: Food = {
  id: 'tofu',
  name: 'Tofu',
  description: 'Pressed Nosh Beans blended with water.',
  quality: 3,
  calories: 3600,
  spoilTime: 4,
  ingredients: [{ id: 'noshBean', amount: 6000 }, { id: 'water', amount: 50000 }],
  cookingStation: 'microbeMusher',
};

export const spicyTofu: Food = {
  id: 'spicyTofu',
  name: 'Spicy Tofu',
  description: 'Tofu seasoned with Pincha Peppernut.',
  quality: 4,
  calories: 4000,
  spoilTime: 4,
  ingredients: [{ id: 'tofu', amount: 3600 }, { id: 'pinchaPeppernut', amount: 4000 }],
  cookingStation: 'gasRange',
};

export const sleetWheatGrain: Food = {
  id: 'sleetWheatGrain',
  name: 'Sleet Wheat Grain',
  description: 'Raw Sleet Wheat harvest.',
  quality: 0,
  calories: 600,
  spoilTime: 4,
};

export const frostBun: Food = {
  id: 'frostBun',
  name: 'Frost Bun',
  description: 'A baked bun made from Sleet Wheat Grain.',
  quality: 2,
  calories: 1200,
  spoilTime: 4,
  ingredients: [{ id: 'sleetWheatGrain', amount: 18000 }],
  cookingStation: 'electricGrill',
};

export const frostBurger: Food = {
  id: 'frostBurger',
  name: 'Frost Burger',
  description: 'A gourmet burger with Frost Bun, Lettuce, and BBQ.',
  quality: 5,
  calories: 6000,
  spoilTime: 4,
  ingredients: [{ id: 'frostBun', amount: 1200 }, { id: 'lettuce', amount: 400 }, { id: 'bbq', amount: 1600 }],
  cookingStation: 'gasRange',
};

export const lettuce: Food = {
  id: 'lettuce',
  name: 'Lettuce',
  description: 'Crisp, fresh Waterweed harvest.',
  quality: 2,
  calories: 400,
  spoilTime: 4,
};

export const pinchaPeppernut: Food = {
  id: 'pinchaPeppernut',
  name: 'Pincha Peppernut',
  description: 'A spicy nut used as a cooking ingredient.',
  quality: 0,
  calories: 0,
  spoilTime: 32,
};

export const bbq: Food = {
  id: 'bbq',
  name: 'BBQ',
  description: 'Cooked meat from critters.',
  quality: 3,
  calories: 1600,
  spoilTime: 4,
  ingredients: [{ id: 'meat', amount: 1600 }],
  cookingStation: 'electricGrill',
};

export const meat: Food = {
  id: 'meat',
  name: 'Meat',
  description: 'Raw meat from critters.',
  quality: 0,
  calories: 1600,
  spoilTime: 4,
};

export const cookedFish: Food = {
  id: 'cookedFish',
  name: 'Cooked Fish',
  description: 'A grilled Pacu fillet.',
  quality: 3,
  calories: 1600,
  spoilTime: 4,
  ingredients: [{ id: 'pacuFillet', amount: 1000 }],
  cookingStation: 'electricGrill',
};

export const surfNTurf: Food = {
  id: 'surfNTurf',
  name: "Surf 'n' Turf",
  description: 'A gourmet dish combining Cooked Fish and BBQ.',
  quality: 5,
  calories: 6000,
  spoilTime: 4,
  ingredients: [{ id: 'cookedFish', amount: 1600 }, { id: 'bbq', amount: 1600 }],
  cookingStation: 'gasRange',
};

export const pepperBread: Food = {
  id: 'pepperBread',
  name: 'Pepper Bread',
  description: 'Sleet Wheat bread spiced with Pincha Peppernut.',
  quality: 5,
  calories: 4000,
  spoilTime: 4,
  ingredients: [{ id: 'sleetWheatGrain', amount: 18000 }, { id: 'pinchaPeppernut', amount: 4000 }],
  cookingStation: 'gasRange',
};

export const berrySludge: Food = {
  id: 'berrySludge',
  name: 'Berry Sludge',
  description: 'A blended mixture of Bristle Berry and Meal Lice.',
  quality: 1,
  calories: 1840,
  spoilTime: 4,
  ingredients: [{ id: 'bristleBerry', amount: 1600 }, { id: 'mealLice', amount: 600 }],
  cookingStation: 'microbeMusher',
};

export const mushFry: Food = {
  id: 'mushFry',
  name: 'Mush Fry',
  description: 'A fried Mush Bar.',
  quality: 0,
  calories: 1050,
  spoilTime: 4,
  ingredients: [{ id: 'mushBar', amount: 800 }],
  cookingStation: 'electricGrill',
};

export const omelette: Food = {
  id: 'omelette',
  name: 'Omelette',
  description: 'A cooked egg dish.',
  quality: 2,
  calories: 2800,
  spoilTime: 4,
  ingredients: [{ id: 'rawEgg', amount: 1600 }],
  cookingStation: 'electricGrill',
};

export const grubfruit: Food = {
  id: 'grubfruit',
  name: 'Grubfruit',
  description: 'A Spaced Out fruit grown by Grubfruit Plants.',
  quality: 1,
  calories: 2000,
  spoilTime: 4,
  dlc: 'spaced_out',
};

export const bogJelly: Food = {
  id: 'bogJelly',
  name: 'Bog Jelly',
  description: 'A Spaced Out jelly harvested from Bog Buckets.',
  quality: 2,
  calories: 1840,
  spoilTime: 4,
  dlc: 'spaced_out',
};

export const burger: Food = {
  id: 'burger',
  name: 'Burger',
  description: 'A gourmet Spaced Out burger.',
  quality: 5,
  calories: 6000,
  spoilTime: 4,
  cookingStation: 'gasRange',
  dlc: 'spaced_out',
};

export const rawEgg: Food = {
  id: 'rawEgg',
  name: 'Raw Egg',
  description: 'An uncooked critter egg.',
  quality: -1,
  calories: 1600,
  spoilTime: 4,
};

export const pacuFillet: Food = {
  id: 'pacuFillet',
  name: 'Pacu Fillet',
  description: 'Raw fish meat from Pacu.',
  quality: 0,
  calories: 1000,
  spoilTime: 4,
};

export const foodItems: Food[] = [
  mealLice,
  pickledMeal,
  mushBar,
  liceloaf,
  mushroom,
  friedMushroom,
  bristleBerry,
  gristleBerry,
  stuffedBerry,
  noshBean,
  tofu,
  spicyTofu,
  sleetWheatGrain,
  frostBun,
  frostBurger,
  lettuce,
  pinchaPeppernut,
  bbq,
  meat,
  cookedFish,
  surfNTurf,
  pepperBread,
  berrySludge,
  mushFry,
  omelette,
  grubfruit,
  bogJelly,
  burger,
  rawEgg,
  pacuFillet,
];
