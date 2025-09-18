import { GameData } from '../models/types';

// Simple factorio-like game data for demonstration
export const exampleGameData: GameData = {
  items: {
    'iron-ore': { id: 'iron-ore', name: 'Iron Ore' },
    'copper-ore': { id: 'copper-ore', name: 'Copper Ore' },
    'coal': { id: 'coal', name: 'Coal' },
    'iron-plate': { id: 'iron-plate', name: 'Iron Plate' },
    'copper-plate': { id: 'copper-plate', name: 'Copper Plate' },
    'steel-plate': { id: 'steel-plate', name: 'Steel Plate' },
    'iron-gear-wheel': { id: 'iron-gear-wheel', name: 'Iron Gear Wheel' },
    'copper-cable': { id: 'copper-cable', name: 'Copper Cable' },
    'electronic-circuit': { id: 'electronic-circuit', name: 'Electronic Circuit' },
    'advanced-circuit': { id: 'advanced-circuit', name: 'Advanced Circuit' },
    'science-pack-1': { id: 'science-pack-1', name: 'Automation Science Pack' },
    'science-pack-2': { id: 'science-pack-2', name: 'Logistic Science Pack' },
    'inserter': { id: 'inserter', name: 'Inserter' },
    'transport-belt': { id: 'transport-belt', name: 'Transport Belt' },
    'assembling-machine-1': { id: 'assembling-machine-1', name: 'Assembling Machine 1' },
    'assembling-machine-2': { id: 'assembling-machine-2', name: 'Assembling Machine 2' }
  },

  recipes: {
    'iron-plate': {
      id: 'iron-plate',
      name: 'Smelt Iron Plate',
      inputs: { 'iron-ore': 1 },
      outputs: { 'iron-plate': 1 },
      time: 3.2,
      category: 'smelting'
    },
    'copper-plate': {
      id: 'copper-plate',
      name: 'Smelt Copper Plate',
      inputs: { 'copper-ore': 1 },
      outputs: { 'copper-plate': 1 },
      time: 3.2,
      category: 'smelting'
    },
    'steel-plate': {
      id: 'steel-plate',
      name: 'Smelt Steel Plate',
      inputs: { 'iron-plate': 5 },
      outputs: { 'steel-plate': 1 },
      time: 16,
      category: 'smelting'
    },
    'iron-gear-wheel': {
      id: 'iron-gear-wheel',
      name: 'Iron Gear Wheel',
      inputs: { 'iron-plate': 2 },
      outputs: { 'iron-gear-wheel': 1 },
      time: 0.5,
      category: 'crafting'
    },
    'copper-cable': {
      id: 'copper-cable',
      name: 'Copper Cable',
      inputs: { 'copper-plate': 1 },
      outputs: { 'copper-cable': 2 },
      time: 0.5,
      category: 'crafting'
    },
    'electronic-circuit': {
      id: 'electronic-circuit',
      name: 'Electronic Circuit',
      inputs: { 'iron-plate': 1, 'copper-cable': 3 },
      outputs: { 'electronic-circuit': 1 },
      time: 0.5,
      category: 'crafting'
    },
    'advanced-circuit': {
      id: 'advanced-circuit',
      name: 'Advanced Circuit',
      inputs: { 'electronic-circuit': 2, 'copper-cable': 4 },
      outputs: { 'advanced-circuit': 1 },
      time: 6,
      category: 'crafting'
    },
    'science-pack-1': {
      id: 'science-pack-1',
      name: 'Automation Science Pack',
      inputs: { 'copper-plate': 1, 'iron-gear-wheel': 1 },
      outputs: { 'science-pack-1': 1 },
      time: 5,
      category: 'crafting'
    },
    'science-pack-2': {
      id: 'science-pack-2',
      name: 'Logistic Science Pack',
      inputs: { 'inserter': 1, 'transport-belt': 1 },
      outputs: { 'science-pack-2': 1 },
      time: 6,
      category: 'crafting'
    },
    'inserter': {
      id: 'inserter',
      name: 'Inserter',
      inputs: { 'electronic-circuit': 1, 'iron-gear-wheel': 1, 'iron-plate': 1 },
      outputs: { 'inserter': 1 },
      time: 0.5,
      category: 'crafting'
    },
    'transport-belt': {
      id: 'transport-belt',
      name: 'Transport Belt',
      inputs: { 'iron-plate': 1, 'iron-gear-wheel': 1 },
      outputs: { 'transport-belt': 2 },
      time: 0.5,
      category: 'crafting'
    },
    'assembling-machine-1': {
      id: 'assembling-machine-1',
      name: 'Assembling Machine 1',
      inputs: { 'electronic-circuit': 3, 'iron-gear-wheel': 5, 'iron-plate': 9 },
      outputs: { 'assembling-machine-1': 1 },
      time: 0.5,
      category: 'crafting'
    },
    'assembling-machine-2': {
      id: 'assembling-machine-2',
      name: 'Assembling Machine 2',
      inputs: { 'steel-plate': 2, 'electronic-circuit': 3, 'iron-gear-wheel': 5, 'assembling-machine-1': 1 },
      outputs: { 'assembling-machine-2': 1 },
      time: 0.5,
      category: 'crafting'
    }
  },

  techTree: {
    technologies: {
      'automation': {
        id: 'automation',
        name: 'Automation',
        prerequisites: [],
        researchTime: 10,
        researchInputs: { 'science-pack-1': 10 }
      },
      'logistics': {
        id: 'logistics',
        name: 'Logistics',
        prerequisites: ['automation'],
        researchTime: 15,
        researchInputs: { 'science-pack-1': 15 }
      },
      'steel-processing': {
        id: 'steel-processing',
        name: 'Steel Processing',
        prerequisites: [],
        researchTime: 30,
        researchInputs: { 'science-pack-1': 50 }
      },
      'automation-2': {
        id: 'automation-2',
        name: 'Automation 2',
        prerequisites: ['logistics', 'steel-processing'],
        researchTime: 30,
        researchInputs: { 'science-pack-1': 40, 'science-pack-2': 40 }
      }
    },
    unlocks: {
      'automation': ['assembling-machine-1'],
      'logistics': ['inserter', 'transport-belt'],
      'steel-processing': ['steel-plate'],
      'automation-2': ['assembling-machine-2']
    }
  }
};