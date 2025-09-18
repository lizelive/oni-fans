// Basic data structures for the speedrunning route solver

export interface Item {
  id: string;
  name: string;
  category?: string;
}

export interface Recipe {
  id: string;
  name: string;
  inputs: { [itemId: string]: number };
  outputs: { [itemId: string]: number };
  time: number; // seconds to craft
  category?: string; // crafting machine type required
}

export interface Technology {
  id: string;
  name: string;
  prerequisites: string[]; // other tech IDs
  researchTime: number; // seconds to research
  researchInputs: { [itemId: string]: number }; // science packs required
}

export interface TechTree {
  technologies: { [techId: string]: Technology };
  unlocks: { [techId: string]: string[] }; // tech ID -> recipe IDs unlocked
}

export interface GameData {
  items: { [itemId: string]: Item };
  recipes: { [recipeId: string]: Recipe };
  techTree: TechTree;
}

export interface Goal {
  items: { [itemId: string]: number }; // items required to achieve goal
  maxTime?: number; // optional time constraint
}

export interface ProductionStep {
  recipeId: string;
  quantity: number; // how many times to execute this recipe
  startTime: number; // when to start this step
  endTime: number; // when this step completes
}

export interface ResearchStep {
  techId: string;
  startTime: number;
  endTime: number;
}

export interface SpeedrunRoute {
  productionSteps: ProductionStep[];
  researchSteps: ResearchStep[];
  totalTime: number;
  itemsProduced: { [itemId: string]: number };
  itemsConsumed: { [itemId: string]: number };
}