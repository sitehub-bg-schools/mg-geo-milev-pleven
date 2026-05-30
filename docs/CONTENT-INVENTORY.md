# Content inventory — mg-geo-milev-pleven

**Purpose:** a written snapshot of what each page currently contains, for a
designer to review before we continue the page-by-page build. It records
section order, where each piece of content comes from, what is real vs.
placeholder, and what is still missing (and from whom).

**Live staging:** https://mg-geo-milev-pleven.pages.dev/ (all routes below hang
off this origin). Production: https://mg-geo-milev-pleven.sitehub.bg/.

**Reference site we are copying:** https://www.pleven-mg.com/

**Date:** 2026-05-30

## Legend

| Mark | Meaning |
|---|---|
| ✅ **Built** | Real content in place; faithful to the reference (minor placeholders noted) |
| 🟡 **Functional** | Works and has some real content, but thin vs. the reference |
| ⏳ **Placeholder** | Layout/skeleton only; waiting on real content from the school |

Content sources referenced below:
- `src/data/school.ts` — identity, contact, transport, history, specializations, about/feature copy
- `src/data/news.ts` — the news feed
- `src/data/announcements.ts` — the home "Актуално" cards
- `src/config/externalLinks.ts` — footer external links (with a `verified` flag)
- *inline* — content written directly in the page (not yet in a data file)

---

## Shared chrome (every page)

**Header** (`components/Header.astro`) — sticky, translucent. Logo „МГ" tile +
short name. Desktop nav + mobile `<details>` menu (Esc/focus handled).
Nav order: Начало · За нас · Новини · Обучение · Документи · Прием · СТЕМ ·
Галерия · Контакти. Active-state styling per route.
- *Gap vs reference:* their nav has dropdowns (Обучение → 8 sub-items; Новини →
  Олимпиади) and two extra items we don't have — **МГ Форум** and a separate
  **Олимпиади** section. Decide whether to add dropdowns/those sections.

