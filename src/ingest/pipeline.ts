import path from "node:path";
import type { OniEntityKind } from "../core/ids.js";
import type { OniEntity } from "../domain/types.js";
import { downloadFile, FetchHttpClient } from "./http.js";
import { EntityFileEmitter } from "./entity-file-emitter.js";
import { mergeEntityWithOniDb, OniDbScraper } from "./oni-db-scraper.js";
import { normalizeWikiEntity, WikiScraper } from "./wiki-scraper.js";

export interface IngestPipelineOptions {
  readonly outputRoot: string;
  readonly assetRoot: string;
  readonly kinds?: readonly OniEntityKind[];
  readonly limitPerKind?: number;
  readonly includeOniDbAugmentation?: boolean;
}

export interface IngestSummary {
  readonly kind: OniEntityKind;
  readonly scraped: number;
  readonly emittedFiles: readonly string[];
}

const DEFAULT_TARGETS: ReadonlyArray<{ kind: OniEntityKind; indexUrl: string }> = [
  { kind: "element", indexUrl: "https://oxygennotincluded.wiki.gg/wiki/Elements" },
  { kind: "building", indexUrl: "https://oxygennotincluded.wiki.gg/wiki/Building" },
  { kind: "plant", indexUrl: "https://oxygennotincluded.wiki.gg/wiki/Plants" },
  { kind: "critter", indexUrl: "https://oxygennotincluded.wiki.gg/wiki/Critter" },
  { kind: "geyser", indexUrl: "https://oxygennotincluded.wiki.gg/wiki/Geysers" },
];

export class IngestPipeline {
  private readonly wiki = new WikiScraper();
  private readonly oniDb = new OniDbScraper();
  private readonly httpClient = new FetchHttpClient();
  private readonly emitter: EntityFileEmitter;

  constructor(private readonly options: IngestPipelineOptions) {
    this.emitter = new EntityFileEmitter(options.outputRoot);
  }

  async run(): Promise<IngestSummary[]> {
    const requestedKinds = new Set(this.options.kinds ?? DEFAULT_TARGETS.map((target) => target.kind));
    const targets = DEFAULT_TARGETS.filter((target) => requestedKinds.has(target.kind));
    const summaries: IngestSummary[] = [];

    for (const target of targets) {
      const links = await this.wiki.listEntityLinks(target.indexUrl);
      const selectedLinks = links.slice(0, this.options.limitPerKind ?? links.length);
      const emittedFiles: string[] = [];

      for (const link of selectedLinks) {
        const page = await this.wiki.scrapePage(link.url);
        let entity: OniEntity = normalizeWikiEntity(target.kind, page);

        if (this.options.includeOniDbAugmentation !== false) {
          try {
            const oniDbDetail = await this.oniDb.scrapeDetail(entity.slug);
            entity = mergeEntityWithOniDb(entity, oniDbDetail);
          } catch {
            // Leave wiki data as the canonical fallback when oni-db is missing or stale.
          }
        }

        if (entity.image?.sourceUrl) {
          const localPath = path.isAbsolute(entity.image.localPath)
            ? entity.image.localPath
            : path.join(this.options.assetRoot, path.basename(entity.image.localPath));
          try {
            await downloadFile(this.httpClient, entity.image.sourceUrl, localPath);
            entity = {
              ...entity,
              image: {
                ...entity.image,
                localPath,
              },
            };
          } catch {
            // Keep the source URL even when the local mirror fails.
          }
        }

        emittedFiles.push(await this.emitter.emit(entity));
      }

      summaries.push({
        kind: target.kind,
        scraped: selectedLinks.length,
        emittedFiles,
      });
    }

    return summaries;
  }
}
