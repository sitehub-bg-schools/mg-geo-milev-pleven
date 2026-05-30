# Home page — faithful copy of pleven-mg.com (our design)

Date: 2026-05-30
Status: Approved (user: "do it")

## Goal

Reproduce the **content and section structure** of the current school site
`https://www.pleven-mg.com/` home page, rendered in our existing brand
(blue/amber, Inter/Manrope, our components). Not a visual clone of their
"CampusPro" theme — same information, same order, our look.

## Section order (top → bottom)

1. **Hero** — headline is the slogan „Започнете своето пътуване, постигнете
   целите си!"; school name sits as the eyebrow; Horace quote
   („Началото е най-важният етап от всяко дело.") + secondary tagline
   („Интелектуална инвестиция в бъдещето"). Keep our gradient, ГМ monogram SVG,
   floating stat badges, and the two CTAs.
2. **„Актуално" announcement strip** — the timely cards their site leads with:
   родителска среща · седем лауреати по физика · Drone Fest (5 юни). New
   `announcements.ts` data + `AnnouncementCard` component. `href` optional
   (we don't yet have their PDF/external URLs — cards render without a dead link).
3. **„Защо да избереш нас?" band** — statement „МАТЕМАТИЧЕСКА ГИМНАЗИЯ: ТВОЯТ
   СТАРТ КЪМ ВЪРХОВЕТЕ!" + link „Педагогически състав 2025/2026" → /za-nas.
4. **Profiles** — „Разгледайте нашите профилирани паралелки" — existing 4
   `SpecializationCard`s from `school.specializations`.
5. **Features** — the 60+ specialists and 756+ students stats with their two
   descriptive blurbs (verbatim).
6. **Latest news** — 3 dated items from `news.ts` (24 май · Неофит Рилски ·
   Milev's Multilingual Masters).
7. **Campus map** — embedded Google Maps iframe of the school + transport note
   (тролейбус 31, 33 · автобус 8, 13). New `MapEmbed` component.
8. **Contact** — full block: address, office/director/deputy phones, email,
   hours — from `school.contact`.
9. **About / history** — intro paragraph + `Timeline` (1957 · 1971/72 ·
   1981/82) + closing tagline „Избери образование с бъдеще…".

Footer unchanged.

## Data changes

- `school.ts`: add `about.intro`, `about.closingTagline`, `features.teamBlurb`,
  `features.studentsBlurb`; correct `taglines.horace` and `history[].event` to
  the verbatim wording.
- `news.ts`: keep the 3 news-feed items; the physics-olympiad and drone-fest
  entries move to `announcements.ts`.
- new `announcements.ts`: parent meeting · physics laureates · Drone Fest.

## New components

- `AnnouncementCard.astro` — card for the „Актуално" strip (title, date,
  optional badge, optional `href`).
- `Timeline.astro` — vertical year/event list for the history block.
- `MapEmbed.astro` — responsive Google Maps iframe (`?output=embed`, lazy).

## Notes / known gaps

- Their interactive campus map (buildings, bus-stop pins) is replaced by a
  standard Google Maps embed of the school location — close enough; revisit if
  the school supplies a custom map asset.
- Announcement `href`s (родителска среща PDF, olympiad official page) are not
  available yet — cards omit the link until the school provides them.
- The GPS coords the page exposed were bogus; the embed geocodes the school by
  name/address instead.
