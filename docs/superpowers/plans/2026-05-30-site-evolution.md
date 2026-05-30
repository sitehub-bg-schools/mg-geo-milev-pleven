# Site Evolution Implementation Plan — МГ „Гео Милев"

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evolve the site from a faithful content copy into the product described
in `docs/DESIGN-VISION.md` — adding the information architecture, the people/
admissions/achievements features, compliance, accessibility, and the platform
token layer — **while keeping the current blue + amber visual language.**

**Architecture:** Static Astro 5 + Tailwind, deployed on Cloudflare Pages, edited
by the school via the staging→publish git flow. Content stays data-driven
(`src/data/*`, content collections, the `documents.ts` + `DocumentList` pattern).
A new **theme-token seam** introduces per-school theming *without changing this
school's colors*, so the work doubles as the platform foundation.

**Tech Stack:** Astro 5, Tailwind 3, TypeScript (strict), Astro content
collections, Vitest (for pure logic: the bal calculator + the contrast
validator). No new runtime framework.

**Scope note:** This plan details **Phases 0–3** task-by-task (the load-bearing
foundation + the highest-value feature). **Phases 4–9** are specified at the
task-and-acceptance level; each will be expanded into its own task-level plan
(`docs/superpowers/plans/…`) when reached, per the writing-plans scope rule.

---

## Decisions

- **D0 — Color scheme: KEEP current** brand blue + amber, white/slate
  backgrounds. (Locked by the user 2026-05-30.) "Ink & Spectrum" is dropped;
  highlight/achievement states use **amber**, not flame-red.
- **D1 — Typography (RESOLVED 2026-05-30): adopt** Spectral (display) + Golos
  Text (body) + Martian Mono (numerals/labels); retire Inter/Manrope. Self-hosted
  via Fontsource files + `@font-face`, Cyrillic+Latin subsets, `font-display:
  swap` — same pattern as today, guardrail-safe. Task 1.5 is now in scope.
- **D2 — Coordinate-plane device (PHASED):** ships as a static, accessible
  data-viz first; the animated "self-drawing curve" is a later enhancement
  (Phase 8), gated on real time-series data.
- **D3 — Duotone photography (DEFERRED):** kept as a later, reversible
  enhancement (Phase 8); staff photos stay plain.

Because the look is kept, this is an **evolutionary** plan: structure + features +
accessibility + platform, not a reskin.

---

## Visual / UX guardrails (apply to every phase)

- Keep blue/amber; reuse existing components (`PageHero`, `StatBadge`,
  `DocumentList`, `NewsCard`, `PendingChip`, `Timeline`) — extend, don't fork.
- Prefer **editorial layout** (asymmetry, rules, varied columns) over more
  identical card grids where a section is content-heavy; cards stay fine for
  genuinely list-like data.
- **Accessibility (WCAG AA, public institution):** semantic landmarks, visible
  focus rings, ≥16px body, ≥44px touch targets, `prefers-reduced-motion` honored,
  all interactive widgets keyboard-operable + `aria-live` on async results.
- **Performance:** LCP < 2.5s on throttled mid-range mobile; fonts self-hosted &
  subset; images lazy + sized.
- **Resilience:** every data-driven section renders a sensible empty state when
  the school hasn't supplied content (reuse `PendingChip` voice).
- Verification for visual/page tasks = `npm run build` (0 errors) + `npx astro
  check` (0 errors) + manual staging review; pure logic uses Vitest.

---

## File structure (what gets created/modified)

**New foundational:**
- `src/styles/theme.css` — CSS custom properties holding this school's tokens.
- `src/data/theme.ts` — typed theme metadata (color names, font choice, flags).
- `scripts/check-contrast.mjs` + `tests/contrast.test.ts` — CI contrast validator.
- `src/components/AnnouncementBar.astro` — site-wide announcement strip.
- `src/data/announcementBar.ts` — current pinned announcement (or null).
- `src/data/nav.ts` — the 6-hub navigation model (replaces inline `navLinks`).

