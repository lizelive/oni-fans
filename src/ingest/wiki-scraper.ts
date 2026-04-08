import { load } from "cheerio";
import { entityId } from "../core/ids.js";
import type { OniEntityKind } from "../core/ids.js";
import type { BuildingEntity, CritterEntity, ElementEntity, GeyserEntity, OniEntity, PlantEntity, RawDetailValue } from "../domain/types.js";
import { FetchHttpClient } from "./http.js";

export interface ScrapedWikiTable {
  readonly heading?: string;
  readonly headers: readonly string[];
  readonly rows: readonly (readonly string[])[];
}

export interface ScrapedWikiLink {
  readonly name: string;
  readonly url: string;
  readonly slug: string;
}

export interface ScrapedWikiPage {
  readonly slug: string;
  readonly title: string;
  readonly url: string;
  readonly description?: string;
  readonly imageUrl?: string;
  readonly infobox: Readonly<Record<string, string>>;
  readonly sections: Readonly<Record<string, RawDetailValue>>;
  readonly tables: readonly ScrapedWikiTable[];
  readonly links: readonly ScrapedWikiLink[];
}

function slugFromWikiUrl(url: string): string {
  return decodeURIComponent(url.split("/").pop() ?? "")
    .replace(/\?.*$/, "")
    .replace(/_/g, "-")
    .replace(/[^a-zA-Z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function cleanText(value: string): string {
  return value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function parseTables(html: string): ScrapedWikiTable[] {
  const $ = load(html);
  const tables: ScrapedWikiTable[] = [];

  $("table.wikitable").each((_, tableElement) => {
    const table = $(tableElement);
    const headers = table
      .find("tr")
      .first()
      .find("th")
      .map((__, cell) => cleanText($(cell).text()))
      .get()
      .filter(Boolean);
    const rows: string[][] = [];
    table
      .find("tr")
      .slice(1)
      .each((__, row) => {
        const cells = $(row)
          .find("td")
          .map((___, cell) => cleanText($(cell).text()))
          .get()
          .filter(Boolean);
        if (cells.length > 0) {
          rows.push(cells);
        }
      });
    const heading = cleanText(table.prevAll("h2, h3").first().text()) || undefined;
    tables.push({ ...(heading ? { heading } : {}), headers, rows });
  });

  return tables;
}

function parseInfobox(html: string): Record<string, string> {
  const $ = load(html);
  const infobox: Record<string, string> = {};

  $("table.infobox tr").each((_, row) => {
    const header = cleanText($(row).find("th").first().text());
    const value = cleanText($(row).find("td").first().text());
    if (header && value) {
      infobox[header] = value;
    }
  });

  return infobox;
}

function parseSections(html: string): Record<string, RawDetailValue> {
  const $ = load(html);
  const sections: Record<string, RawDetailValue> = {};
  const headings = $("#mw-content-text h2, #mw-content-text h3").toArray();

  for (const headingElement of headings) {
    const heading = cleanText($(headingElement).text());
    if (!heading) {
      continue;
    }

    const content: string[] = [];
    let cursor = $(headingElement).next();
    while (cursor.length > 0) {
      const node = cursor.get(0);
      if (!node || /^h[23]$/i.test(node.tagName)) {
        break;
      }
      const text = cleanText(cursor.text());
      if (text) {
        content.push(text);
      }
      cursor = cursor.next();
    }

    if (content.length > 0) {
      sections[heading] = content;
    }
  }

  return sections;
}

function parseLinks(html: string, baseUrl: string, selector = "#mw-content-text a[href^='/wiki/']"): ScrapedWikiLink[] {
  const $ = load(html);
  const seen = new Set<string>();
  const links: ScrapedWikiLink[] = [];
  $(selector).each((_, anchor) => {
    const href = $(anchor).attr("href");
    if (!href || href.includes(":")) {
      return;
    }
    const url = new URL(href, baseUrl).toString();
    if (seen.has(url)) {
      return;
    }
    seen.add(url);
    links.push({
      name: cleanText($(anchor).text()),
      url,
      slug: slugFromWikiUrl(url),
    });
  });
  return links;
}

function parseNumber(value?: string): number | undefined {
  if (!value) {
    return undefined;
  }
  const match = value.replace(/,/g, "").match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : undefined;
}

function inferElementState(value?: string): ElementEntity["state"] {
  const normalized = (value ?? "").toLowerCase();
  if (normalized.includes("liquid")) {
    return "liquid";
  }
  if (normalized.includes("gas")) {
    return "gas";
  }
  if (normalized.includes("solid")) {
    return "solid";
  }
  return "special";
}

export function scrapeWikiPageFromHtml(html: string, url: string): ScrapedWikiPage {
  const $ = load(html);
  const title = cleanText($("#firstHeading").text()) || cleanText($("title").text()).replace(/ - .*$/, "");
  const description = cleanText($("#mw-content-text > div.mw-parser-output > p").first().text()) || undefined;
  const imageNode = $("table.infobox img, #mw-content-text .mw-parser-output img").first();
  const imageSource = imageNode.attr("src") ?? imageNode.attr("data-src");
  const imageUrl = imageSource ? new URL(imageSource, url).toString() : undefined;

  return {
    slug: slugFromWikiUrl(url || title),
    title,
    url,
    ...(description ? { description } : {}),
    ...(imageUrl ? { imageUrl } : {}),
    infobox: parseInfobox(html),
    sections: parseSections(html),
    tables: parseTables(html),
    links: parseLinks(html, url),
  };
}

export function extractWikiEntityLinksFromHtml(html: string, baseUrl: string): ScrapedWikiLink[] {
  const targetedSelectors = [
    "#mw-content-text table.wikitable a[href^='/wiki/']",
    "#mw-content-text table.sortable a[href^='/wiki/']",
    "#mw-content-text > .mw-parser-output > ul a[href^='/wiki/']",
    "#mw-content-text > .mw-parser-output > ol a[href^='/wiki/']",
  ];

  for (const selector of targetedSelectors) {
    const links = parseLinks(html, baseUrl, selector).filter((link) => /^[a-z0-9-]+$/.test(link.slug));
    if (links.length > 0) {
      return links;
    }
  }

  return parseLinks(html, baseUrl).filter((link) => /^[a-z0-9-]+$/.test(link.slug));
}

function buildRawDetails(page: ScrapedWikiPage): RawDetailValue {
  return {
    infobox: page.infobox,
    sections: page.sections,
    tables: page.tables.map((table) => ({
      ...(table.heading ? { heading: table.heading } : {}),
      headers: [...table.headers],
      rows: table.rows.map((row) => [...row]),
    })),
    relatedLinks: page.links.slice(0, 100).map((link) => ({ name: link.name, url: link.url, slug: link.slug })),
  };
}

export function normalizeWikiEntity(kind: OniEntityKind, page: ScrapedWikiPage): OniEntity {
  const specificHeatCapacity = parseNumber(page.infobox["Specific Heat Capacity"]);
  const thermalConductivity = parseNumber(page.infobox["Thermal Conductivity"]);
  const molarMass = parseNumber(page.infobox["Molar Mass"]);
  const temperatureC = parseNumber(page.infobox.Temperature);
  const common = {
    id: entityId(page.slug),
    slug: page.slug,
    name: page.title,
    ...(page.description ? { description: page.description } : {}),
    tags: [kind, "wiki.gg"],
    dlc: ["base-game", "spaced-out"],
    sources: [page.url],
    ...(page.imageUrl
      ? {
          image: {
            sourceUrl: page.imageUrl,
            localPath: `assets/oni/${kind}s/${page.slug}${page.imageUrl.endsWith(".jpg") ? ".jpg" : ".png"}`,
          },
        }
      : {}),
    rawDetails: buildRawDetails(page),
  };

  if (kind === "element") {
    return {
      ...common,
      kind: "element",
      state: inferElementState(page.infobox.State ?? page.infobox.Type),
      ...(page.infobox.Category ? { category: page.infobox.Category } : {}),
      ...(specificHeatCapacity !== undefined ? { specificHeatCapacity } : {}),
      ...(thermalConductivity !== undefined ? { thermalConductivity } : {}),
      ...(molarMass !== undefined ? { molarMass } : {}),
    } as ElementEntity;
  }

  if (kind === "building") {
    return {
      ...common,
      kind: "building",
      operations: [],
      ...(page.infobox.Category ? { category: page.infobox.Category } : {}),
    } as BuildingEntity;
  }

  if (kind === "plant") {
    return {
      ...common,
      kind: "plant",
      operations: [],
    } as PlantEntity;
  }

  if (kind === "critter") {
    return {
      ...common,
      kind: "critter",
      operations: [],
    } as CritterEntity;
  }

  return {
    ...common,
    kind: "geyser",
    operations: [],
    ...(temperatureC !== undefined ? { temperatureC } : {}),
  } as GeyserEntity;
}

export class WikiScraper {
  private readonly httpClient: FetchHttpClient;

  constructor(httpClient = new FetchHttpClient()) {
    this.httpClient = httpClient;
  }

  async listEntityLinks(indexUrl: string): Promise<ScrapedWikiLink[]> {
    const html = await this.httpClient.getText(indexUrl);
    return extractWikiEntityLinksFromHtml(html, indexUrl);
  }

  async scrapePage(url: string): Promise<ScrapedWikiPage> {
    const html = await this.httpClient.getText(url);
    return scrapeWikiPageFromHtml(html, url);
  }
}
