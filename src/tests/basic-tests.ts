import { SpeedrunSolver } from '../algorithms/speedrun-solver';
import { exampleGameData } from '../examples/game-data';

// Simple test runner for basic functionality
function runTests(): void {
  console.log('🧪 Running Speedrun Solver Tests\n');

  let passed = 0;
  let failed = 0;

  function test(name: string, testFn: () => boolean): void {
    try {
      if (testFn()) {
        console.log(`✅ ${name}`);
        passed++;
      } else {
        console.log(`❌ ${name}: Test failed`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ ${name}: ${error}`);
      failed++;
    }
  }

  const solver = new SpeedrunSolver(exampleGameData);

  // Test 1: Basic solver initialization
  test('Solver initialization', () => {
    return solver instanceof SpeedrunSolver;
  });

  // Test 2: Simple goal solving
  test('Basic automation goal', () => {
    const route = solver.solve({ items: { 'assembling-machine-1': 1 } });
    return route.totalTime > 0 && 
           route.productionSteps.length > 0 && 
           route.researchSteps.length > 0;
  });

  // Test 3: Complex goal solving
  test('Advanced automation goal', () => {
    const route = solver.solve({ items: { 'assembling-machine-2': 1 } });
    return route.totalTime > 60 && // Should take more than 1 minute
           route.researchSteps.length >= 4 && // Should require multiple technologies
           route.itemsProduced['assembling-machine-2'] === 1;
  });

  // Test 4: Science pack goal
  test('Science production goal', () => {
    const route = solver.solve({ items: { 'science-pack-1': 5 } });
    return route.totalTime > 0 &&
           route.itemsProduced['science-pack-1'] >= 5;
  });

  // Test 5: Raw material handling
  test('Raw material consumption', () => {
    const route = solver.solve({ items: { 'iron-plate': 10 } });
    return route.itemsConsumed['iron-ore'] >= 10;
  });

  console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);
  
  if (failed === 0) {
    console.log('🎉 All tests passed!');
  } else {
    console.log('⚠️  Some tests failed');
    process.exit(1);
  }
}

if (require.main === module) {
  runTests();
}