# oni-fans

Z3-powered abstract production and speedrun-route solver for Oxygen Not Included.

This workspace contains three main layers:

- A typed ONI domain model with refactorable helpers and seed data stored in TypeScript modules such as [data/oni/plants/mealwood.ts](data/oni/plants/mealwood.ts).
- An abstract simulator that reasons about per-cycle resource balance, duplicant labor, and heat without map positions.
- A Z3-backed optimizer that finds feasible production plans and emits an abstract route order for the selected operations.

The repo also includes a scraping pipeline that pulls structured data from `oxygennotincluded.wiki.gg`, augments it from `oni-db.com`, and mirrors discovered images locally. To avoid clobbering the curated solver seed data, the CLI writes live-ingested output into `data/oni/generated` and `assets/oni/generated` by default.

## Architecture

- `src/domain`: core types, branded IDs, builders, registry, and filesystem loaders.
- `src/simulate`: the abstract, no-position simulator.
- `src/optimize`: Z3 problem builder and solver.
- `src/ingest`: wiki/oni-db scrapers, image downloader, TypeScript emitter, and ingestion pipeline.
- `data/oni`: curated seed entities used by the tests and sample optimizer flows.
- `tests`: coverage for catalog loading, simulation, optimization, scraping, and code generation.

## Commands

```bash
npm install
npm run check
npm test
npm run catalog
npm run solve -- --goal oxygen=800 --supply water=1200 --max-heat 10 --max-labor 20
npm run ingest -- --kind plant --limit 10
npm run ingest:all
```

## Solver Model

The current optimizer works at an abstract colony-planning level:

- No tile positions, pipe layouts, or room geometry.
- Integer operation counts for buildings, critters, plants, and geysers.
- Hard constraints for external supplies, required outputs, maximum labor, maximum heat, and optional building count caps.
- Objective ordering: minimize labor first, then heat, then total operation count.

This makes it suitable for speedrun-style planning and lag-efficient production-chain selection where the main question is what to run, how many copies to build, and in what abstract order dependencies unlock.

## Ingestion Notes

- `wiki.gg` is treated as the primary canonical source because it is fresher and structurally easier to scrape.
- `oni-db` is used as a secondary enrichment source for extra sections and image discovery.
- Generated files intentionally preserve raw details in `rawDetails` so later normalization passes can become more specific without re-scraping.
- Images are downloaded locally when a stable source URL is found.

## Validation

The current test suite covers:

- catalog loading from both static imports and filesystem discovery
- simulation aggregation of materials, labor, and heat
- optimizer choice changes under different supply and heat constraints
- wiki page parsing and normalization
- oni-db detail parsing and entity merging
- TypeScript module generation for scraped entities

The latest validated commands were `npm run check` and `npm test`.