**New feature modules (later phases):**
- `src/data/staff.ts` + `src/pages/uchilishteto/prepodavateli.astro` + `StaffCard.astro`
- `src/data/admissions.ts` + `src/components/BalCalculator.astro` + `src/lib/bal.ts` + `tests/bal.test.ts`
- `src/data/achievements.ts` + `src/components/PlotChart.astro` + `/postizhenia/*`
- `src/data/alumni.ts`, `src/data/clubs.ts`, `src/data/events.ts`
- `src/pages/*` for new hubs; compliance/legal pages under `uchilishteto/`.

**Modified:**
- `tailwind.config.mjs` (point colors at CSS vars), `src/components/Header.astro`
  (6-hub nav + utility bar), `src/components/Footer.astro` (legal cluster),
  `src/layouts/BaseLayout.astro` (announcement bar slot, skip targets, perf).

---

## Phase 0 — Setup & safety net

### Task 0.1: Vitest harness for pure logic

**Files:**
- Create: `vitest.config.ts`, `tests/.gitkeep`
- Modify: `package.json` (add `vitest`, `"test": "vitest run"`)

- [ ] **Step 1: Install vitest**

Run: `npm i -D vitest`

- [ ] **Step 2: Add config**

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
export default defineConfig({ test: { include: ["tests/**/*.test.ts"] } });
```

- [ ] **Step 3: Add script** — in `package.json` `"scripts"`: `"test": "vitest run"`.

- [ ] **Step 4: Verify** — Run: `npm test` → Expected: "No test files found" (exit 0) or passes once tests exist.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "chore: add vitest for pure-logic tests"`

---

## Phase 1 — Theme-token seam (keep colors, enable the platform)

Introduce CSS variables holding the **current** hex values, and point Tailwind at
them. The site looks identical; the difference is that color/theme now lives in
one swappable place — the platform's per-school layer.

### Task 1.1: Define this school's theme as CSS variables

**Files:**
- Create: `src/styles/theme.css`
- Modify: `src/styles/global.css` (import theme.css first)

- [ ] **Step 1: Create `src/styles/theme.css`** with the existing values as RGB
  channel triplets (so Tailwind can apply opacity via `<alpha-value>`):

```css
/* Per-school theme tokens. Swapping these re-skins the site (platform layer).
   Values below are МГ „Гео Милев" — unchanged from the current palette. */
:root {
  --brand-50: 239 246 255;   /* #eff6ff */
  --brand-100: 219 234 254;  /* #dbeafe */
  --brand-500: 37 99 235;    /* #2563eb */
  --brand-600: 29 78 216;    /* #1d4ed8 */
  --brand-700: 30 64 175;    /* #1e40af */
  --brand-900: 30 58 138;    /* #1e3a8a */
  --accent-50: 254 252 232;  /* #fefce8 */
  --accent-100: 254 249 195; /* #fef9c3 */
  --accent-200: 253 230 138; /* #fde68a */
  --accent-500: 234 179 8;   /* #eab308 */
  --accent-600: 202 138 4;   /* #ca8a04 */
  --accent-700: 161 98 7;    /* #a16207 */
}
```

- [ ] **Step 2: Import it** — at the very top of `src/styles/global.css`, before the Tailwind layers: `@import "./theme.css";`

- [ ] **Step 3: Commit** — `git add -A && git commit -m "feat(theme): add per-school CSS token layer (МГ values)"`

### Task 1.2: Point Tailwind at the tokens

**Files:** Modify `tailwind.config.mjs:21-38`

- [ ] **Step 1: Replace the `colors` block** so each shade reads its variable:

```js
colors: {
  brand: {
    50:  "rgb(var(--brand-50) / <alpha-value>)",
    100: "rgb(var(--brand-100) / <alpha-value>)",
    500: "rgb(var(--brand-500) / <alpha-value>)",
    600: "rgb(var(--brand-600) / <alpha-value>)",
    700: "rgb(var(--brand-700) / <alpha-value>)",
    900: "rgb(var(--brand-900) / <alpha-value>)",
  },
  accent: {
    50:  "rgb(var(--accent-50) / <alpha-value>)",
    100: "rgb(var(--accent-100) / <alpha-value>)",
    200: "rgb(var(--accent-200) / <alpha-value>)",
    500: "rgb(var(--accent-500) / <alpha-value>)",
    600: "rgb(var(--accent-600) / <alpha-value>)",
    700: "rgb(var(--accent-700) / <alpha-value>)",
  },
},
```

