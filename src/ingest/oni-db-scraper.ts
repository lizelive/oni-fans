import { load } from "cheerio";
import type { OniEntity, RawDetailValue } from "../domain/types.js";
import { FetchHttpClient } from "./http.js";

export interface ScrapedOniDbDetail {
  readonly slug: string;
  readonly url: string;
  readonly title: string;
  readonly imageUrl?: string;
  readonly sections: Readonly<Record<string, RawDetailValue>>;
}

function cleanText(value: string): string {
  return value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

export function scrapeOniDbDetailFromHtml(html: string, url: string, slug: string): ScrapedOniDbDetail {
  const $ = load(html);
  const title = cleanText($("h1").first().text()) || cleanText($("title").text()).replace(/ \|.*/, "");
  const imageCandidates = $("img")
    .toArray()
    .map((image) => $(image).attr("src") ?? $(image).attr("data-src"))
    .filter((src): src is string => typeof src === "string")
    .filter((src) => !src.startsWith("data:"));
  const firstImage = imageCandidates[0];
  const imageUrl = firstImage ? new URL(firstImage, url).toString() : undefined;

  const sections: Record<string, RawDetailValue> = {};
  $("h2, h3").each((_, headingElement) => {
    const heading = cleanText($(headingElement).text());
    if (!heading) {
      return;
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
  });

  return {
    slug,
    url,
    title,
    ...(imageUrl ? { imageUrl } : {}),
    sections,
  };
}

function mergeRawDetails(existing: OniEntity["rawDetails"], oniDb: Readonly<Record<string, RawDetailValue>>): RawDetailValue {
  if (existing && typeof existing === "object" && !Array.isArray(existing)) {
    return {
      ...existing,
      oniDb,
    };
  }

  return {
    base: existing ?? null,
    oniDb,
  };
}

export function mergeEntityWithOniDb(entity: OniEntity, detail: ScrapedOniDbDetail): OniEntity {
  return {
    ...entity,
    sources: [...entity.sources, detail.url],
    ...(entity.image || detail.imageUrl
      ? {
          image:
            entity.image ?? {
              sourceUrl: detail.imageUrl!,
              localPath: `assets/oni/${entity.kind}s/${entity.slug}${detail.imageUrl!.endsWith(".jpg") ? ".jpg" : ".png"}`,
            },
        }
      : {}),
    rawDetails: mergeRawDetails(entity.rawDetails, detail.sections),
  };
}

export class OniDbScraper {
  private readonly httpClient: FetchHttpClient;

  constructor(httpClient = new FetchHttpClient()) {
    this.httpClient = httpClient;
  }

  async scrapeDetail(slug: string): Promise<ScrapedOniDbDetail> {
    const url = `https://oni-db.com/details/${slug}`;
    const html = await this.httpClient.getText(url);
    return scrapeOniDbDetailFromHtml(html, url, slug);
  }
}
