# Architecture Decision Records — mg-geo-milev-pleven

This directory holds the Architecture Decision Records (ADRs) for **this school
site**. Each file captures **one architectural decision at the time it was
made**: the context, the decision, the alternatives weighed, and the
consequences accepted.

## Scope

This repo is the **first sitehub school instance** and predates the
`new-repo-template` ADR log, so it carries its own. The ADRs here cover
decisions about **content architecture** taken while rebuilding the site as a
faithful copy of the school's previous Joomla site (pleven-mg.com):

- [0001 — News as content collections](0001-news-as-content-collections.md)
- [0002 — Documents: generic data-driven pattern + future DMS](0002-documents-generic-pattern-and-dms.md)
- [0003 — URL slug convention](0003-url-slug-convention.md)

## Relationship to the platform ADRs

Platform-wide decisions (Astro + Tailwind static site, Cloudflare Pages, GitHub
Actions CI/CD, the two-branch staging→main model, branch governance,
environment-driven `SITE_URL`, licensing) live in the **`new-repo-template`**
ADR log (`docs/adr/` there) and the **`sitehub-backend`** ADRs. They apply to
this instance too and are not duplicated here.

The decisions in this log (0001–0003) are **content-architecture patterns
invented in this instance** and are good candidates to **promote into the
template** so future schools inherit them.

## Format & conventions

We follow the **Nygard ADR** template (`0000-template.md`), one decision per
file, 4-digit zero-padded prefix.

- ADRs are **immutable**. If a decision is reversed or refined, write a new ADR
  that supersedes the old one; do not edit the original.
- Update the `Status` field on a superseded ADR to `Superseded by ADR-XXXX`.
- Keep each ADR to roughly one page.
- Write in the past tense from the moment of decision.

## Adding a new ADR

1. Copy `0000-template.md` to `NNNN-short-kebab-title.md` with the next number.
2. Fill in the sections.
3. Commit the ADR with the implementing change (or just before it).