- [ ] **Step 2: Build & diff** — Run: `npm run build`. Expected: 0 errors. Spot-check `dist/index.html` renders the same blue/amber (the classes are unchanged; only their source moved).

- [ ] **Step 3: Visual check** — push to staging, confirm the site looks identical.

- [ ] **Step 4: Commit** — `git add -A && git commit -m "refactor(theme): Tailwind colors read CSS tokens (no visual change)"`

### Task 1.3: Typed theme metadata

**Files:** Create `src/data/theme.ts`

- [ ] **Step 1: Create** the per-school theme record (drives future template reuse + the contrast validator):

```ts
export interface SchoolTheme {
  slug: string;
  brand: Record<"50"|"100"|"500"|"600"|"700"|"900", string>; // hex
  accent: Record<"50"|"100"|"200"|"500"|"600"|"700", string>;
  paper: string;   // page background (kept white here)
  ink: string;     // body text color
}

export const theme: SchoolTheme = {
  slug: "mg-geo-milev-pleven",
  brand: { "50":"#eff6ff","100":"#dbeafe","500":"#2563eb","600":"#1d4ed8","700":"#1e40af","900":"#1e3a8a" },
  accent: { "50":"#fefce8","100":"#fef9c3","200":"#fde68a","500":"#eab308","600":"#ca8a04","700":"#a16207" },
  paper: "#ffffff",
  ink: "#0f172a", // slate-900
};
```

- [ ] **Step 2: Commit** — `git add -A && git commit -m "feat(theme): typed per-school theme metadata"`

### Task 1.4: Contrast validator (platform safety; runs in CI later)

**Files:** Create `src/lib/contrast.ts`, `tests/contrast.test.ts`

- [ ] **Step 1: Write the failing test:**

```ts
// tests/contrast.test.ts
import { describe, it, expect } from "vitest";
import { contrastRatio, passesAA } from "../src/lib/contrast.ts";

describe("contrast", () => {
  it("computes ~21 for black on white", () => {
    expect(Math.round(contrastRatio("#000000", "#ffffff"))).toBe(21);
  });
  it("ink-on-white passes AA body", () => {
    expect(passesAA("#0f172a", "#ffffff", 4.5)).toBe(true);
  });
  it("amber-500 on white fails AA body text", () => {
    expect(passesAA("#eab308", "#ffffff", 4.5)).toBe(false);
  });
});
```

- [ ] **Step 2: Run, verify it fails** — Run: `npm test` → FAIL (module not found).

- [ ] **Step 3: Implement `src/lib/contrast.ts`:**

```ts
function srgbToLin(c: number): number {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}
function luminance(hex: string): number {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * srgbToLin(r) + 0.7152 * srgbToLin(g) + 0.0722 * srgbToLin(b);
}
export function contrastRatio(fg: string, bg: string): number {
  const a = luminance(fg), b = luminance(bg);
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
}
export function passesAA(fg: string, bg: string, min = 4.5): boolean {
  return contrastRatio(fg, bg) >= min;
}
```

- [ ] **Step 4: Run, verify pass** — Run: `npm test` → PASS (3 tests).

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat(theme): WCAG contrast validator (pure, tested)"`

### Task 1.5 (OPTIONAL, gated on D1): Typography upgrade

Only if you choose the font swap. Self-host **Spectral** (display), **Golos
Text** (body), **Martian Mono** (numerals/labels), subset to Cyrillic+Latin+
numerals, `font-display: swap`; update `tailwind.config.mjs` `fontFamily`
(`display`, `sans`, add `mono`) and `@font-face` blocks in `global.css`; preload
the one above-the-fold display weight. Acceptance: build 0 errors, no FOIT,
headlines wrap at 2–3× length, LCP budget holds. **Skip entirely if keeping
Inter/Manrope.**

---

## Phase 2 — Information architecture: 6 hubs, announcement bar, legal footer

### Task 2.1: Navigation model

**Files:** Create `src/data/nav.ts`; Modify `src/components/Header.astro:4-14`

