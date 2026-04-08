import path from "node:path";
import { resourceId } from "./core/ids.js";
import { createCatalog } from "./domain/catalog.js";
import { loadCatalogFromDataDir } from "./domain/loaders.js";
import { IngestPipeline } from "./ingest/pipeline.js";
import { ConstraintProblemBuilder } from "./optimize/problem.js";
import { ProductionOptimizer } from "./optimize/solver.js";

function readFlag(args: string[], name: string): string | undefined {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

function readRepeatedFlags(args: string[], name: string): string[] {
  const values: string[] = [];
  for (let index = 0; index < args.length; index += 1) {
    const next = args[index + 1];
    if (args[index] === name && next) {
      values.push(next);
    }
  }
  return values;
}

async function handleCatalog(args: string[]): Promise<void> {
  const dataDir = readFlag(args, "--data-dir");
  const registry = dataDir ? await loadCatalogFromDataDir(dataDir) : createCatalog();
  const counts = new Map<string, number>();
  for (const entity of registry.list()) {
    counts.set(entity.kind, (counts.get(entity.kind) ?? 0) + 1);
  }
  for (const [kind, count] of [...counts.entries()].sort(([left], [right]) => left.localeCompare(right))) {
    console.log(`${kind}: ${count}`);
  }
  console.log(`operations: ${registry.listOperations().length}`);
}

async function handleSolve(args: string[]): Promise<void> {
  const registry = createCatalog();
  const builder = new ConstraintProblemBuilder();
  const goals = readRepeatedFlags(args, "--goal");
  const supplies = readRepeatedFlags(args, "--supply");

  if (goals.length === 0) {
    builder.require(resourceId("oxygen"), 800).supply(resourceId("water"), 1200).capHeat(10).capLabor(20);
  }

  for (const goal of goals) {
    const [resource, amount] = goal.split("=");
    if (resource && amount) {
      builder.require(resourceId(resource), Number(amount));
    }
  }
  for (const supply of supplies) {
    const [resource, amount] = supply.split("=");
    if (resource && amount) {
      builder.supply(resourceId(resource), Number(amount));
    }
  }

  const maxHeat = readFlag(args, "--max-heat");
  if (maxHeat) {
    builder.capHeat(Number(maxHeat));
  }

  const maxLabor = readFlag(args, "--max-labor");
  if (maxLabor) {
    builder.capLabor(Number(maxLabor));
  }

  const optimizer = new ProductionOptimizer(registry);
  const result = await optimizer.solve(builder.build());

  if (!result) {
    console.error("No feasible solution found.");
    process.exitCode = 1;
    return;
  }

  console.log("Operations:");
  for (const operation of result.operations) {
    const binding = registry.getOperation(operation.operationId);
    console.log(`- ${binding?.entity.name ?? operation.entityId}: ${binding?.operation.name ?? operation.operationId} x${operation.count}`);
  }
  console.log(`Heat: ${result.totalHeatKdtuPerCycle.toFixed(2)} kDTU/cycle`);
  console.log(`Labor: ${result.totalLaborSecondsPerCycle.toFixed(2)} dupe-seconds/cycle`);
  console.log("Route:");
  for (const step of result.route) {
    console.log(`- phase ${step.phase}: ${step.entityName} x${step.count} (${step.rationale})`);
  }
}

async function handleIngest(args: string[]): Promise<void> {
  const all = args.includes("--all");
  const limit = all ? undefined : Number(readFlag(args, "--limit") ?? "5");
  const finiteLimit = limit !== undefined && Number.isFinite(limit) ? limit : null;
  const kindArgs = readRepeatedFlags(args, "--kind");
  const workspaceRoot = process.cwd();
  const pipeline = new IngestPipeline({
    outputRoot: path.join(workspaceRoot, "data", "oni", "generated"),
    assetRoot: path.join(workspaceRoot, "assets", "oni", "generated"),
    ...(finiteLimit !== null ? { limitPerKind: finiteLimit } : {}),
    ...(kindArgs.length > 0 ? { kinds: kindArgs as never } : {}),
    includeOniDbAugmentation: true,
  });

  const summary = await pipeline.run();
  for (const entry of summary) {
    console.log(`${entry.kind}: scraped ${entry.scraped}, emitted ${entry.emittedFiles.length}`);
  }
}

async function main(): Promise<void> {
  const [command, ...args] = process.argv.slice(2);

  switch (command) {
    case "catalog":
      await handleCatalog(args);
      break;
    case "solve":
      await handleSolve(args);
      break;
    case "ingest":
      await handleIngest(args);
      break;
    default:
      console.log("Commands: catalog, solve, ingest");
      console.log("Examples:");
      console.log("  npm run solve -- --goal oxygen=800 --supply water=1000 --max-heat 10 --max-labor 20");
      console.log("  npm run ingest -- --kind plant --limit 10");
  }
}

void main();
