# design-sync notes — WhatNow website

Repo-specific gotchas for syncing this repo to claude.ai/design. Read before any re-sync.

## What this repo is
- A **Next.js 16 marketing site** (`whatnow-web`), not a published component library. There is **no `dist/`** and no package `types`. The "design system" is `src/components/**` (15 components).
- Project: **WhatNow Design System** — `76f99106-34bb-4e24-a6e2-76fc8af577c6`.

## Why the build is off the converter's default path
- **Custom barrel entry** `.design-sync/ds-src/entry.tsx` (wired via `cfg.entry`): the converter's synth-entry uses `export * from`, which does NOT re-export `default` exports. Almost every component here is `export default function X()`, so a synth-entry leaves `window.WhatNow.*` empty. The barrel re-exports each default as a named export. **When adding/removing a component, update BOTH the barrel AND `cfg.componentSrcMap`.**
- The barrel also `import "./process-polyfill"` **first** — several bundled deps read `process.env.*` / `process.platform` at module load; without it the whole IIFE throws `process is not defined` and nothing lands on `window.WhatNow`.
- The barrel exports `LanguageProvider` (the i18n provider) and `MotionGlobalConfig` (from framer-motion) for previews to import.
- **Next.js shims** in `.design-sync/ds-src/shims/` (wired via `cfg.tsconfig` → `tsconfig.dssync.json` `paths`): `next/link` → `<a>`, `next/image` → `<img>`, `next/navigation` → inert router/hooks. Real Next modules assume the app runtime; `next/navigation`'s `useRouter` throws "invariant expected app router to be mounted" when bundled. Shimming them also cut the bundle from ~1070 KB to ~607 KB.
- **`cfg.provider` (`LanguageProvider`) is largely cosmetic here** — the build prints `[PROVIDER_UNEXPORTED]` (false positive: the converter's `exported` set is computed from `.d.ts`/synth, which never sees barrel exports). It's kept for the README. The floor-card path does NOT apply it, so authored previews must **self-wrap** in `<LanguageProvider>` (see below).

## ⚠️ The tsconfig comment-key trap (cost an hour — do not repeat)
`lib/bundle.mjs`'s `tsconfigPathsPlugin` strips `//` line comments before `JSON.parse`. A JSON **key** of `"//"` (a common "comment" trick) gets mangled → parse throws → the plugin silently returns null → NONE of the `paths` aliases apply. The symptom is sneaky: `@/` still resolves (esbuild auto-detects the repo's real `tsconfig.json`), so the build succeeds, but the `next/*` shims are NOT applied and overlays error with "invariant expected app router to be mounted". **Keep `tsconfig.dssync.json` free of `//`-style comments.**

## Previews: animation/overlay capture tricks
`package-capture.mjs` screenshots at `networkidle` + a fonts/images `settle()` with **no frame/time wait**, so framer-motion entry/`whileInView` animations and event-driven overlays often capture blank even though they render fine live. Fixes used (all preview-only, in `.design-sync/previews/`):
- **`MotionGlobalConfig.skipAnimations = true`** at the top of any preview whose component animates in (Testimonials, ComingSoon button, all overlays). Lands animations instantly; affects only the preview page, never designs.
- **IntersectionObserver stub** in `Testimonials.tsx` — its whole body is gated behind `whileInView`; the stub reports immediate intersection.
- **Event-driven overlays** (SearchModal `open-search`, NoticeBoard `open-notice-board`, AdminNoticeBoard `open-admin-notices`, ContextMenu native `contextmenu`): the preview dispatches the open event **immediately in `useEffect`** (no setTimeout — child listener is already attached by effect ordering; a delayed dispatch fires after the capture screenshots). ContextMenu must dispatch on a **DOM element** (`document.documentElement`), not `window` (handler calls `e.target.closest`). All four use `cfg.overrides.<Name>.cardMode:"single"` + a viewport.

## Re-sync risks (watch-list)
- **NoticeBoard captures thin/blank.** It fetches a remote RSS feed on open; the static capture catches the loading state before it resolves. It renders fully in a real browser (verified: shows live "UGC NET Admit Card 2026" etc.). The live DS-pane card is fine — `[RENDER_BLANK]` on NoticeBoard is the one non-blocking validate warning; don't chase it in capture.
- **Brand fonts not shipped.** Geist + Mukta load via `next/font/google` (CSS vars `--font-geist-sans`/`--font-mukta`); not available to the standalone bundle, so previews render in a **system-sans fallback**. styles.css import ordering makes a valid top-of-file remote `@import` awkward. To improve fidelity: self-host Geist/Mukta woff2 + a `@font-face` CSS and wire `cfg.extraFonts`.
- **`/logo.png`, `/hero.png`** are absolute public paths that don't resolve in the design env → Navbar/Footer/Hero show broken/alt images. Cosmetic.
- **Iconify icons** (`@iconify/react`) fetch from the Iconify API at runtime — render only with network (present in capture here). Offline environments show empty icons.
- **`tw-input.css` `@theme` must stay in sync with `src/app/globals.css`** — `cfg.buildCmd` recompiles Tailwind from it: `npx --yes @tailwindcss/cli@^4 -i .design-sync/ds-src/tw-input.css -o .design-sync/ds-src/compiled.css`. Run it before `package-build.mjs` whenever component class usage or tokens change.
- **Re-sync order:** run `cfg.buildCmd` (Tailwind) → `package-build.mjs` → `package-validate.mjs`. The bundle is deterministic; grades carry forward via the uploaded `_ds_sync.json`.