- [ ] **Step 1: Create `src/data/nav.ts`** with the 6 hubs + utility items:

```ts
export interface NavItem { href: string; label: string; }
export const primaryNav: NavItem[] = [
  { href: "/uchilishteto", label: "Училището" },
  { href: "/obuchenie",    label: "Обучение" },
  { href: "/priem",        label: "Прием" },
  { href: "/postizhenia",  label: "Постижения" },
  { href: "/zhivot",       label: "Живот в училище" },
  { href: "/kontakti",     label: "Контакти" },
];
export const utilityNav: NavItem[] = [
  { href: "/turcene",  label: "Търсене" },
  { href: "https://podkrepi.mon.bg", label: "Школо/е-дневник" }, // confirm real URL
  { href: "/uchilishteto/signali", label: "Подай сигнал" },
];
```

- [ ] **Step 2: Use it in `Header.astro`** — replace the inline `navLinks` with `import { primaryNav, utilityNav } from "../data/nav.ts"`, render `primaryNav` in the main `<nav>` and `utilityNav` in a slim utility row; keep the existing `isActive` logic.

- [ ] **Step 3:** Build + staging check; confirm nav renders, active states work, mobile menu still opens.

- [ ] **Step 4: Commit** — `git add -A && git commit -m "feat(nav): 6-hub IA + utility bar (data-driven)"`

> Note: existing routes (`/za-nas`, `/novini`, `/galeriya`, `/stem`, `/dokumenti`)
> become children of the hubs. Add `public/_redirects` entries when a slug moves
> (e.g. `/za-nas /uchilishteto 301`) — see Task 2.4.

### Task 2.2: Announcement bar

**Files:** Create `src/data/announcementBar.ts`, `src/components/AnnouncementBar.astro`; Modify `BaseLayout.astro`

- [ ] **Step 1:** `announcementBar.ts` exports `current: { message, href?, level: "info"|"urgent" } | null`.
- [ ] **Step 2:** `AnnouncementBar.astro` renders nothing when `current` is null; else a dismissible amber (info) / brand (urgent) strip above the header, `role="region" aria-label="Съобщение"`, with a keyboard-focusable dismiss button.
- [ ] **Step 3:** Mount it at the top of `BaseLayout.astro` before `<slot/>`/header.
- [ ] **Step 4:** Build + check (null state renders nothing; a sample message renders + dismisses). **Commit.**

### Task 2.3: Footer legal cluster + GDPR/ЗДОИ anchors

**Files:** Modify `src/components/Footer.astro`

- [ ] **Step 1:** Add an "Институционална информация" column linking the legal pages built in Phase 7 (профил на купувача, ЗДОИ, ГДПР, сигнали, бюджет) and keep external "Полезни връзки". Repoint the existing institutional anchors to their Phase-7 destinations.
- [ ] **Step 2:** Build + check. **Commit.**

### Task 2.4: Redirects for moved slugs

**Files:** Create/modify `public/_redirects`

- [ ] **Step 1:** Add `301` redirects for any route that moved under a hub (e.g. `/za-nas` → `/uchilishteto`). **Step 2:** verify after deploy. **Commit.**

**Phase 2 acceptance:** 6-hub nav live, announcement bar works (incl. null/dismiss), footer exposes the legal cluster, old URLs redirect. Build + `astro check` clean.

---

## Phase 3 — „Прием" hub + балообразуване калкулатор (highest-value)

The conversion centerpiece. Calculator computes a **plain accessible text result
first**; any plotting is enhancement (Phase 8).

### Task 3.1: Admissions data model

**Files:** Create `src/data/admissions.ts`

- [ ] **Step 1:** Model profiles-as-a-choice + their bal formula coefficients +
  last-year cutoff (nullable). Example shape:

```ts
export interface AdmissionProfile {
  slug: string;            // matches a specialization
  title: string;
  places: number | null;
  // бал = sum over components of (value * multiplier); NVO points + grade points
  formula: {
    nvoBel: number;        // multiplier on НВО БЕЛ (points)
    nvoMat: number;        // multiplier on НВО Математика (points)
    gradeA: { subject: string; mult: number }; // оценка от свидетелство × mult
    gradeB: { subject: string; mult: number };
  };
  lastYearCutoff: number | null;
}
export const admissions: { year: string; profiles: AdmissionProfile[] } = {
  year: "2026/2027",
  profiles: [/* one per specialization; coefficients PENDING from school */],
};
```

