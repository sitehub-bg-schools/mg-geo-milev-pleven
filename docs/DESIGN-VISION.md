# Design Vision — МГ „Гео Милев", Плевен (and the sitehub school template)

> Purpose: define what *the real deal* looks like — not a copy of the old
> teacher-built Joomla site, but the site a 1957 mathematical gymnasium that
> produces national olympiad winners actually deserves. Drives the rebuild and,
> by extension, the sitehub school template.
>
> Process: 5 feature-brainstorm passes → consolidated catalog + IA → 3 rounds of
> independent design review (logged at the bottom). This is v1 (pre-review).

---

## Who this serves (personas drive everything)

1. **Прием-seeker** — a 7th-grader + parent deciding where to apply. The
   highest-stakes, most time-sensitive visitor. Wants: programs, **will-I-get-in
   (балообразуване)**, dates, proof it's worth it (results, alumni).
2. **Current parent** — wants schedules, announcements, documents, contacts,
   "is school closed tomorrow?". Returning, task-oriented.
3. **Current student** — clubs, events, achievements, their own work showcased.
4. **Alumni** — pride, reconnection, giving back.
5. **Staff / the school** — must *edit it themselves* (with AI) and look good
   doing it. This is the sitehub product thesis.

---

## Pass 1 — Core informational (table stakes, done right)

The stuff every school site needs; the old site has most of it but buried.

- Home, About (mission/history/structure), Academics (profiles, curricula,
  schedules, forms, textbooks), Admissions, News & events, Documents, Gallery,
  Contacts, STEM, Achievements/olympiads.
- **Upgrade over the old site:** text instead of JPG-of-a-schedule; one coherent
  document system; consistent URLs; mobile-first.

## Pass 2 — Community & people (where the old site is silent)

People are a school's actual product. The old site shows almost none.

- **Преподаватели** — full staff directory: photo, subject(s), department,
  short bio/qualifications, email, consultation hours. Filter by department.
- **Ръководство** — director + deputies with real bios and a word from the
  director.
- **Възпитаници (Alumni)** — notable alumni, "where are they now," success
  stories, an alumni register/association, reunions, give-back.
- **Ученически живот** — clubs (the 21 занимания по интереси as real cards),
  **Ученически съвет**, sports teams, student-run initiatives.
- **Родители** — Обществен съвет, Училищно настоятелство, psychologist support,
  parent guides.
- **Voices** — short testimonials from students, parents, teachers, alumni.

## Pass 3 — Operations, platform & self-service (the sitehub thesis)

What makes this a *platform*, not a brochure.

- **Self-editing** — staff/AI edit content → staging → one-click Publish (the
  contract already designed). News = markdown (done); documents = DMS.
- **Announcement bar** — urgent, audience-aware (school closed, schedule change,
  exam dates). Dismissible, dated.
- **Subscribe & notify** — email/RSS for news; push later. "Get admissions
  updates."
- **Site search** across pages, news, documents.
- **Forms** — contact, admissions inquiry, **подаване на сигнал** (legally
  expected for schools), absence notice, feedback. Spam-protected, emailed.
- **Required-public-institution bits** — accessibility statement + a11y widget
  (text size/contrast), GDPR/cookie consent, declared open data.
- **Integrations** — link to Школо/e-diary (e-дневник), event calendar
  (Google/ICS), YouTube for streamed events.

## Pass 4 — Reputation & the admissions funnel (conversion)

Turn the prestige they earn into applications.

- **Резултати & класации** — matura/НВО results, university admissions,
  **olympiad medal counts**, year-over-year, as real data viz (not a JPG).
- **Балообразуване calculator** — enter your marks → instant score per profile +
  "last year's cutoff." The single highest-value interactive feature; nobody
  else in BG schools does it well.
- **Admissions journey** — program explorer → criteria → key-dates timeline →
  apply/inquiry → **Ден на отворените врати** / virtual tour.
