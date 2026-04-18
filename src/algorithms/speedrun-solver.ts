import { GameData, Goal, SpeedrunRoute, ProductionStep, ResearchStep } from '../models/types';
import { DependencyGraph } from './dependency-graph';

export class SpeedrunSolver {
  private gameData: GameData;
  private dependencyGraph: DependencyGraph;

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.dependencyGraph = new DependencyGraph(gameData);
  }

  solve(goal: Goal): SpeedrunRoute {
    // Calculate required items (including intermediates)
    const requiredItems = this.calculateRequiredItems(goal.items);
    
    // Calculate required technologies
    const requiredTechs = this.calculateRequiredTechnologies(requiredItems);
    
    // Create research schedule
    const researchSteps = this.createResearchSchedule(requiredTechs);
    
    // Create production schedule
    const productionSteps = this.createProductionSchedule(requiredItems, researchSteps);
    
    // Calculate total time and resource consumption
    const totalTime = Math.max(
      ...researchSteps.map(step => step.endTime),
      ...productionSteps.map(step => step.endTime)
    );

    const itemsProduced = this.calculateItemsProduced(productionSteps);
    const itemsConsumed = this.calculateItemsConsumed(productionSteps, researchSteps);

    return {
      productionSteps,
      researchSteps,
      totalTime,
      itemsProduced,
      itemsConsumed
    };
  }

  private calculateRequiredItems(goalItems: { [itemId: string]: number }): { [itemId: string]: number } {
    const required: { [itemId: string]: number } = { ...goalItems };
    const processed = new Set<string>();

    // Use a queue to process items and their dependencies
    const queue = Object.keys(goalItems);

    while (queue.length > 0) {
      const itemId = queue.shift()!;
      if (processed.has(itemId)) continue;
      processed.add(itemId);

      const quantity = required[itemId] || 0;
      if (quantity <= 0) continue;

      // Find the best recipe to produce this item
      const recipes = this.dependencyGraph.getRecipesProducing(itemId);
      if (recipes.length === 0) continue; // Raw material or unavailable

      // For simplicity, choose the first available recipe
      // In a more sophisticated implementation, this would optimize for speed/cost
      const recipe = recipes[0];
      const outputQuantity = recipe.outputs[itemId] || 0;
      if (outputQuantity === 0) continue;

      const recipeExecutions = Math.ceil(quantity / outputQuantity);

      // Add required inputs to the queue
      for (const [inputItemId, inputQuantity] of Object.entries(recipe.inputs)) {
        const totalInputNeeded = inputQuantity * recipeExecutions;
        required[inputItemId] = (required[inputItemId] || 0) + totalInputNeeded;
        
        if (!processed.has(inputItemId)) {
          queue.push(inputItemId);
        }
      }
    }

    return required;
  }

  private calculateRequiredTechnologies(requiredItems: { [itemId: string]: number }): string[] {
    const requiredTechs = new Set<string>();

    // Find all recipes needed to produce required items
    for (const itemId of Object.keys(requiredItems)) {
      const recipes = this.dependencyGraph.getRecipesProducing(itemId);
      for (const recipe of recipes) {
        const techs = this.dependencyGraph.getRequiredTechForRecipe(recipe.id);
        techs.forEach(tech => requiredTechs.add(tech));
      }
    }

    return Array.from(requiredTechs);
  }

  private createResearchSchedule(requiredTechs: string[]): ResearchStep[] {
    const researchSteps: ResearchStep[] = [];
    const completed = new Set<string>();
    let currentTime = 0;

    // Sort technologies by dependency order
    const sortedTechs = this.topologicalSortTechs(requiredTechs);

    for (const techId of sortedTechs) {
      if (completed.has(techId)) continue;

      const tech = this.gameData.techTree.technologies[techId];
      if (!tech) continue;

      // Check if all prerequisites are completed
      const canResearch = tech.prerequisites.every(prereq => completed.has(prereq));
      if (!canResearch) continue;

      const startTime = currentTime;
      const endTime = startTime + tech.researchTime;

      researchSteps.push({
        techId,
        startTime,
        endTime
      });

      completed.add(techId);
      currentTime = endTime;
    }

    return researchSteps;
  }

  private createProductionSchedule(requiredItems: { [itemId: string]: number }, researchSteps: ResearchStep[]): ProductionStep[] {
    const productionSteps: ProductionStep[] = [];
    const availableItems: { [itemId: string]: number } = {};
    let currentTime = 0;

    // Create a timeline of when technologies become available
    const techAvailability: { [techId: string]: number } = {};
    for (const step of researchSteps) {
      techAvailability[step.techId] = step.endTime;
    }

    // Process items in dependency order (raw materials first)
    const itemDependencyOrder = this.getItemDependencyOrder(requiredItems);

    for (const itemId of itemDependencyOrder) {
      const neededQuantity = requiredItems[itemId] || 0;
      const availableQuantity = availableItems[itemId] || 0;
      
      if (neededQuantity <= availableQuantity) continue;

      const quantityToProduce = neededQuantity - availableQuantity;
      const recipes = this.dependencyGraph.getRecipesProducing(itemId);
      
      if (recipes.length === 0) {
        // This is a raw material, mark as available
        availableItems[itemId] = (availableItems[itemId] || 0) + quantityToProduce;
        continue;
      }

      // Choose the best recipe (for now, just use the first one)
      const recipe = recipes[0];
      const outputQuantity = recipe.outputs[itemId] || 0;
      const recipeExecutions = Math.ceil(quantityToProduce / outputQuantity);

      // Check when this recipe becomes available (based on tech requirements)
      const requiredTechs = this.dependencyGraph.getRequiredTechForRecipe(recipe.id);
      const availableTime = Math.max(
        currentTime,
        ...requiredTechs.map(techId => techAvailability[techId] || 0)
      );

      const startTime = availableTime;
      const endTime = startTime + (recipe.time * recipeExecutions);

      productionSteps.push({
        recipeId: recipe.id,
        quantity: recipeExecutions,
        startTime,
        endTime
      });

      // Update available items
      for (const [outputItemId, outputQty] of Object.entries(recipe.outputs)) {
        availableItems[outputItemId] = (availableItems[outputItemId] || 0) + (outputQty * recipeExecutions);
      }

      currentTime = Math.max(currentTime, endTime);
    }

    return productionSteps;
  }

  private topologicalSortTechs(techIds: string[]): string[] {
    const visited = new Set<string>();
    const result: string[] = [];

    const dfs = (techId: string) => {
      if (visited.has(techId)) return;
      visited.add(techId);

      const tech = this.gameData.techTree.technologies[techId];
      if (tech) {
        for (const prereq of tech.prerequisites) {
          if (techIds.includes(prereq)) {
            dfs(prereq);
          }
        }
      }

      result.push(techId);
    };

    for (const techId of techIds) {
      dfs(techId);
    }

    return result;
  }

  private getItemDependencyOrder(requiredItems: { [itemId: string]: number }): string[] {
    // Simple approach: raw materials first, then items that depend on them
    // This is a simplified version - a full implementation would use topological sorting
    const itemIds = Object.keys(requiredItems);
    const rawMaterials: string[] = [];
    const craftedItems: string[] = [];

    for (const itemId of itemIds) {
      const recipes = this.dependencyGraph.getRecipesProducing(itemId);
      if (recipes.length === 0) {
        rawMaterials.push(itemId);
      } else {
        craftedItems.push(itemId);
      }
    }

    return [...rawMaterials, ...craftedItems];
  }

  private calculateItemsProduced(productionSteps: ProductionStep[]): { [itemId: string]: number } {
    const produced: { [itemId: string]: number } = {};

    for (const step of productionSteps) {
      const recipe = this.gameData.recipes[step.recipeId];
      if (recipe) {
        for (const [itemId, quantity] of Object.entries(recipe.outputs)) {
          produced[itemId] = (produced[itemId] || 0) + (quantity * step.quantity);
        }
      }
    }

    return produced;
  }

  private calculateItemsConsumed(productionSteps: ProductionStep[], researchSteps: ResearchStep[]): { [itemId: string]: number } {
    const consumed: { [itemId: string]: number } = {};

    // Add consumption from production
    for (const step of productionSteps) {
      const recipe = this.gameData.recipes[step.recipeId];
      if (recipe) {
        for (const [itemId, quantity] of Object.entries(recipe.inputs)) {
          consumed[itemId] = (consumed[itemId] || 0) + (quantity * step.quantity);
        }
      }
    }

    // Add consumption from research
    for (const step of researchSteps) {
      const tech = this.gameData.techTree.technologies[step.techId];
      if (tech) {
        for (const [itemId, quantity] of Object.entries(tech.researchInputs)) {
          consumed[itemId] = (consumed[itemId] || 0) + quantity;
        }
      }
    }

    return consumed;
  }
}