- [ ] **Step 2: Commit** — `git add -A && git commit -m "feat(priem): admissions data model"`

### Task 3.2: Bal scoring logic (TDD)

**Files:** Create `src/lib/bal.ts`, `tests/bal.test.ts`

- [ ] **Step 1: Failing test:**

```ts
import { describe, it, expect } from "vitest";
import { computeBal } from "../src/lib/bal.ts";

const profile = {
  formula: { nvoBel: 2, nvoMat: 2, gradeA: { subject: "Математика", mult: 1 }, gradeB: { subject: "Информационни технологии", mult: 1 } },
} as any;

describe("computeBal", () => {
  it("sums weighted НВО points and grade points", () => {
    // НВО: БЕЛ 50, Мат 80 ; оценки: 6.00 и 5.00 (×10 to МОН scale)
    const bal = computeBal(profile, { nvoBel: 50, nvoMat: 80, gradeA: 6, gradeB: 5 });
    // 2*50 + 2*80 + (6*10*1) + (5*10*1) = 100+160+60+50 = 370
    expect(bal).toBe(370);
  });
});
```

- [ ] **Step 2:** Run `npm test` → FAIL. **Step 3:** implement `computeBal(profile, input)` to match (grades ×10 to МОН scale). **Step 4:** `npm test` → PASS. **Step 5: Commit.**

> The exact coefficients/grade-subjects are PENDING from the school; the function
> is formula-agnostic so only `admissions.ts` data changes when they arrive.

### Task 3.3: Calculator component (accessible-first)

**Files:** Create `src/components/BalCalculator.astro` (+ a small client script)

- [ ] **Step 1:** Profile selector + number inputs (НВО БЕЛ, НВО Математика, two grades). On input, compute via `computeBal` and render a **text result** into an `aria-live="polite"` region: „Вашият бал: X. Минал праг (2025): Y. Над/под прага." Show „индикативно, не е официално" disclaimer. If `lastYearCutoff` is null, omit the comparison.
- [ ] **Step 2:** Keyboard operable, labels tied to inputs, visible focus, amber highlight for "над прага" (not red). Reduced-motion safe (no animation in this phase).
- [ ] **Step 3:** Build + check + manual a11y pass (tab order, screen-reader announce). **Commit.**

### Task 3.4: Прием page assembly

**Files:** Modify `src/pages/priem.astro`

- [ ] **Step 1:** Replace the single pending card with the funnel: „Защо МГ" proof strip (pull medals/results stats from `achievements.ts` once Phase 5 lands — until then a `PendingChip` placeholder), profiles-as-choice list (links to `/obuchenie` for curricula), **the calculator**, key-dates timeline (reuse `Timeline`), necessary documents (reuse `DocumentList` with a `priem` category), and an outbound block linking to МОН/РУО for the actual application. Persistent „Запитване" CTA.
- [ ] **Step 2:** Build + check + staging review. **Commit.**

**Phase 3 acceptance:** calculator computes correctly (tests green), is accessible, and Прием reads as a funnel that hands off to МОН/РУО. Coefficients/cutoffs flagged PENDING (honest placeholders where data is missing).

---

## Phase 4 — „Преподаватели" directory & „Училището" hub (task-level)

- **`src/data/staff.ts`** — array of `{ name?, role, department, subjects[], email?, consultationHours?, photo?, bio? }`; all optional except role/department so it renders before names arrive (PendingChip per empty card).
- **`StaffCard.astro`** + **`/uchilishteto/prepodavateli.astro`** — filter by department; plain photos (no duotone); click-to-email; consultation hours.
- **`/uchilishteto` hub index** + move За-нас content under it; add ръководство bios + „думата на директора"; Обществен съвет / настоятелство sections.
- **Acceptance:** directory renders with messy/missing data gracefully; long Cyrillic names don't break cards; reused by template.

