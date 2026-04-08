import type { ElementId, Resource, ProductionNode, DuplicantLabor } from './types.js';

export const CYCLE_TIME_SECONDS = 600;
export const DUPLICANT_LABOR_PER_CYCLE_SECONDS = 300;

export function resource(id: ElementId, amount: number, temperature?: number): Resource {
  return temperature !== undefined ? { id, amount, temperature } : { id, amount };
}

export function kg(amount: number): number {
  return amount * 1000;
}

export function g(amount: number): number {
  return amount;
}

export class ResourceMap {
  private map: Map<ElementId, number> = new Map();

  add(id: ElementId, amount: number): void {
    this.map.set(id, (this.map.get(id) ?? 0) + amount);
  }

  subtract(id: ElementId, amount: number): void {
    this.map.set(id, (this.map.get(id) ?? 0) - amount);
  }

  get(id: ElementId): number {
    return this.map.get(id) ?? 0;
  }

  toArray(): Array<{ id: ElementId; amount: number }> {
    return Array.from(this.map.entries()).map(([id, amount]) => ({ id, amount }));
  }

  merge(other: ResourceMap): ResourceMap {
    const result = new ResourceMap();
    for (const [id, amount] of this.map.entries()) {
      result.add(id, amount);
    }
    for (const entry of other.toArray()) {
      result.add(entry.id, entry.amount);
    }
    return result;
  }

  scale(factor: number): ResourceMap {
    const result = new ResourceMap();
    for (const [id, amount] of this.map.entries()) {
      result.add(id, amount * factor);
    }
    return result;
  }

  entries(): IterableIterator<[ElementId, number]> {
    return this.map.entries();
  }
}

export function computeNetFlow(
  inputs: Resource[],
  outputs: Resource[],
  scale: number
): { net: ResourceMap } {
  const net = new ResourceMap();
  for (const output of outputs) {
    net.add(output.id, output.amount * scale);
  }
  for (const input of inputs) {
    net.subtract(input.id, input.amount * scale);
  }
  return { net };
}

export function laborPerCycle(seconds: number): number {
  return Math.ceil(seconds / DUPLICANT_LABOR_PER_CYCLE_SECONDS);
}

export class ProductionGraph {
  nodes: ProductionNode[] = [];

  addNode(node: ProductionNode): void {
    this.nodes.push(node);
  }

  computeNetResources(): ResourceMap {
    const total = new ResourceMap();
    for (const node of this.nodes) {
      const { net } = computeNetFlow(
        node.building.inputs,
        node.building.outputs,
        node.scale
      );
      for (const [id, amount] of net.entries()) {
        total.add(id, amount);
      }
    }
    return total;
  }

  computeTotalHeat(): number {
    return this.nodes.reduce(
      (sum, node) => sum + node.building.heatGeneration * node.scale,
      0
    );
  }

  computeLaborRequirements(): DuplicantLabor {
    const totalLaborSeconds = this.nodes.reduce(
      (sum, node) => sum + node.building.laborSeconds * node.scale,
      0
    );
    return {
      totalLaborSeconds,
      duplicants: laborPerCycle(totalLaborSeconds),
      cycleTime: CYCLE_TIME_SECONDS,
    };
  }

  getSurpluses(): ResourceMap {
    const net = this.computeNetResources();
    const surpluses = new ResourceMap();
    for (const [id, amount] of net.entries()) {
      if (amount > 0) {
        surpluses.add(id, amount);
      }
    }
    return surpluses;
  }

  getDeficits(): ResourceMap {
    const net = this.computeNetResources();
    const deficits = new ResourceMap();
    for (const [id, amount] of net.entries()) {
      if (amount < 0) {
        deficits.add(id, amount);
      }
    }
    return deficits;
  }
}