- **Why us** — outcomes, unique programs, partners (universities, companies),
  badges (STEM center, Erasmus).
- **SEO** — `EducationalOrganization` structured data, local SEO, sitemap,
  blog content, OG cards per page.
- **Prospectus** — a downloadable, beautiful PDF generated from the same data.

## Pass 5 — Differentiators & future (beat every BG school site)

The unforgettable layer.

- **Interactive school-history timeline** 1957 → today (the Гео Милев heritage).
- **Student work showcase** — STEM/Drone Fest projects, portfolios, a
  mini-gallery of real student output (math, code, science, art).
- **Live dashboards** — medals, results, "our alumni study at…" map.
- **AI assistant** — "Питай за приема" chatbot grounded in the school's own docs.
- **Personalized hero** — audience switch (Кандидат / Родител / Ученик / Възпитаник)
  re-frames the homepage CTA.
- **Multilingual** — BG primary, EN for Erasmus/international.
- **PWA** — installable, fast, offline-tolerant; newsletter automation.
- **Alumni network** — register, directory, mentorship pairing (long-term).
- **Platform leverage** — everything above is themeable per school: this becomes
  the sitehub template's design system, not a one-off.

---

## Consolidated feature catalog (prioritized)

**MUST (defines "the real deal", and serves the weekly task):**
Admissions funnel + **балообразуване калкулатор** (with last-year cutoffs) ·
**Реализация на завършилите** + результати ДЗИ/НВО/прием (trust proof, surfaced
*inside* Прием) · **Преподаватели** directory (first-class) · **Announcement bar**
+ a sub-2-minute schedule/announcement edit flow · Real schedules/curricula as
text · Site search · Forms (contact, **подай сигнал**, запитване, отсъствие) ·
DMS-backed documents · **Институционална информация** (профил на купувача, ЗДОИ,
бюджет, антикорупция/сигнали) with real homes · WCAG-correct markup + GDPR pages
(политика за поверителност/бисквитки) · Школо/е-дневник login link · Gallery
(real photos).

**SHOULD:** Възпитаници (alumni) + реализация stories · Student life (clubs,
ученически съвет, **ученически проекти**) · Ръководство bios + думата на директора ·
Events calendar · Консолидиран график консултации/приемно време · Subscribe/RSS ·
Ден на отворените врати · Обществен съвет transparency (състав, протоколи) ·
Testimonials.

**COULD:** Interactive history timeline · Live results dashboard (reuses
Постижения data) · Prospectus (from the same data) · EN locale.