## Phase 5 — „Постижения" (results, medals, реализация) (task-level)

- **`src/data/achievements.ts`** — olympiad medals, ДЗИ/НВО results by year, реализация на завършилите (universities/%), notable alumni.
- **`PlotChart.astro`** — *static* accessible SVG bar/line with an adjacent data `<table>` (the coordinate-plane device's non-animated tier); reduced-motion safe.
- **`/postizhenia/*`** pages; feed the Прием „Защо МГ" strip from this data.
- **Acceptance:** charts have table equivalents; degrade to a clean stat list with <2 data points.

## Phase 6 — „Живот в училище", Обучение reorg, Контакти cleanup (task-level)

- **Живот:** events calendar (`events.ts` + month list), clubs (`clubs.ts` — the 21 занимания по интереси as real cards), ученически съвет, **gallery wired to real photos**, news (already a collection) + student projects.
- **Обучение:** keep profiles + the `DocumentList` sub-sections (already built); add форми-на-обучение as real text (the school's 4 forms), занимания по интереси list.
- **Контакти:** strip to pure reach-us (map, phones, email, hours, transport, contact form); move сигнал/ЗДОИ out (Phase 7). Standardize on ONE map approach (pick Google embed or OSM, apply both home + contacts).
- **Acceptance:** gallery shows real images with lazy-load + alt; one consistent map; Контакти is not a junk-drawer.

## Phase 7 — Compliance, institutional info, forms, search (task-level)

- **Pages under `/uchilishteto/`:** профил на купувача, ЗДОИ (how-to + responsible person + register), бюджет (reuse DocumentList), антикорупция/сигнали (+ `/signali` form), Обществен съвет (състав/протоколи), свободни места, график консултации.
- **GDPR real pages:** политика за поверителност + политика за бисквитки (footer + cookie banner point here); add a minimal cookie-consent banner; accessibility statement page.
- **Forms:** contact, запитване (admissions), сигнал, отсъствие — via a no-backend mailer (Cloudflare Pages Function or Formspree-style); spam honeypot; success/error states; `aria-live`.
- **Search:** static client-side index (Pagefind — integrates with Astro builds) over pages + news + documents.
- **Acceptance:** every compliance obligation has a real, dated home; forms send + validate; search returns results; footer ГДПР anchors resolve.

## Phase 8 — Enhancement tier (task-level, optional)

- Animated **self-drawing coordinate curve** (hero + calculator dot-crossing), gated on ≥6 clean data points + `prefers-reduced-motion`.
- **Reversible duotone** CSS filter on editorial/hero images only (staff stay plain); focal-point + min-resolution guard.
- The **Гео-Милев masthead / history-as-function** signature slot (instance content).
- (If D1 chosen) finalize the Spectral/Golos/Martian typography across the site.
- **Acceptance:** all enhancements degrade to the Phase-3/5 accessible defaults with no school-specific data and respect reduced-motion.

## Phase 9 — Platform extraction to the template (task-level)

- Lift `theme.css` + `theme.ts` + `contrast.ts` (+ the component library) into
  `new-repo-template` as the **shared system**; document the per-school token
  workflow; wire the **contrast validator into CI** (fail build on unsafe
  accent-vs-paper). Curated Cyrillic-font allowlist. Promote ADR-0001/0002/0003
  to the template. Confirm a fresh school can re-skin by editing `theme.css`
  alone.
- **Acceptance:** a second school stood up from the template gets a distinct,
  contrast-validated theme without touching component code.

---

## Self-review notes

- **Spec coverage:** every DESIGN-VISION MUST/SHOULD maps to a phase (calculator
  P3, staff P4, achievements/реализация P5, life/gallery P6, compliance/forms/
  search P7, platform P9). Color change intentionally omitted (D0).
- **Open items the school must supply (tracked, not blocking):** bal coefficients
  + last-year cutoffs (P3), staff roster + photos (P4), achievements data (P5),
  real gallery photos (P6), confirmed Школо and РУО URLs (P2/P3), the documents
  themselves (DMS, separate track).
- **No silent caps:** where school data is missing, pages render honest
  `PendingChip` empty states rather than fabricated content.
