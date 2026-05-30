# Build report — v1.0 (2026-05-30)

Captured from a clean `npm run build` after iter-5 completion.

## `npm run build`

```
03:30:53 [content] Syncing content
03:30:53 [content] Synced content
03:30:53 [types] Generated 43ms
03:30:53 [build] output: "static"
03:30:53 [build] mode: "static"
03:30:53 [build] directory: dist/
03:30:55 [vite] ✓ built in 1.61s
03:30:55 [build] 10 page(s) built in 1.84s
03:30:55 [build] Complete!
```

- **Pages**: 10 (1 home + 9 inner including `/404`)
- **Build time**: ~1.84 s total (vite ~1.61 s)
- **Runtime errors**: 0
- **Warnings**: only the standard Node `ExperimentalWarning: Support
  for loading ES Module in require()` from the toolchain — not project
  code.

## `npx astro check`

```
Result (23 files):
- 0 errors
- 0 warnings
- 0 hints
```

Clean. TypeScript strict mode, no diagnostics across 23 `.astro` files.

## Bundle sizes (uncompressed)

| Artifact | Size |
|---|---:|
| `dist/` total | 512 KB |
| `dist/fonts/` (14 WOFF2 subsets, Inter + Manrope) | 204 KB |
| `dist/_astro/dokumenti.*.css` (shared Tailwind bundle) | 30 KB |
| `dist/og-default.svg` (default social card) | 4 KB |
| `dist/favicon.svg` | 4 KB |

### Per-page HTML size (uncompressed)

| Route | Size |
|---|---:|
| `/priem` | 14.4 KB |
| `/404` | 13.2 KB |
| `/kontakti` | 15.4 KB |
| `/stem` | 17.3 KB |
| `/dokumenti` | 19.1 KB |
| `/za-nas` | 19.8 KB |
| `/novini` | 19.9 KB |
| `/galeriya` | 20.9 KB |
| `/` (home) | 29.9 KB |
| `/obuchenie` | 39.6 KB |

The home page weight is dominated by inline hero SVG + stat badges.
`/obuchenie` is heavier because it embeds the full curriculum block.
All pages share a single ~30 KB CSS bundle.

### Font payload notes

- Cyrillic subsets: ~7.5–8 KB each (the actual bytes Bulgarian pages
  download).
- Latin subsets: ~14–24 KB each (loaded only when the browser
  encounters latin glyphs, e.g. `1957`, `STEM`, English fragments).
- All font faces use `font-display: swap`.

### Guardrail

`scripts/check-no-google-fonts.sh` passes — no `fonts.googleapis.com`
or `fonts.gstatic.com` references anywhere in `dist/`.

## Tablet smoke test notes (768 / 1024)

These were checked by reading the markup/Tailwind breakpoints rather
than running a headless browser. A live tablet pass is in the
launch checklist.

- **Hero handoff @ md (768)** — `md:hidden` no longer hides the small
  ГМ glyph; it's now folded into the eyebrow pill, so it renders at
  every breakpoint without colliding with the big SVG monogram (which
  only appears at `md+` in the right column). No layout shift expected
  through the 767→768 transition.
- **Leadership grid 2→3 col @ md** (`/za-nas`) — confirmed: grid uses
  `sm:grid-cols-2 md:grid-cols-3`. At md, 6 cards lay out cleanly as
  3×2; at sm, 2×3. No orphan cards.
- **Schedule scroll @ md** — `/obuchenie` programme blocks scroll
  inside their own containers via `overflow-x-auto` where the schedule
  table is wider than the viewport. No horizontal scroll on the page
  body. (Verified by inspecting per-page markup.)
- **Документи grid step-up @ lg** — previously `lg:grid-cols-3` left a
  lonely 5th card on row 2. Changed to `xl:grid-cols-3` so the lg
  breakpoint stays at 2 columns (clean 2+2+1), then steps to 3 at xl
  (clean 3+2). No lonely card.
- **Footer columns** — 1 → 2 (md) → 4 (lg), unchanged from prior iters.

## Lighthouse pass

Not run — headless Chrome / lighthouse-cli are not available in the
build environment. **Status: part of the human's launch checklist.**
A Lighthouse run against `https://<production-host>/` (or against
`npm run preview` locally) should target:

- Performance ≥ 90 (static HTML + woff2 subsets, no JS — realistic).
- Accessibility ≥ 95.
- Best practices ≥ 95.
- SEO ≥ 95.

## Known limitations carried from iter-4 designer review

- **3 external footer URLs unverified** — soft-handled by the
  `verified` flag in `src/config/externalLinks.ts`; unverified entries
  render as plain text with "(линк предстои)" rather than as broken
  links. Flip after school confirmation. (See `LAUNCH_CHECKLIST.md`.)
- **No per-news permalinks / RSS** — every "Прочети повече" still
  anchors at `/novini`. Deferred to post-launch.
- **Документи categories** are stubs — no actual files behind them
  yet.
- **Леadership** is role-only — no names or photos.
- **No cookie banner / GDPR overlay** — re-evaluate post-launch if
  required for compliance (the site currently sets no cookies and
  ships no third-party scripts, so the legal need may be low).
- **`astro.config.mjs`'s `site:`** must be set to the production
  origin before deploy so canonical URLs and OG image URLs resolve to
  the real domain.
