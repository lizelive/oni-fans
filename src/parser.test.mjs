import { describe, it } from "node:test";
import assert from "node:assert";
import { parseRecipe } from './parser.mjs';




describe('parseRecipe', () => {
  it('parses example input correctly', () => {
    const ExampleInput = `5×
Lye injection	1×
Alkali
6×
Water
2×
Conical flasks`;


    /**
     * @type {Recipe}
     */
    const Expected = {
      "name": "Make Lye Injection",
      "reagents": {
        "Alkali": 1,
        "Water": 6,
        "Conical flasks": 2
      },
      "products": {
        "Lye injection": 5
      }
    };
    let actual = parseRecipe(ExampleInput);
    assert.deepStrictEqual(actual, Expected);
  });
});
