// Some bundled deps (Next-adjacent code, framer-motion, iconify) read
// `process.env.*` / `process.platform` / `process.nextTick` at module load.
// The standalone browser bundle has no Node `process`, so define a minimal one
// before any other module evaluates. This file MUST be imported first from
// entry.tsx so the global exists before dependent modules run — and it makes
// the bundle self-sufficient in the real claude.ai/design runtime too.
const g = globalThis as unknown as { process?: { env?: Record<string, string>; platform?: string; nextTick?: (fn: (...a: unknown[]) => void) => void } };

if (typeof g.process === "undefined") {
  g.process = {
    env: { NODE_ENV: "development" },
    platform: "browser",
    nextTick: (fn: (...a: unknown[]) => void) => { Promise.resolve().then(() => fn()); },
  };
} else if (!g.process.env) {
  g.process.env = { NODE_ENV: "development" };
}

export {};
