# ADR-0003: URL slug convention — Bulgarian transliteration, site-wide

Date: 2026-05-30
Status: Accepted

## Context

The site needs a consistent URL scheme. The audience is local and Bulgarian
(Pleven parents and students) and all content is in Bulgarian. The reference
Joomla site used a messy mix of English and transliterated slugs
(`/about-us`, `/budzet`, `/profil-na-kupuvaca`) — not a model to copy. The
question "should /za-nas be /about or /about-us?" surfaced the need to settle a
rule rather than decide page by page.

## Decision

Use **Bulgarian transliterated to lowercase-kebab Latin** slugs, **site-wide**:
`/za-nas`, `/obuchenie`, `/novini`, `/dokumenti`, `/priem`, `/stem`,
`/galeriya`, `/kontakti`; news articles at `/novini/<transliterated-slug>`.
**No Cyrillic in URLs.** Consistency across all routes outweighs any single
slug's wording — the choice is "whole site in Bulgarian-translit" vs "whole site
in English," and Bulgarian-translit fits the language and audience.

## Alternatives considered

- **English slugs** (`/about`, `/news`, `/documents`) — only coherent if applied
  to the *entire* site; provides no benefit for a single Bulgarian school and
  mismatches the content language. A lone `/about` among Bulgarian routes would
  be the worst option (inconsistent).
- **Cyrillic slugs** (`/за-нас`) — percent-encode into unreadable gibberish
  (`/%D0%B7%D0%B0-%D0%BD%D0%B0%D1%81`) when copied or shared.
- **Mixed, per-page choice** (the reference's approach) — inconsistent and
  unpredictable.

## Consequences

- **Positive**: consistent and predictable; familiar to the local audience;
  clean and readable when shared or pasted; matches the content language.
- **Costs accepted**: transliteration of new slugs must be chosen deliberately;
  a future pivot to English slugs would touch every route.
- **Mitigations**: if a slug ever changes, add a `public/_redirects` entry so
  existing links don't 404.

## Revisit when

- The site goes multilingual, or
- A rebrand standardises on English slugs — at which point convert all routes
  together and add redirects.
