import type { OperationId, ResourceId } from "../core/ids.js";
import type { OptimizationProblem } from "../domain/types.js";

export class ConstraintProblemBuilder {
  private readonly goals = new Map<ResourceId, number>();
  private readonly externalSupplies = new Map<ResourceId, number>();
  private readonly bannedOperations = new Set<OperationId>();
  private maxHeatKdtuPerCycle: number | undefined;
  private maxLaborSecondsPerCycle: number | undefined;
  private maxBuildings: number | undefined;
  private readonly preferredResources = new Set<ResourceId>();

  require(resource: ResourceId, minimumPerCycle: number): this {
    this.goals.set(resource, Math.max(minimumPerCycle, this.goals.get(resource) ?? 0));
    return this;
  }

  supply(resource: ResourceId, amountPerCycle: number): this {
    this.externalSupplies.set(resource, (this.externalSupplies.get(resource) ?? 0) + amountPerCycle);
    return this;
  }

  capHeat(maxHeatKdtuPerCycle: number): this {
    this.maxHeatKdtuPerCycle = maxHeatKdtuPerCycle;
    return this;
  }

  capLabor(maxLaborSecondsPerCycle: number): this {
    this.maxLaborSecondsPerCycle = maxLaborSecondsPerCycle;
    return this;
  }

  capBuildings(maxBuildings: number): this {
    this.maxBuildings = maxBuildings;
    return this;
  }

  preferResource(resource: ResourceId): this {
    this.preferredResources.add(resource);
    return this;
  }

  banOperation(operation: OperationId): this {
    this.bannedOperations.add(operation);
    return this;
  }

  build(): OptimizationProblem {
    return {
      goals: [...this.goals.entries()].map(([resource, minimumPerCycle]) => ({ resource, minimumPerCycle })),
      ...(this.externalSupplies.size > 0
        ? {
            externalSupplies: [...this.externalSupplies.entries()].map(([resource, amountPerCycle]) => ({
              resource,
              amountPerCycle,
            })),
          }
        : {}),
      ...(this.maxHeatKdtuPerCycle !== undefined ? { maxHeatKdtuPerCycle: this.maxHeatKdtuPerCycle } : {}),
      ...(this.maxLaborSecondsPerCycle !== undefined
        ? { maxLaborSecondsPerCycle: this.maxLaborSecondsPerCycle }
        : {}),
      ...(this.maxBuildings !== undefined ? { maxBuildings: this.maxBuildings } : {}),
      ...(this.preferredResources.size > 0 ? { preferredResources: [...this.preferredResources.values()] } : {}),
      ...(this.bannedOperations.size > 0 ? { bannedOperations: [...this.bannedOperations.values()] } : {}),
    };
  }
}
