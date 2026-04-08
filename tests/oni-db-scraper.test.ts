import { describe, expect, it } from "vitest";
import { mergeEntityWithOniDb, scrapeOniDbDetailFromHtml } from "../src/ingest/oni-db-scraper.js";
import mealwood from "../data/oni/plants/mealwood.js";

const oniDbFixture = `
<html>
  <body>
    <h1>Mealwood</h1>
    <img src="/static/media/mealwood.png" />
    <h2>Plant Details</h2>
    <p>Produces Meal Lice and consumes Dirt.</p>
    <h3>Farming</h3>
    <p>Use in Farm Tiles or Hydroponic Farms.</p>
  </body>
</html>
`;

describe("oni-db scraper", () => {
  it("parses oni-db detail sections and image URLs", () => {
    const detail = scrapeOniDbDetailFromHtml(oniDbFixture, "https://oni-db.com/details/mealwood", "mealwood");

    expect(detail.title).toBe("Mealwood");
    expect(detail.imageUrl).toContain("mealwood.png");
    expect(detail.sections["Plant Details"]).toEqual(["Produces Meal Lice and consumes Dirt."]);
  });

  it("merges oni-db sections into an existing entity without losing its identity", () => {
    const detail = scrapeOniDbDetailFromHtml(oniDbFixture, "https://oni-db.com/details/mealwood", "mealwood");
    const merged = mergeEntityWithOniDb(mealwood, detail);

    expect(merged.slug).toBe("mealwood");
    expect(merged.sources).toContain("https://oni-db.com/details/mealwood");
    expect(merged.rawDetails).toMatchObject({ oniDb: detail.sections });
  });
});
