import type { EntityId, OniEntityKind, OperationId, ResourceId } from "../core/ids.js";
import type {
  OniEntity,
  OperationalEntity,
  OperationBinding,
  SimulationAssignment,
} from "./types.js";

export class OniRegistry {
  private readonly entitiesById = new Map<EntityId, OniEntity>();
  private readonly entitiesByKind = new Map<OniEntityKind, OniEntity[]>();
  private readonly operationsById = new Map<OperationId, OperationBinding>();

  constructor(entities: Iterable<OniEntity> = []) {
    for (const entity of entities) {
      this.add(entity);
    }
  }

  add(entity: OniEntity): void {
    if (this.entitiesById.has(entity.id)) {
      throw new Error(`Duplicate entity id: ${entity.id}`);
    }

    this.entitiesById.set(entity.id, entity);

    const current = this.entitiesByKind.get(entity.kind) ?? [];
    current.push(entity);
    this.entitiesByKind.set(entity.kind, current);

    if ("operations" in entity) {
      for (const operation of entity.operations) {
        if (this.operationsById.has(operation.id)) {
          throw new Error(`Duplicate operation id: ${operation.id}`);
        }
        this.operationsById.set(operation.id, {
          entity: entity as OperationalEntity,
          operation,
        });
      }
    }
  }

  get<T extends OniEntity = OniEntity>(id: EntityId): T | undefined {
    return this.entitiesById.get(id) as T | undefined;
  }

  getByKind<K extends OniEntityKind>(kind: K): Extract<OniEntity, { kind: K }>[] {
    return (this.entitiesByKind.get(kind) ?? []) as Extract<OniEntity, { kind: K }>[];
  }

  list(): OniEntity[] {
    return [...this.entitiesById.values()];
  }

  listOperations(): OperationBinding[] {
    return [...this.operationsById.values()];
  }

  getOperation(id: OperationId): OperationBinding | undefined {
    return this.operationsById.get(id);
  }

  getOperationNetResourceSet(id: OperationId): Set<ResourceId> {
    const binding = this.operationsById.get(id);
    if (!binding) {
      throw new Error(`Unknown operation id: ${id}`);
    }

    return new Set([
      ...binding.operation.inputs.map((flow) => flow.resource),
      ...binding.operation.outputs.map((flow) => flow.resource),
    ]);
  }

  collectResources(): ResourceId[] {
    const resources = new Set<ResourceId>();
    for (const binding of this.operationsById.values()) {
      for (const input of binding.operation.inputs) {
        resources.add(input.resource);
      }
      for (const output of binding.operation.outputs) {
        resources.add(output.resource);
      }
    }
    for (const element of this.getByKind("element")) {
      resources.add(element.id as unknown as ResourceId);
    }
    return [...resources.values()];
  }

  summarizeAssignments(assignments: readonly SimulationAssignment[]): string[] {
    return assignments.map((assignment) => {
      const binding = this.getOperation(assignment.operationId);
      if (!binding) {
        return `${assignment.operationId}: ${assignment.count}`;
      }
      return `${binding.entity.name} / ${binding.operation.name} x${assignment.count}`;
    });
  }
}
