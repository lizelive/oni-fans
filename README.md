# Oni Fans Speedrun Route Solver

A TypeScript-based speedrunning route optimizer for factorio-like games. Takes recipes, tech trees, and goals to compute optimal production and research schedules.

## Features

- **Recipe Dependency Analysis**: Automatically resolves complex production chains
- **Technology Tree Management**: Handles research prerequisites and unlocks
- **Route Optimization**: Finds efficient paths to achieve goals minimizing total time
- **CLI Interface**: Easy-to-use command-line tool with example scenarios
- **Extensible Data Model**: Support for complex items, recipes, and technologies

## Installation

```bash
npm install
npm run build
```

## Usage

### CLI Tool

Run the interactive CLI to test example speedrun scenarios:

```bash
npm start
```

Choose from predefined goals:
1. Basic Automation - Build your first assembling machine
2. Advanced Automation - Unlock steel processing and advanced assembly
3. Science Production - Set up science pack production chains

Example:
```bash
npm start 1  # Run Basic Automation speedrun
```

### As a Library

```typescript
import { SpeedrunSolver, exampleGameData } from 'oni-fans';

const solver = new SpeedrunSolver(exampleGameData);
const route = solver.solve({
  items: { 'assembling-machine-1': 1 }
});

console.log(`Total time: ${route.totalTime} seconds`);
```

## Algorithm

The solver uses several graph algorithms to optimize speedrun routes:

1. **Dependency Resolution**: Builds directed graphs of recipe and technology dependencies
2. **Topological Sorting**: Orders research and production to respect prerequisites  
3. **Critical Path Analysis**: Schedules tasks to minimize total completion time
4. **Resource Planning**: Tracks intermediate materials and prevents bottlenecks

## Data Structure

### Game Data
- **Items**: Basic materials, intermediate products, and final goods
- **Recipes**: Production rules with inputs, outputs, and crafting time
- **Technologies**: Research items with prerequisites and science pack costs
- **Tech Tree**: Maps technologies to the recipes they unlock

### Example Recipe
```typescript
{
  id: 'iron-gear-wheel',
  name: 'Iron Gear Wheel', 
  inputs: { 'iron-plate': 2 },
  outputs: { 'iron-gear-wheel': 1 },
  time: 0.5,
  category: 'crafting'
}
```

### Example Technology
```typescript
{
  id: 'automation',
  name: 'Automation',
  prerequisites: [],
  researchTime: 10,
  researchInputs: { 'science-pack-1': 10 }
}
```

## Output

The solver generates comprehensive speedrun routes including:

- **Research Schedule**: Ordered list of technologies with timing
- **Production Schedule**: Crafting steps with start/end times  
- **Resource Summary**: Total materials produced and consumed
- **Time Analysis**: Critical path and total completion time

## Development

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Run development version
npm run dev

# Test with different goals
npm start 1  # Basic Automation
npm start 2  # Advanced Automation  
npm start 3  # Science Production
```

## License

This project is licensed under the ISC License.
