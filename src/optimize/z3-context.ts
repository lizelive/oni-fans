import { init } from "z3-solver";

let cachedPromise: ReturnType<typeof init> | undefined;

export async function getZ3() {
  cachedPromise ??= init();
  return cachedPromise;
}
