import type { Resource } from './types.js';
import { ResourceMap } from './helpers.js';

export interface SpeedrunGoal {
  milestones: string[];
  requirements: Record<string, Resource[]>;
}

export interface SpeedrunStep {
  action: string;
  duration: number; // seconds
  resourcesUsed: Resource[];
  resourcesGained: Resource[];
  duplicantsAssigned: number;
}

export interface SpeedrunRoute {
  steps: SpeedrunStep[];
  totalTime: number;
  totalResources: ResourceMap;
}

export async function solveSpeedrun(
  goal: SpeedrunGoal,
  available: Resource[]
): Promise<SpeedrunRoute> {
  const steps: SpeedrunStep[] = [];
  let totalTime = 0;
  const totalResources = new ResourceMap();

  // Initialize available resources
  for (const r of available) {
    totalResources.add(r.id, r.amount);
  }

  // Simple greedy approach: process milestones in order
  for (const milestone of goal.milestones) {
    const requirements = goal.requirements[milestone] ?? [];

    // Check what we need to gather
    const needed: Resource[] = [];
    for (const req of requirements) {
      const have = totalResources.get(req.id);
      if (have < req.amount) {
        needed.push({ id: req.id, amount: req.amount - have });
      }
    }

    if (needed.length > 0) {
      const gatherStep: SpeedrunStep = {
        action: `Gather resources for ${milestone}`,
        duration: needed.length * 30, // 30 seconds per resource type
        resourcesUsed: [],
        resourcesGained: needed,
        duplicantsAssigned: Math.min(needed.length, 3),
      };
      steps.push(gatherStep);
      totalTime += gatherStep.duration;

      for (const r of needed) {
        totalResources.add(r.id, r.amount);
      }
    }

    // Build/unlock step
    const buildStep: SpeedrunStep = {
      action: `Unlock ${milestone}`,
      duration: 60, // 60 seconds to build/unlock
      resourcesUsed: requirements,
      resourcesGained: [],
      duplicantsAssigned: 1,
    };
    steps.push(buildStep);
    totalTime += buildStep.duration;

    for (const req of requirements) {
      totalResources.subtract(req.id, req.amount);
    }
  }

  return { steps, totalTime, totalResources };
}