**FUTURE / platform (gated — only when the underlying data is already
maintained):** AI admissions assistant (needs a versioned doc corpus) ·
Personalized audience hero · PWA · Newsletter automation · Школо deep
integration. *(Cut: alumni mentorship-pairing — that's a different product.)*

> Re-tiering note (review R1): SEO/structured data is a build-time checklist, not
> a roadmap headline; an a11y *widget* (text-size/contrast toggle) is dropped in
> favour of correct semantic markup + contrast, which does the real work.

---

## Proposed information architecture (fixes the old site's nav sprawl)

Old site: ~10 top-level items + deep dropdowns + МГ Форум. Too much. Group into
**6 primary destinations** by intent, with rich hubs:

| Primary nav | Hub contains | Owns (source of truth) |
|---|---|---|
| **Училището** | **Преподаватели** (promoted — first item + utility shortcut), ръководство + думата на директора, За нас, история (timeline), мисия, структура, Обществен съвет & настоятелство, психолози, **Институционална информация** (документи, профил на купувача, ЗДОИ, бюджет, антикорупция/сигнали, ГДПР) | institutional identity & legal/transparency |
| **Обучение** | профили (curricula/depth), графици, учебни планове, форми на обучение, учебници, СТЕМ, занимания по интереси | profile **curricula** |
| **Прием** | profile-as-a-**choice**, **калкулатор за бал** + миналогодишни прагове, критерии, важни дати, необходими документи, **препратка към МОН/РУО за подаване**, отворени врати, + a „Защо МГ" proof strip pulling medals/results | the **funnel** |
| **Постижения** | олимпиади & медали, результати (матура/НВО), **реализация на завършилите** (университети, %), notable възпитаници | outward-facing **proof** |
| **Живот в училище** | новини, събития (календар), галерия, ученически съвет, клубове, **ученически проекти**, гласове | inward **community** |
| **Контакти** | карта, телефони, имейл, форма, работно време, транспорт (pure reach-us) | how to reach us |

Utility bar (always): **Търсене · Език (BG/EN) · Абонамент · Школо/е-дневник ·
Подай сигнал**. Audience-aware **announcement bar** pinned on top when active.

**Cross-hub rules (from review R1):**
- **One source of truth per fact.** „Обучение" owns *profile curricula*; „Прием"
  owns *profile-as-a-choice* (what you apply to, cutoff, bal) — it links to,
  never duplicates, the curriculum.
- **The funnel is unbroken.** „Прием" embeds a „Защо МГ" proof strip (medals,
  ДЗИ/НВО, реализация) at the top and a persistent „Запитване / Кандидатствай"
  CTA, so *will-I-get-in* and *is-it-worth-it* live in one flow. It must hand off
  cleanly to the МОН/РУО system where the actual application happens — never
  dead-end.
- **Postижения vs Живот by audience:** Постижения = outward proof for applicants
  (only award-winning outcomes); Живот = inward community for current
  students/parents (clubs, съвет, news, **student projects**).
- **Сигнал / ЗДОИ** are regulated obligations, not contact methods — homed in
  Училището › Институционална информация, surfaced in the utility bar + footer.

This collapses ~25 reference pages into 6 navigable hubs — every page from the
old site still has a home, but nobody drowns in the menu.

## Compliance & institutional obligations (BG public school)

Non-negotiable for a state school; the old site scatters or omits these. Each
needs a *real, dated home* (mostly under Училището › Институционална информация),
not just a footer anchor:

- **Профил на купувача / обществени поръчки** — real page (legacy + ЦАИС ЕОП pointer).
- **Достъп до обществена информация (ЗДОИ)** — how to file, responsible person,
  register of decisions. *(Currently missing entirely.)*
- **Бюджет и финансови отчети** — recurring quarterly/annual, dated.
- **Антикорупция / сигнали по ЗЗЛПСПОИ** — the channel, responsible officer,
  protections (not just the „подай сигнал" button).
- **Обществен съвет** — състав, протоколи, решения (transparency).
- **ГДПР** — политика за поверителност + политика за бисквитки as real linkable
  pages (footer + cookie banner point here; the current ГДПР anchor is broken).
- **Свободни места / преместване** — published mid-year obligation.
- **График консултации / приемно време** — consolidated parent-facing view.

---

## Aesthetic direction v2 — "Proof & Поезия" (rigor as expression)

The old direction ("mathematical editorial") told only half the school's truth —
the math — and treated *named after a poet* as a footnote. But Гео Милев was an
**Expressionist and a typographic radical**: his 1920s journals *Везни* and
*Пламък* are landmarks of Bulgarian avant-garde print (aggressive type, broken
grids, ink slabs, the poem „Септември" set as visual rhythm). He lost an eye in
WWI and was killed by the state at 30. That name has *edge*.

**The concept:** the collision of two precisions — the cold exactness of
**mathematics** (axis, proof, plotted curve) against the hot exactness of
**avant-garde poetry-typography** (rhythm, the deliberate rule-break, ink as
gesture). A school where rigour and expression are one discipline.
**Cold grid, hot type.** This is true of *this* school and no other — a
competitor can't copy it without the heritage.

### Typography (Cyrillic-verified — hard constraint)

Three faces, each encoding a role in the concept — poetry, speech, computation:

- **Display — Spectral** (Production Type). Full, screen-drawn, low-contrast
  **Cyrillic**; literary at large sizes without Cormorant's fragile hairlines.
  Headlines in Spectral Extra/SemiBold, big and tight. *(Cormorant rejected — weak
  Cyrillic, hairlines vanish on screen.)*
- **Computation — Martian Mono** (Evil Martian). A monospace with real Cyrillic;
  used **only for things that compute** — the калкулатор, medal counts, cutoff
  thresholds, axis labels, dates. Mathematics expressed *as type*, no clipart.
- **Body — Golos Text** (Cyrillic-native grotesque; Onest interchangeable).
  Quiet, 16–18px, disappears behind Spectral.

One avant-garde hit, used once: set „Гео Милев" as a heavy condensed lockup on
the history page only — homage to his journal mastheads. Don't spread it.
**Inter is retired** from every visible role.

### Color — "Ink & Spectrum"

> **DECISION (2026-05-30): keep the current scheme.** The school chose to retain
> the existing **brand blue + amber accent** (and white/slate backgrounds) rather
> than adopt "Ink & Spectrum." The proposal below is kept for the record only;
> the implementation plan (`docs/superpowers/plans/2026-05-30-site-evolution.md`)
> uses the current palette. Everything else in this aesthetic direction
> (typography, the coordinate-plane device, photography, anti-slop guardrails)
> still applies; the calculator/medal "highlight" states use **amber** instead of
> flame-red.

Blue+gold is the most common institutional palette on earth; it reads generic no
matter how confidently deployed. Instead:

- **Ink, not navy** — a near-black blue-black (`#0D1B2A`–`#10182A`), the colour
  of fountain-pen ink, not "tech-startup blue."
- **Paper, not white** — warm bone (`#F4F1EA`) backgrounds. Editorial and warmer
  instantly; kills the cold-template feel.
- **Flame-red accent** (`~#E63417`) — vermilion/cinnabar. Not arbitrary: it's the
  printer's red of avant-garde manifestos and the literal colour of Гео Милев's
  journal **„Пламък" (Flame)**. Reserve it ruthlessly (<5% of any screen): CTAs,
  the calculator's live "computing" state, medal counts.
- Result: **ink-black + paper-bone + flame-red** — serious, literary, ownable,
  and a reviewer would never guess the red's source. *(Alt kept on file: keep a
  blue base but swap gold for electric blueprint-cyan — colder "physics lab" feel.)*

### Signature device — „живата координатна система" (the one unforgettable thing)

A grid is atmosphere, not a memory (and ambient graph-paper is now near-slop). The
device is a **coordinate plane that does something**, recurring as a system:

- **Homepage hero = one coordinate plane.** X = years (1957 → 2026), Y = an
  outcome (olympiad medals / scores). On load a **curve of real data draws
  itself** left-to-right (the orchestrated reveal); inflection points are labelled
  dots in Martian Mono ("1971 — пръв национален медал", "2019 — STEM център").
  It *is* the history, the proof, and the math motif fused into one object: the
  school's story as a function that goes up.
- **Section dividers** = axis rules with tick marks, not plain lines.
- **The калкулатор lives on the same plane** — your marks plot your point against
  last year's **cutoff line**; clearing it animates your dot crossing the axis in
  flame-red. *That's the screenshot:* a kid sees their own point above the
  admission curve.
- **Results/medals pages** reuse the plane as real data-viz.

One coordinate system, four jobs (hero · history · calculator · results) — the
concept made interactive, not decoration beside content. The concentric-ring ГМ
monogram demotes to a quiet favicon/footer mark; the plane is the new face.

### Photography & illustration

- **Documentary B&W, optionally duotone in ink** — high-contrast real photos of
  real students/teachers/olympiad moments, candid not posed. B&W gives editorial
  gravitas, unifies wildly inconsistent school-supplied photos into one system,
  and lets flame-red be the *only* colour on the page.
- **Warmth = faces at full-bleed scale**, not coloured rounded-corner cards. A
  large duotone portrait of a teacher mid-explanation is warmer *and* more
  prestigious than an icon grid.
- **Illustration = construction, never decoration** — compass-and-straightedge
  geometry, a hand-plotted parabola, typographic marks; line-only, ink-on-paper,
  "artifacts the school could have made." No icon-packs, no education-vectors.
- **Texture:** subtle paper grain on the bone background (print/poetry heritage);
  graph-paper *only* behind computing surfaces, never global wallpaper.

Coexistence rule: **math = structure/line/type (cold ink). Humanity = photography
(warm faces). Red = the one spark.** Three registers, never muddied.

### Anti-slop guardrails (enforced)

Kill on sight: ambient graph-paper/dot-grid wallpaper · blue+gold + soft-shadow
rounded **card grids** (the #1 AI/template tell — use editorial asymmetry, rules,
varied columns instead) · Inter anywhere visible · Space Grotesk (the "tasteful
AI" default) · count-up on *every* number (one choreographed reveal, then
stillness) · centered hero + gradient + three feature cards · glassmorphism /
gradient mesh / blobs / 3D abstract renders · emoji or icon-font icons in
headings. This school's language is **ink, paper, line, axis, proof.**

---

## Template vs instance — the platform mechanism

"Proof & Поезия" is gorgeous but *maximally instance-specific* (the red is from
*Пламък*, the type honours Гео Милев's mastheads). For ~5000 future schools that
is a liability unless we name the boundary. Three layers:

1. **Shared design SYSTEM (one codebase, everyone inherits):** the 6-hub IA, the
   component library (announcement bar, staff directory, news, document/DMS,
   калкулатор, forms, gallery), accessibility behaviours, the **coordinate-plane
   component (data-driven + fallbacks)**, motion rules, the type *scale* and
   spacing. Nobody edits this per school. This is where resilience lives.
2. **Per-school THEME tokens (data, not code):** extend the `school.ts` seam into
   a small `theme.ts` — `--ink`, `--paper`, `--accent` (+ auto-derived accessible
   variants), fonts **from a curated, Cyrillic-verified allowlist** (not arbitrary
   Google Fonts), logo/monogram, photo-treatment on/off. **CI validates the accent
   against paper for contrast and rejects/auto-corrects unsafe combos** — this is
   how a school can be "blue+gold" without being slop *or* inaccessible.
3. **Per-school SIGNATURE slots (bespoke, optional, capped):** the Гео-Милев
   masthead lockup, history-as-a-function copy — МГ Гео Милев's *content*, in one
   or two named slots the template exposes, **not** inherited.

**Stated plainly:** "Proof & Поезия" is МГ Гео Милев's **showcase configuration
of the template**, not the template. The template ships a *neutral-but-excellent
default*; this school is dressed up in the named slots. The test for every
signature element: *does it degrade to a good neutral default with no
school-specific data?* (The coordinate hero — fixed below — passes. The masthead
does not, so it stays instance content. Correct.)

## Resilience — enhancement tiers over an accessible default

Every signature element must ship **accessible and fast first, dressed second.**

- **Coordinate-plane hero** is a data-driven component with fallback tiers, never
  bespoke per-school SVG: **≥6 clean dated points** → animated self-drawing curve;
  **2–5** → static plotted line, no animation; **0–1** → degrades to a typographic
  hero (Spectral headline + one Martian-Mono stat), axis motif surviving only in
  the divider ticks. The page is correct with the curve as pure enhancement.
- **Flame-red is a UI *state*, never an ink you type in** — exposed only as
  `--accent` bound to component roles (CTA bg, calculator "computing" state, the
  one medal number). Not available as a text/heading colour in any AI-editable
  surface.
- **Duotone is a reversible CSS filter, never baked into assets**, applied to
  editorial/hero images only. **Staff photos default to plain** (duotone of real
  faces — incl. darker skin tones — has dignity/representation risk; always allow
  opt-out). Image component requires a focal point with a safe centre default; a
  staging min-resolution warning catches muddy phone photos.
- **Calculator** computes a **plain accessible text result first** ("Your score X,
  last year's cutoff Y, you're above/below"), gated on cutoff data existing, with
  an "indicative, not official" disclaimer; the plotted-dot animation layers on
  top. A wrong cutoff is worse than no calculator.
- **Fonts:** self-host, **subset to Cyrillic + Latin + numerals**, `font-display:
  swap`, preload only the above-the-fold display weight; cap at 2 display + 1 body
  + 1 mono. Martian Mono constrained to numeric/label slots. Headlines use fluid
  `clamp()` tested at 2–3× length (Cyrillic runs long).
- **Performance budget:** LCP < 2.5 s on throttled mid-range Android; hero
  non-blocking; imagery lazy + sized.

## Accessibility must-fixes (public institution — legal)

- **Flame-red `#E63417` is never text on bone** (~3.5:1, fails AA). Allowed only
  as button background with bone/white text (check the *button's* contrast) or as
  a ≥24px bold number/graphic (3:1). Ink-on-bone passes easily (~15:1).
- **The coordinate hero needs a non-visual equivalent** — the data as an
  accessible table/`<dl>` or a thorough `role="img"` aria-label conveying the
  trend; decorative grid `aria-hidden`.
- **Keyboard + SR:** calculator/inputs/audience-switch all Tab-reachable with
  visible focus rings; calculator result in `aria-live="polite"`. No hover-only.
- **`prefers-reduced-motion`** → final state instantly, no curve-draw/dot-cross/
  count-up. Non-negotiable.
- **`font-display: swap`** (FOIT on 3G = blank page); verify full Bulgarian
  glyph coverage (`й ъ ь Ѝ`).
- Base body ≥16px, touch targets ≥44px, real heading hierarchy.
- Keep the **accessibility statement** as a real page (a legal declaration; the
  *widget* was rightly dropped, the statement is not optional).

## MVP & build order

Prove the *system + theme* thesis before any fireworks:

1. **Token/theme layer first** — replace the current blue/gold/Inter
   `tailwind.config` with the Layer-2 tokens wired to `theme.ts`
   (`ink #0D1B2A` / `paper #F4F1EA` / `accent #E63417`, 3 subset Cyrillic fonts)
   **+ the CI contrast validator.** Re-skin by editing one file = platform proven.
2. **Homepage + global chrome** in the new system (6-hub nav, announcement bar,
   legal footer, type scale, axis dividers). Hero ships as the **typographic
   fallback tier** — correct and fast on Android day one.
3. **Прием end-to-end** (highest-stakes persona; forces the funnel) — калкулатор
   as plain accessible result + „Защо МГ" proof strip.
4. **Преподаватели directory** — first-class, most-reused component, stress-tests
   messy photos + long Cyrillic.

Then enhancement passes: 5) animated coordinate tier behind the data contract +
reduced-motion; 6) reversible duotone on editorial images; 7) remaining hubs on
proven components; 8) the Гео-Милев masthead / history-as-function (instance
content, last).

## Implementation status

**Nothing in this vision is built yet.** The repo today is still the prior
foundation: `tailwind.config.mjs` is blue (`#2563eb`) + amber (`#eab308`) +
Inter/Manrope — i.e. the exact palette/fonts this vision retires. v1.1.0 shipped
the faithful content rebuild and the news/document architecture; this document is
the *next* phase (visual system + platform layering), sequenced above.

## Design review log

### Round 1 — Senior product/UX designer (IA, prioritization, persona fit)

**Verdict:** structure fundamentally sound (persona-led, right centerpiece,
disciplined placeholders) but was optimizing to impress reviewers over converting
applicants / serving the weekly parent.

**Applied to v2:**
- **Unified the admissions funnel** — „Прием" now embeds a „Защо МГ" proof strip
  (medals/results/реализация) + persistent CTA, owns *profile-as-a-choice*, hands
  off to МОН/РУО. „Обучение" owns curricula. One source of truth per fact.
- **Promoted Преподаватели** to first-class (the school's "actual product").
- **Split Постижения (outward proof) vs Живот (inward community)** by audience;
  student projects → Живот.
- **De-junk-drawered Контакти**; moved сигнал/ЗДОИ/legal into Училището ›
  Институционална информация (regulated obligations, not contact methods).
- **Re-tiered MUST:** added реализация на завършилите + results, announcement-bar/
  schedule *edit-in-2-min* flow, Школо login link, GDPR pages; demoted a11y
  widget (kept WCAG markup) and SEO (build checklist, not headline).
- **Added a Compliance section** (ЗДОИ, профил на купувача, бюджет, ЗЗЛПСПОИ,
  Обществен съвет transparency, свободни места, консултации) — several were
  missing entirely.
- **Gated/cut over-engineered FUTURE** (chatbot waits for versioned corpus; cut
  alumni mentorship-pairing).

### Round 2 — Art director / visual designer (aesthetic distinctiveness)

**Verdict:** brief was 70% there — "agency-deck safe." Pushed to ownable.

**Applied to v3 (aesthetic direction rewritten):**
- **Concept sharpened to „Proof & Поезия"** — promoted Гео Милев from footnote to
  co-author: his avant-garde print heritage (журналите Везни/Пламък) collides with
  mathematical precision. Cold grid, hot type.
- **Typography fixed & Cyrillic-verified:** Spectral (poetry/display) + Golos Text
  (speech/body) + Martian Mono (computation/numerals). Rejected Cormorant (weak
  Cyrillic); retired Inter; banned Space Grotesk.
- **Color moved off generic blue+gold** to **Ink + Paper + flame-red** — the red
  traced to Гео Милев's journal „Пламък" (Flame). Ownable, non-obvious.
- **Signature device:** the coordinate plane as an *interactive system* (hero
  curve / history / калкулатор / results), not graph-paper texture.
- **Photography art-directed** to documentary B&W/duotone; illustration =
  compass-and-straightedge constructions only.
- **Anti-slop guardrails** codified (no card grids, no ambient grid wallpaper, no
  count-up-everywhere, no centered-hero+3-cards).

### Round 3 — Pragmatic principal designer (feasibility, a11y, template, MVP)

**Verdict:** strong, ownable, and it mostly survives reality — *if* the validated
token/theme layer is built first and the signature pieces are enhancement tiers
over an accessible/fast default. The one unfinished thought was strategic.

**Applied to v4 (new sections added):**
- **Template vs instance mechanism** (the previously-unanswered core): 3 layers —
  shared system / per-school validated theme tokens / capped signature slots.
  "Proof & Поезия" reframed as МГ Гео Милев's *showcase config of the template*,
  not the template.
- **Resilience tiers**: coordinate hero data-contract with ≥6 / 2–5 / 0–1
  fallbacks; red = UI state only; duotone reversible + plain-by-default for
  faces; calculator = plain result first, gated on cutoff data, with disclaimer;
  font subsetting/budget; LCP < 2.5s.
- **Accessibility must-fixes**: flame-red never text-on-bone (fails AA);
  hero non-visual equivalent; keyboard + `aria-live`; `prefers-reduced-motion`;
  `font-display: swap` + glyph coverage; a11y statement kept.
- **MVP & build order**: tokens+CI-validator → chrome → Прием → Преподаватели,
  *then* enhancement passes.
- **Corrections logged**: contrast was asserted not measured (fixed); duotone-of-
  faces dignity risk (fixed); no perf budget (added); repo still on banned
  blue/gold/Inter (Implementation status section).


