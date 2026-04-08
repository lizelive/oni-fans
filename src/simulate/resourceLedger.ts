import type { ResourceId } from "../core/ids.js";

export class ResourceLedger {
  private readonly values = new Map<ResourceId, number>();

  add(resource: ResourceId, amount: number): void {
    const next = (this.values.get(resource) ?? 0) + amount;
    if (Math.abs(next) < 1e-9) {
      this.values.delete(resource);
      return;
    }
    this.values.set(resource, next);
  }

  get(resource: ResourceId): number {
    return this.values.get(resource) ?? 0;
  }

  entries(): [ResourceId, number][] {
    return [...this.values.entries()];
  }

  asReadonlyMap(): ReadonlyMap<ResourceId, number> {
    return new Map(this.values);
  }
}