**Footer** (`components/Footer.astro`) — 4 columns: school identity · Контакти
(phones, email, hours, all from `school.ts`) · Институционално (ГДПР, Етичен
кодекс, Профил на купувача — anchor links into /dokumenti) · Полезни връзки
(external; verified links render as `<a>`, unverified show „(линк предстои)").
- *Pending:* 3 external links unverified (РУО-Плевен, НАОА, Електронни учебници)
  — need the school to confirm canonical URLs. The footer's institutional anchors
  (`#gdpr`, `#etichen-kodeks`) point into /dokumenti sections that don't exist yet.

**Brand:** blue (`brand`) + amber (`accent`); fonts Manrope (display) + Inter
(body); Bulgarian throughout. Tokens in `tailwind.config.mjs`.

---

## Pages

### 1. Начало `/` — ✅ Built (rebuilt 2026-05-30)

Faithful copy of the reference home page. Sections, top → bottom:
1. **Hero** — slogan headline („Започнете своето пътуване…"), school identity in
   eyebrow, Horace quote + secondary tagline, 2 CTAs, ГМ monogram SVG, floating
   stat badges (60+/756+/4). *Source:* `school.ts`.
2. **Актуално** — 3 announcement cards: родителска среща · 7 лауреати по физика ·
   Drone Fest (5 юни, verbatim text). *Source:* `announcements.ts`.
3. **„Защо да избереш нас?"** band — motto „ТВОЯТ СТАРТ КЪМ ВЪРХОВЕТЕ!" + link to
   /za-nas. *Source:* `school.ts`.
4. **Профили** — 4 specialization cards + link to /obuchenie. *Source:* `school.ts`.
5. **Features** — 60+ specialists / 756+ students with verbatim blurbs. *Source:* `school.ts`.
6. **Новини** — latest 3 from the feed. *Source:* `news.ts`.
7. **Контакти + карта** — full contact details + embedded Google Map + transport. *Source:* `school.ts`.
8. **За нас / история** — intro + timeline (1957/1971-72/1981-82) + closing tagline. *Source:* `school.ts`.

- **Placeholders:** announcement cards for родителска среща & olympiad have **no
  outbound link** (we lack the PDF / official URL).
- **For designer:** hero now leads with the slogan (school name demoted to
  eyebrow) — confirm that hierarchy. Map is a generic Google embed, not the
  reference's custom building/bus-stop map.

### 2. За нас `/za-nas` — ✅ Built (rebuilt 2026-05-30)

Faithful copy of `pleven-mg.com/about-us`. Sections:
1. **Hero** (`PageHero`) — „За нас / Кои сме ние", lede = mission text.
2. **Кратка история** — `Timeline` component + brand callout („Избери
   образование с бъдеще…").
3. **Училищни психолози** — 2 cards (индивидуална работа с учениците · подкрепа
   на учителите), verbatim bullets. *Source:* inline.
4. **Педагогически състав 2025/2026** — pending note + a "link slot" for the
   roster document. *Source:* inline.
5. **Поздравителни адреси (24 май)** — 2 placeholder cards (Клет България,
   ТУ-Варна) with „PDF — очаквайте" chips. *Source:* inline.

- **Needs from school:** the staff-roster document; the two 24 май greeting PDFs.
- **For designer:** the reference About page is a grab-bag (it also embeds a
  staff image); we kept ours evergreen. No leadership/staff *grid* yet (the old
  placeholder grid was removed) — decide if a real staff grid is wanted once
  names exist.

### 3. Новини `/novini` — ✅ Built (rebuilt 2026-05-30)

- **Hero** + responsive card grid, sorted (upcoming events pinned, then news
  newest-first), each card links to its own article page.
- **Content model:** **Astro content collection** — one Markdown file per
  article under `src/content/news/` (`content.config.ts`). Chosen over a TS
  array because news is ongoing, text-only content editable file-by-file through
  the staging→publish flow (no separate system needed; unlike binary docs/DMS).
- **Article pages:** `/novini/<slug>` (`src/pages/novini/[slug].astro`) render
  the Markdown body. Shared `NewsCard` component used by the listing and the home
  teaser.
- **Currently carried:** the 6 most-recent real articles from the reference
  (24 май · Неофит Рилски · Milev's Multilingual Masters · Майски концерт · Лека
  атлетика 3-то място · Шахмат шампиони), with full verbatim bodies.
- **Архив на новините** — pending empty-state card; the reference has ~90
  articles across 15 pages — older posts are carried over gradually (or via the
  edit flow), not bulk-migrated.
- **For designer:** decide if categories/filters, pagination, and per-article
  images are wanted once the feed grows.

### 4. Обучение `/obuchenie` — ⏳ Placeholder (partial real)

- **Hero** + **Профили** list (real, from `school.ts`).
- **Седмично разписание** — a 5×7 schedule **skeleton** (grey bars), desktop grid
  + mobile stacked cards, labelled „предстои публикуване".
- **Reference reality:** Обучение is ~8 sub-pages, and almost all are
  documents/images/lists (see the manifest's "Обучение" section): Графици,
  УУП (учебни планове), За зрелостниците (ДЗИ), Форми на обучение (a JPG!),
  Занимания по интереси (21-club list), Свободни места, Учебници. Only the
  **профили** are rich text — and we already have those.
- **Decision needed:** these sub-pages are **DMS material** (managed files) +
  two **structured lists** (clubs, curricula) that should be data-driven, not
  bespoke pages. See "Documents: separate DMS" below.

### 5. Документи `/dokumenti` — ⏳ Placeholder (stays placeholder by decision)

- **Hero** + 5 category cards, each with a `PendingChip`: Правилници · Учебни
  планове · Бюджет · Профил на купувача · Други. *Source:* inline (anchors only).
- **Decision (2026-05-30): documents go in a separate document management
  system (DMS), self-hosted — not hardcoded per page.** The reference site has
  ~45 budget PDFs plus procurement and parents/COVID docs; hand-coding those
  into pages is the wrong approach. Until the DMS exists, this page and the
  budget/procurement sections remain honest placeholders. Harvested source URLs
  for the eventual migration are recorded in `document-migration-manifest.md`.
- **Needs (DMS):** an admin-managed catalog (category, title, date, file) that
  the FE renders. Footer links to `#gdpr` / `#etichen-kodeks` anchors that need
  real entries once the DMS is in place.
- **For designer:** decide list vs. card layout and per-doc metadata (date,
  type, size) for the eventual DMS-driven list.

### 6. Прием `/priem` — ⏳ Placeholder (honest empty state)

- **Hero** + a single „Прием 2026/2027 г." card with `PendingChip`, stating
  паралелки/балообразуващи предмети will be published after Педагогически съвет /
  МОН confirmation. (Deliberately *not* a fake skeleton table — prior designer
  note.)
- **Needs from school:** approved паралелки + counts, балообразуващи предмети,
  МОН график dates, required documents, application steps.

### 7. СТЕМ `/stem` — ⏳ Placeholder

- **Hero** + 3 skeleton cards (Лаборатории · Проекти · Партньорства) with grey
  bullet bars + `PendingChip`.
- **Needs from school:** STEM centre description, labs, current projects, clubs,
  university/company partnerships, photos.

### 8. Галерия `/galeriya` — ⏳ Placeholder

- **Hero** + a 12-tile grid of empty photo placeholders (camera icon, gradient).
- **Needs from school:** the actual photos/albums; decide album grouping.
- **For designer:** lightbox/album UX, aspect-ratio policy, video support.

### 9. Контакти `/kontakti` — ✅ Built

- **Hero** + 2 columns: **Адрес** (OpenStreetMap link, approx. Сторгозия coords)
  · **Работно време** · **Транспорт** (тролеи/автобуси) on the left; **Телефони**
  (канцелария/директор/зам.-директор, click-to-call) + **Електронна поща** on the
  right. *Source:* `school.ts`.
- **Note for designer:** /kontakti uses an **OpenStreetMap link**, while the home
  page Контакти block uses an **embedded Google Map** — pick one map approach for
  consistency. No contact *form* (by design so far) — decide if one is wanted.

### 10. 404 `/404` — ✅ Built

- Centered „404 / Страницата не е намерена" + 2 actions (Начало, Контакти).

---

## Cross-cutting: what we still need from the school

1. **Прием 2026/2027** — паралелки, балообразуващи предмети, срокове, документи.
2. **Седмично разписание** + учебни планове + извънкласни дейности (Обучение).
3. **Официални документи** (PDFs) for all 5 Документи categories, incl. ГДПР &
   Етичен кодекс (footer points at these).
4. **Педагогически състав 2025/2026** roster (За нас).
5. **24 май greeting PDFs** (Клет България, ТУ-Варна).
6. **Announcement assets** — родителска среща покана (PDF), olympiad official URL.
7. **Gallery photos / albums.**
8. **STEM** content + photos.
9. **3 external links** to verify: РУО-Плевен, НАОА, Електронни учебници (МОН).

## Documents: separate DMS (decided 2026-05-30)

Documents will be served by a **separate, self-hosted document management
system**, not coded page-by-page. This spans the platform (admin uploads &
catalogs documents; the FE renders category lists) rather than this repo alone.
Pages that are really document lists — Документи (Бюджет, Профил на купувача,
Правилници, …), Проекти, and the parents/COVID archive — stay as placeholders
until the DMS exists. Migration source data: `document-migration-manifest.md`.

New pages implied by the reference but **deferred to the DMS** (not built now):
`/proekti` (Проекти), an Обществен съвет block on /za-nas, an „Информация за
родители" archive, and the **Олимпиади** sub-section of Новини (which is largely
schedules + result protocols — DMS material; its narrative items live in the
news feed). Their content is captured in the manifest.

## Cross-cutting: decisions for the designer

- **Navigation depth** — flat (current) vs. dropdowns + extra sections (МГ Форум,
  Олимпиади) to match the reference.
- **Map approach** — Google embed (home) vs. OSM link (contacts): standardise.
- **News article pattern** — dedicated pages vs. expand-in-place; categories.
- **Hero hierarchy on the home page** — slogan-first (current) vs. name-first.
- **Empty-state voice** — we currently use honest „предстои публикуване" chips and
  skeletons rather than fake data; confirm this is the desired treatment.
