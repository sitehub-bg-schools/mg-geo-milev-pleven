# mg-geo-milev-pleven

Static website for **МГ „Гео Милев“ — Плевен**. Built with Astro 5,
Tailwind 3 and TypeScript. Output is a plain static `dist/` folder that
can be served from any static host.

> **Launch status:** v1.0 (see `CHANGELOG.md`). One pre-launch blocker
> outstanding — three external footer URLs need verification by the
> school. See `LAUNCH_CHECKLIST.md`.

---

## What's built

10 static pages, fully translated into Bulgarian:

| Route | Source | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Home — hero, профили, latest news, CTA |
| `/za-nas` | `src/pages/za-nas.astro` | За нас — история, ръководство |
| `/obuchenie` | `src/pages/obuchenie.astro` | Обучение — учебни планове |
| `/stem` | `src/pages/stem.astro` | СТЕМ направление |
| `/priem` | `src/pages/priem.astro` | Прием след 7. клас |
| `/novini` | `src/pages/novini.astro` | Новини и предстоящи събития |
| `/dokumenti` | `src/pages/dokumenti.astro` | Официални документи |
| `/galeriya` | `src/pages/galeriya.astro` | Галерия |
| `/kontakti` | `src/pages/kontakti.astro` | Контакти |
| `/404` | `src/pages/404.astro` | Грешка 404 |

Shared building blocks live in `src/components/`:

- `BaseLayout.astro` — `<head>` (title, meta, OG/Twitter), font preload, skip link.
- `Header.astro`, `Footer.astro` — global navigation and footer.
- `PageHero.astro` — shared eyebrow + H1 + lede band for inner pages.
- `PendingChip.astro` — uniform "Предстои публикуване" pill.
- `SpecializationCard.astro`, `StatBadge.astro` — home page primitives.

---

## Tech stack

- **Astro 5** (static output, edge-friendly)
- **Tailwind CSS 3** via `@astrojs/tailwind`
- **TypeScript** in strict mode (`tsconfig.json` extends `astro/tsconfigs/strict`)
- **Self-hosted fonts** — Inter (body) + Manrope (display), WOFF2 subsets
  shipped under `public/fonts/`. No requests to Google Fonts.
- **No JavaScript runtime** — the site is fully static; client islands
  are not used.

---

## Local development

```bash
npm install
npm run dev      # local dev server on http://localhost:4321
npm run build    # static build to dist/
npm run preview  # preview the build locally
npx astro check  # type-check Astro + TS
```

A guardrail script verifies no Google Fonts URLs leak into the output:

```bash
npm run build
bash scripts/check-no-google-fonts.sh
```

It exits non-zero if it finds `fonts.googleapis.com` or `fonts.gstatic.com`
under `dist/`. Safe to wire into CI.

---

## Deploy

The build emits a self-contained `dist/` directory. Any static host works:

- **Netlify / Cloudflare Pages / Vercel** — point at the repo, set the
  build command to `npm run build` and the publish dir to `dist`.
- **GitHub Pages** — push `dist/` to a Pages branch.
- **Fly.io static** / nginx / Caddy — serve `dist/` directly.

Before deploying, set `site:` in `astro.config.mjs` to the production
origin so canonical URLs and OG image URLs render absolute.

---

## How to update content

Content is plain TypeScript and Astro markup — no CMS, no database. The
files most likely to change:

| What | File |
|---|---|
| School name, address, phones, email, hours, stats | `src/data/school.ts` |
| News / upcoming events | `src/data/news.ts` |
| Footer external links (МОН, РУО, …) + verified flags | `src/config/externalLinks.ts` |
| Official documents categories | `src/pages/dokumenti.astro` |
| Leadership roles list (no names yet) | `src/pages/za-nas.astro` |
| Hero copy, taglines | `src/data/school.ts` (taglines) + `src/pages/index.astro` |
| Brand colours | `tailwind.config.mjs` |
| Global type scale / fonts | `src/styles/global.css` |
| Social preview image | `public/og-default.svg` |

### News & upcoming events

`src/data/news.ts` declares a `NewsItem` interface with a `kind`
discriminator. Use `kind: "upcoming-event"` for items that should be
pinned above the historical news feed (with an accent "Предстоящо
събитие" badge). Use `kind: "news"` (or omit `kind`) for past items
sorted by date descending.

### Footer external links

`src/config/externalLinks.ts` carries a `verified` flag per entry.
Verified entries render as real anchor tags; unverified ones render as
plain text with a muted "(линк предстои)" suffix. Flip `verified` to
`true` only after the school confirms the canonical URL. See
`LAUNCH_CHECKLIST.md` for the three URLs currently pending.

---

## What's deferred to post-launch

- Per-news permalinks (currently every "Прочети повече" anchors back to
  `/novini`). Either add an Astro dynamic route over `news.ts`, or
  migrate news to Astro Content Collections.
- RSS feed for `/novini`.
- News archive (currently a placeholder card on `/novini`).
- Документи — actual PDF / DOCX downloads per category (the page now
  shows category cards with `PendingChip`).
- Галерия — populate the gallery with real photos.
- Lighthouse / accessibility audit run by a human.
- Cookie banner / GDPR overlay — not present, evaluate if required.
- Sitemap (`@astrojs/sitemap` integration).

---

## What's blocked on human input

- **3 footer external URLs** — see `LAUNCH_CHECKLIST.md`, "Single
  blocker". The site builds and deploys as-is; the 3 entries simply
  render as plain text until they're verified.
- **Leadership names** — `/za-nas` lists roles only. The school should
  provide names and (optionally) photos before publication.
- **Документи** — real document URLs / files per category.
- **Прием 2026/2027 г.** — paralleli, балообразуващи предмети and
  number of places, after Pedagogical Council decision.

---

## Browser support

Last 2 evergreen versions of Chrome, Firefox, Safari and Edge. No
polyfills required — Astro emits modern ES.

---

## Project conventions

- Bulgarian only in user-facing copy. No English fragments in UI.
- No fabricated data — empty states render `PendingChip` rather than
  placeholder/fake content.
- No runtime JS unless a feature genuinely needs it. Astro static.
- Tailwind utility-first; reach into `global.css` only for fonts and
  the few `@layer` primitives.
- Components stay framework-agnostic Astro — no React/Vue.

---

## Related docs

- `LAUNCH_CHECKLIST.md` — pre-launch verifications and sign-off.
- `CHANGELOG.md` — iteration history v0.1.0 → v1.0.0.
- `docs/build-report-v1.0.md` — v1.0 build output, page sizes, smoke notes.
