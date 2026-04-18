import { GameData, Goal, Recipe, Technology, SpeedrunRoute, ProductionStep, ResearchStep } from '../models/types';

export class DependencyGraph {
  private gameData: GameData;
  private recipeGraph: Map<string, Set<string>> = new Map(); // item -> recipes that produce it
  private consumptionGraph: Map<string, Set<string>> = new Map(); // item -> recipes that consume it
  private techGraph: Map<string, Set<string>> = new Map(); // tech -> prerequisite techs

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.buildGraphs();
  }

  private buildGraphs(): void {
    // Build recipe dependency graphs
    for (const [recipeId, recipe] of Object.entries(this.gameData.recipes)) {
      // Track what items this recipe produces
      for (const outputItem of Object.keys(recipe.outputs)) {
        if (!this.recipeGraph.has(outputItem)) {
          this.recipeGraph.set(outputItem, new Set());
        }
        this.recipeGraph.get(outputItem)!.add(recipeId);
      }

      // Track what items this recipe consumes
      for (const inputItem of Object.keys(recipe.inputs)) {
        if (!this.consumptionGraph.has(inputItem)) {
          this.consumptionGraph.set(inputItem, new Set());
        }
        this.consumptionGraph.get(inputItem)!.add(recipeId);
      }
    }

    // Build tech dependency graph
    for (const [techId, tech] of Object.entries(this.gameData.techTree.technologies)) {
      this.techGraph.set(techId, new Set(tech.prerequisites));
    }
  }

  getRecipesProducing(itemId: string): Recipe[] {
    const recipeIds = this.recipeGraph.get(itemId) || new Set();
    return Array.from(recipeIds).map(id => this.gameData.recipes[id]).filter(Boolean);
  }

  getRecipesConsuming(itemId: string): Recipe[] {
    const recipeIds = this.consumptionGraph.get(itemId) || new Set();
    return Array.from(recipeIds).map(id => this.gameData.recipes[id]).filter(Boolean);
  }

  getTechPrerequisites(techId: string): Technology[] {
    const prereqIds = this.techGraph.get(techId) || new Set();
    return Array.from(prereqIds).map(id => this.gameData.techTree.technologies[id]).filter(Boolean);
  }

  // Get all technologies required to unlock a specific recipe
  getRequiredTechForRecipe(recipeId: string): string[] {
    const requiredTechs: string[] = [];
    
    for (const [techId, unlockedRecipes] of Object.entries(this.gameData.techTree.unlocks)) {
      if (unlockedRecipes.includes(recipeId)) {
        requiredTechs.push(techId);
        // Add all prerequisites recursively
        const prereqs = this.getAllPrerequisites(techId);
        requiredTechs.push(...prereqs);
      }
    }

    return [...new Set(requiredTechs)]; // Remove duplicates
  }

  private getAllPrerequisites(techId: string): string[] {
    const visited = new Set<string>();
    const prerequisites: string[] = [];

    const dfs = (currentTechId: string) => {
      if (visited.has(currentTechId)) return;
      visited.add(currentTechId);

      const tech = this.gameData.techTree.technologies[currentTechId];
      if (tech) {
        for (const prereqId of tech.prerequisites) {
          prerequisites.push(prereqId);
          dfs(prereqId);
        }
      }
    };

    dfs(techId);
    return [...new Set(prerequisites)]; // Remove duplicates
  }
}