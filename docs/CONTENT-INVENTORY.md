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

### 3. Новини `/novini` — 🟡 Functional

- **Hero** + a responsive card grid of all feed items, sorted (upcoming events
  pinned, then news newest-first). *Source:* `news.ts` (currently 4 items: 24
  май, Неофит Рилски, Milev's Multilingual Masters, Drone Fest).
- **Архив на новините** — pending empty-state card (older posts, per-news pages,
  RSS — future).
- **Gaps vs reference:** no individual article pages (cards link back to /novini);
  no Олимпиади sub-section; only a handful of items vs. their ongoing feed.
- **For designer:** decide the article-detail pattern (dedicated pages vs.
  expand-in-place) and whether categories/filters are needed.

### 4. Обучение `/obuchenie` — ⏳ Placeholder (partial real)

- **Hero** + **Профили** list (real, from `school.ts`).
- **Седмично разписание** — a 5×7 schedule **skeleton** (grey bars), desktop grid
  + mobile stacked cards, labelled „предстои публикуване".
- **Needs from school:** real timetable; учебни планове; извънкласни дейности.
- **Gap vs reference:** their Обучение has ~8 sub-pages (графици, учебни планове,
  ИКД, …) — ours is a single page. Decide IA (sub-pages vs. anchored sections).

### 5. Документи `/dokumenti` — ⏳ Placeholder

- **Hero** + 5 category cards, each with a `PendingChip`: Правилници · Учебни
  планове · Бюджет · Профил на купувача · Други. *Source:* inline (anchors only).
- **Needs from school:** the actual documents (PDFs) per category. Footer links to
  `#gdpr` / `#etichen-kodeks` anchors that need real sections/entries here.
- **For designer:** decide list vs. card layout once real docs exist; per-doc
  metadata (date, type, size).

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

## Cross-cutting: decisions for the designer

- **Navigation depth** — flat (current) vs. dropdowns + extra sections (МГ Форум,
  Олимпиади) to match the reference.
- **Map approach** — Google embed (home) vs. OSM link (contacts): standardise.
- **News article pattern** — dedicated pages vs. expand-in-place; categories.
- **Hero hierarchy on the home page** — slogan-first (current) vs. name-first.
- **Empty-state voice** — we currently use honest „предстои публикуване" chips and
  skeletons rather than fake data; confirm this is the desired treatment.
