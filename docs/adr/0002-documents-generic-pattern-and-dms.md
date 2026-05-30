# ADR-0002: Documents — generic data-driven pattern + future DMS

Date: 2026-05-30
Status: Accepted

## Context

Most of the reference site is **document/file lists**, not rich content: the
Документи categories (правилници, бюджет — ~45 budget PDFs alone, профил на
купувача, …), the entire Обучение section (графици, УУП, ДЗИ, форми на обучение,
свободни места, учебници), Олимпиади (result protocols in xlsx/docx/pdf),
Проекти, and parents/COVID archives. That is ~20 near-identical pages whose only
real payload is a list of downloadable files.

Two needs fell out of this: (1) we must not hand-code 20 bespoke, drifting
pages; (2) the files themselves are **binary assets** that the school will
upload and update over time — they should not be committed per-page into the
repo, nor linked from the old site (which will be retired).

## Decision

Two-part decision:

1. **One generic, data-driven pattern.** Every document listing on the site
   renders from a single data file (`src/data/documents.ts` — categories, each
   with document entries) through a single component (`DocumentList.astro`).
   `/dokumenti` and the document sub-sections of `/obuchenie` both consume it.
   Adding a category is one data entry, not a new page. A `DocItem` with an
   `href` renders a download link; without one it renders an „очаквайте" chip.

2. **Files live in a separate, self-hosted DMS** (a platform feature: admin
   uploads/catalogs a document; the API serves it; the FE renders it). Until the
   DMS exists, entries are honest **pending placeholders**. Harvested source
   URLs from the old site are recorded in
   `docs/document-migration-manifest.md` for the eventual migration.

## Alternatives considered

- **A bespoke page per category** — guarantees duplication and drift across ~20
  pages; every styling or behaviour fix must be repeated.
- **Link directly to the old site's PDFs** — fast, but every link breaks the day
  pleven-mg.com is decommissioned, and the new site wouldn't own its documents.
- **Commit all PDFs into the repo now** — bloats the repo (~5–10 MB of budget
  PDFs alone) and provides no upload/update workflow for non-technical staff.

## Consequences

- **Positive**: one pattern serves all document pages; the `DocItem` shape is
  exactly what the DMS will populate, so no page rewrites when files go live;
  placeholders are honest rather than fake skeletons.
- **Costs accepted**: documents are not actually downloadable until the DMS
  exists; migration of the ~50 existing files is deferred.
- **Mitigations**: the migration manifest preserves every source URL;
  `DocItem.href` is ready to fill in; `group` keys already separate Документи
  from Обучение consumers.

## Revisit when

- The DMS is built — wire `documents.ts` (or its successor) to the DMS API and
  flip placeholders to live links; or
- A category needs richer per-document metadata (size, updated-at), search, or
  pagination at scale.
