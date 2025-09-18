#!/usr/bin/env node

import { SpeedrunSolver } from '../algorithms/speedrun-solver';
import { exampleGameData } from '../examples/game-data';
import { Goal } from '../models/types';

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds.toFixed(1)}s`;
}

function printRoute(solver: SpeedrunSolver, goal: Goal): void {
  console.log('🎯 Speedrun Goal:');
  for (const [itemId, quantity] of Object.entries(goal.items)) {
    console.log(`  - ${quantity}x ${exampleGameData.items[itemId]?.name || itemId}`);
  }
  console.log();

  console.log('🧮 Calculating optimal speedrun route...\n');

  const route = solver.solve(goal);

  console.log('📋 Research Schedule:');
  if (route.researchSteps.length === 0) {
    console.log('  No research required!');
  } else {
    route.researchSteps
      .sort((a, b) => a.startTime - b.startTime)
      .forEach(step => {
        const tech = exampleGameData.techTree.technologies[step.techId];
        console.log(`  ${formatTime(step.startTime)} - ${formatTime(step.endTime)}: ${tech?.name || step.techId}`);
      });
  }
  console.log();

  console.log('🏭 Production Schedule:');
  if (route.productionSteps.length === 0) {
    console.log('  No production required!');
  } else {
    route.productionSteps
      .sort((a, b) => a.startTime - b.startTime)
      .forEach(step => {
        const recipe = exampleGameData.recipes[step.recipeId];
        console.log(`  ${formatTime(step.startTime)} - ${formatTime(step.endTime)}: ${step.quantity}x ${recipe?.name || step.recipeId}`);
      });
  }
  console.log();

  console.log('📊 Summary:');
  console.log(`  ⏱️  Total time: ${formatTime(route.totalTime)}`);
  console.log(`  📦 Items produced: ${Object.keys(route.itemsProduced).length} types`);
  console.log(`  🔧 Items consumed: ${Object.keys(route.itemsConsumed).length} types`);
  console.log();

  console.log('📦 Items Produced:');
  for (const [itemId, quantity] of Object.entries(route.itemsProduced)) {
    const item = exampleGameData.items[itemId];
    console.log(`  - ${quantity}x ${item?.name || itemId}`);
  }
  console.log();

  console.log('🔧 Items Consumed:');
  for (const [itemId, quantity] of Object.entries(route.itemsConsumed)) {
    const item = exampleGameData.items[itemId];
    console.log(`  - ${quantity}x ${item?.name || itemId}`);
  }
}

function main(): void {
  console.log('🚀 Oni Fans Speedrun Route Solver\n');

  const solver = new SpeedrunSolver(exampleGameData);

  // Example goals
  const goals: Array<{ name: string; goal: Goal }> = [
    {
      name: 'Basic Automation',
      goal: { items: { 'assembling-machine-1': 1 } }
    },
    {
      name: 'Advanced Automation',
      goal: { items: { 'assembling-machine-2': 1 } }
    },
    {
      name: 'Science Production',
      goal: { items: { 'science-pack-1': 10, 'science-pack-2': 10 } }
    }
  ];

  // Parse command line arguments
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Available example goals:');
    goals.forEach((g, i) => {
      console.log(`  ${i + 1}. ${g.name}`);
    });
    console.log('\nUsage: npm start [goal_number]');
    console.log('Example: npm start 1');
    return;
  }

  const goalNumber = parseInt(args[0]);
  if (goalNumber < 1 || goalNumber > goals.length) {
    console.error(`Invalid goal number. Please choose 1-${goals.length}`);
    return;
  }

  const selectedGoal = goals[goalNumber - 1];
  console.log(`🎮 Running speedrun for: ${selectedGoal.name}\n`);
  
  printRoute(solver, selectedGoal.goal);
}

if (require.main === module) {
  main();
}