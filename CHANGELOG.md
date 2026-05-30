# Changelog

All notable changes to **mg-geo-milev-pleven** (МГ „Гео Милев“ —
Плевен) per release.

Format loosely follows [Keep a Changelog](https://keepachangelog.com/).
Pre-v1 iterations track the design-implementation loop rather than
public releases.

---

## v1.0.0 — 2026-05-30

First launch-candidate release. Designer review status: **GO with
conditions** (one pre-launch blocker — see `LAUNCH_CHECKLIST.md`).

### iter-1 — Foundation

- Astro 5 + Tailwind 3 + TypeScript strict project scaffold.
- 10-route static site shell: `/`, `/za-nas`, `/obuchenie`, `/stem`,
  `/priem`, `/novini`, `/dokumenti`, `/galeriya`, `/kontakti`, `/404`.
- Self-hosted fonts (Inter body, Manrope display) with cyrillic + latin
  WOFF2 subsets — no requests to Google Fonts. Guardrail script
  `scripts/check-no-google-fonts.sh` added.
- Bulgarian-only copy across all surfaces. No fabricated data; empty
  states render `PendingChip` ("Предстои публикуване").
- Shared `BaseLayout` with `<title>`, description, canonical, OG /
  Twitter meta, skip-link.

### iter-2 — Components & content

- Extracted shared components: `PageHero`, `PendingChip`,
  `SpecializationCard`, `StatBadge`, `Header`, `Footer`.
- School data centralised in `src/data/school.ts` (name, address,
  phones, email, taglines, history, specializations).
- News data in `src/data/news.ts`. Home page surfaces latest 3.

### iter-3 — Hero, brand and accessibility polish

- Home page hero redesigned with concentric-ring SVG monogram (ГМ +
  1957 + "ПЛЕВЕН" inscription), floating stat badges, accent amber
  details.
- Stats responsive: light-variant floating badges on `md+`, dark
  3-up grid on mobile.
- Footer reorganised: contacts column, institutional links,
  external "Полезни връзки" with audit comments per entry.
- Accessibility pass: skip-link, focus rings, semantic landmarks,
  scroll-mt anchors on `/dokumenti` categories.

### iter-4 — Designer review fixes

- Compact ГМ identity glyph added in the mobile hero (visible only at
  `< md` to preserve density at desktop).
- Footer external-link audit comments codified; designer flagged 3
  unverified URLs to resolve before launch.
- Inner-page H1 sizing converged via Tailwind utilities.
- Leadership grid (`/za-nas`) tone palette finalised (brand /
  brand-soft / accent) with role-only cards + `PendingChip`.
- Documents grid moved to 3-col at lg.

### iter-5 — Final polish + launch package

#### Added

- `src/config/externalLinks.ts` — typed registry with explicit
  `verified` flag per footer external link. Footer renders verified
  entries as `<a>`, unverified entries as plain text with a muted
  "(линк предстои)" suffix.
- `NewsKind` discriminator on `NewsItem` (`"news" | "upcoming-event"`).
  Drone Fest Плевен (5 юни 2026) reclassified as `upcoming-event`.
  Both the home news teaser and `/novini` pin upcoming events above
  regular news and show an accent "Предстоящо събитие" badge.
- `sortedNews()` helper centralises sort order (upcoming asc → news desc).
- `public/og-default.svg` (1200×630) — brand-gradient social card with
  ГМ monogram + full school name. Wired as default `ogImage` in
  `BaseLayout`. Twitter card upgraded to `summary_large_image`.
- `<title>` inside the home hero SVG for screen-reader completeness.
- "Прочети повече →" affordance on every `/novini` card (matching the
  home teaser pattern), keyboard accessible.
- Tailwind palette: `accent-50/100/200/700` added to support the new
  "Предстоящо събитие" badge.
- `LAUNCH_CHECKLIST.md` — pre-launch tasks, single blocker, smoke
  test routes, sign-off.
- `docs/build-report-v1.0.md` — build numbers, page sizes, tablet
  smoke notes, known limitations.
- Expanded `README.md` to a proper handoff document.

#### Changed

- Compact ГМ glyph moved into the hero eyebrow pill at all
  breakpoints — gating it with `md:hidden` left desktop without a
  small-format brand mark and risked the only ГМ token disappearing
  behind the big SVG monogram at certain zoom levels.
- `/priem` skeleton table (4 blurred rows) replaced with a single
  honest neutral block: "Конкретните паралелки и балообразуващи
  предмети за учебната 2026/2027 г. ще бъдат публикувани след
  решение на Педагогическия съвет."
- `/dokumenti` grid step-up: was `sm:2 lg:3` (lonely 5th card at lg).
  Now `sm:2 xl:3` for a clean 2+2+1 at lg and 3+2 at xl.

#### Removed

- Dead global H1 clamp in `src/styles/global.css` (the
  `clamp(2.25rem, 5vw, 3.5rem)` rule fought per-page Tailwind utilities
  that already own H1 sizing on every route).

#### Build

- `npm run build` — 10 pages in 1.84 s, 0 errors.
- `npx astro check` — 23 files, 0 errors / warnings / hints.
- `scripts/check-no-google-fonts.sh` — passes.

#### Known launch blocker

- 3 external footer URLs require verification from school staff
  (РУО — Плевен, НАОА, e-uchebnitsi.mon.bg). See `LAUNCH_CHECKLIST.md`,
  "Single blocker".
