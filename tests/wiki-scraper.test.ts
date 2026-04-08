import { describe, expect, it } from "vitest";
import { normalizeWikiEntity, scrapeWikiPageFromHtml, extractWikiEntityLinksFromHtml } from "../src/ingest/wiki-scraper.js";

const fixtureHtml = `
<html>
  <body>
    <h1 id="firstHeading">Mealwood</h1>
    <div id="mw-content-text">
      <div class="mw-parser-output">
        <p>Mealwood is an early crop for Meal Lice production.</p>
        <table class="infobox">
          <tr><th>Type</th><td>Plant</td></tr>
          <tr><th>Temperature</th><td>10 C to 30 C</td></tr>
        </table>
        <h2>Growth</h2>
        <p>Mealwood requires Dirt and moderate temperatures.</p>
        <table class="wikitable">
          <tr><th>Input</th><th>Output</th></tr>
          <tr><td>Dirt</td><td>Meal Lice</td></tr>
        </table>
        <a href="/wiki/Meal_Lice">Meal Lice</a>
        <a href="/wiki/Dirt">Dirt</a>
      </div>
    </div>
  </body>
</html>
`;

const indexFixtureHtml = `
<html>
  <body>
    <div id="mw-content-text">
      <div class="mw-parser-output">
        <p><a href="/wiki/Decor">Decor</a></p>
        <table class="wikitable">
          <tr><th>Plant</th></tr>
          <tr><td><a href="/wiki/Mealwood">Mealwood</a></td></tr>
          <tr><td><a href="/wiki/Bristle_Blossom">Bristle Blossom</a></td></tr>
        </table>
      </div>
    </div>
  </body>
</html>
`;

describe("wiki scraper", () => {
  it("extracts links from category-like pages", () => {
    const links = extractWikiEntityLinksFromHtml(fixtureHtml, "https://oxygennotincluded.wiki.gg/wiki/Plants");

    expect(links.map((link) => link.slug)).toEqual(expect.arrayContaining(["meal-lice", "dirt"]));
  });

  it("prefers table-backed entity links over generic content links on index pages", () => {
    const links = extractWikiEntityLinksFromHtml(indexFixtureHtml, "https://oxygennotincluded.wiki.gg/wiki/Plants");

    expect(links.map((link) => link.slug)).toEqual(["mealwood", "bristle-blossom"]);
  });

  it("scrapes a page and normalizes it into a typed entity shell", () => {
    const page = scrapeWikiPageFromHtml(fixtureHtml, "https://oxygennotincluded.wiki.gg/wiki/Mealwood");
    const entity = normalizeWikiEntity("plant", page);

    expect(page.title).toBe("Mealwood");
    expect(page.tables).toHaveLength(1);
    expect(entity.kind).toBe("plant");
    expect(entity.slug).toBe("mealwood");
    expect(entity.rawDetails).toBeTruthy();
  });
});
