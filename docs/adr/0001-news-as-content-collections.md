# ADR-0001: News as Astro content collections

Date: 2026-05-30
Status: Accepted

## Context

The school publishes an ongoing news feed — the reference site had ~90 articles
across 15 paginated pages, each with its own detail page. News is **text
content** that staff (or AI, per the product vision) will keep adding and
editing. We needed a content model for it.

This decision sits opposite [ADR-0002](0002-documents-generic-pattern-and-dms.md):
binary **documents** go to a separate DMS; **news is text**, so it can live in
the repository and ride the existing `staging → main` publish flow.

## Decision

Model news as an **Astro content collection**: one Markdown file per article
under `src/content/news/`, validated by a schema in `src/content.config.ts`
(title, date, excerpt, optional category, `kind`). The file name is the URL
slug. The listing renders at `/novini`; each article renders at `/novini/<slug>`
via `src/pages/novini/[slug].astro`. A shared `NewsCard` component is used by
both the `/novini` feed and the home-page teaser. Editing or adding an article
is editing a Markdown file — published through the normal staging→production
flow, no separate system.

## Alternatives considered

- **Hardcoded TypeScript array** (the previous `news.ts`) — doesn't scale past a
  handful of items, and authoring multi-paragraph Bulgarian prose inside TS
  string literals is awkward and error-prone.
- **A DMS / headless CMS for news** — overkill for text that is naturally
  diffable and editable in git; adds infrastructure and an editing surface we
  don't need when the publish flow already exists. (Binary documents are
  different — they genuinely need the DMS.)

## Consequences

- **Positive**: git-native and diffable; teacher/AI-editable through the
  existing publish flow; typed/validated frontmatter; real per-article pages;
  fully static (SSG) output; `news.ts` reduced to small sort/format helpers.
- **Costs accepted**: no graphical authoring UI — editing is file-based for now;
  the reference's large archive is migrated gradually rather than in bulk.
- **Mitigations**: the staging→publish flow gives a safe preview before
  production; the schema catches malformed frontmatter at build time.

## Revisit when

- Non-technical editors need a graphical authoring experience (a CMS layer over
  the collection), or
- Article volume needs server-side search/pagination beyond what a static build
  serves comfortably.
