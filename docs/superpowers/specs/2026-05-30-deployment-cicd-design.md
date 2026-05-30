# Deployment & CI/CD — `mg-geo-milev-pleven`

Date: 2026-05-30
Status: Approved (design)
Repo: `git@github.com:sitehub-bg-schools/mg-geo-milev-pleven.git`

## Goal

Deploy the school's static Astro site to **staging** and **production** under
`sitehub.bg` on **Cloudflare Pages**, driven by a **GitHub Actions** CI/CD
pipeline.

The deeper product context (drives every decision below): teachers will edit
their site's code with AI. Those edits must **auto-deploy to staging** so they
can preview them live. A **"Publish" button** in the (future) admin panel
promotes the current staging version to **production**. Therefore production
deploys must be **action-triggered**, never an automatic side effect of a code
edit.

## Scope

**In scope today**
- Both environments live over HTTPS on real `sitehub.bg` subdomains.
- Three GitHub Actions workflows (CI check, staging deploy, production deploy).
- Two Cloudflare Pages projects + custom domains + DNS, provisioned via the
  Cloudflare API/wrangler.
- Branch model (`main` / `staging`) created and pushed.
- `SITE_URL` made environment-aware; staging marked `noindex`.
- `DEPLOYMENT.md` documenting the publish-button API contract.

**Out of scope today** (documented, not built)
- The admin-panel "Publish" button UI and the backend `admin-api` endpoint that
  calls GitHub. The admin API is currently an empty stub. We define the contract
  so it can be wired later.

## Branch & promotion model

```
staging  ── AI / teacher edits land here ──►  STAGING     (auto, every push)
main     ── only updated by "publish"     ──►  PRODUCTION  (push + manual dispatch)

Publish = merge  staging → main
```

- `staging` is the working branch. Every push rebuilds and deploys the staging
  site. This is where AI commits land.
- `main` is the published state. A push to `main` deploys production.
- The remote currently has **no branches** (nothing pushed yet). Local `master`
  will be renamed to `main`; `staging` is branched from it.

### Branch governance (enforced on GitHub)

- **`main` branch protection:** a pull request is required to merge (0 approvals,
  so automation can self-merge); direct pushes are blocked; force-pushes and
  deletion are blocked; the `only-from-staging` status check is required.
- **`guard-main.yml`:** fails any PR into `main` whose source branch is not
  `staging`. This is the required check, so code can reach `main` *only* via a
  PR from `staging`.
- **`branch-governance` repository ruleset:** blocks creating any new branch and
  blocks deleting/force-pushing existing ones, so the repo stays at exactly
  `main` + `staging`. Org admins can bypass.

### Publish-button contract (future, documented now)

Because `main` requires a PR, the admin panel's Publish action is a
**PR-create-then-merge**, implemented backend-side as:

1. **Open PR:** `POST /repos/sitehub-bg-schools/mg-geo-milev-pleven/pulls`
   with `{ "base": "main", "head": "staging", "title": "Publish" }`.
   (If `staging` is already merged/identical, there's nothing to publish.)
2. **Merge PR:** `PUT /repos/.../pulls/{number}/merge` once the
   `only-from-staging` check is green (it will be, since head is `staging`).
   The merge pushes to `main`, triggering `deploy-production.yml`.
3. **Progress:** poll the resulting Actions run
   (`GET /repos/.../actions/runs`) to surface publish status in the admin UI.
- **Auth:** a GitHub App installation token or fine-grained PAT scoped to
  `contents: write` + `pull_requests: write` on the school repo. (Credential
  management is a backend concern, out of scope here.)

`deploy-production.yml` also accepts `workflow_dispatch` so production can be
triggered manually today (for the initial go-live and for testing) without a
merge.

## Hosting — Cloudflare Pages, two projects

| Env | Project name | URL | Deploys from | Custom domain / DNS |
|---|---|---|---|---|
| Staging | `mg-geo-milev-pleven` | `mg-geo-milev-pleven.pages.dev` | `staging` | none (free `.pages.dev`) |
| Production | `mg-geo-milev-pleven-prod` | `mg-geo-milev-pleven.sitehub.bg` | `main` | 1 proxied `CNAME` |

Staging is served on the free `*.pages.dev` URL — no custom domain, no DNS
record. Because the `.pages.dev` hostname is derived from the project name,
the **staging** project must be named `mg-geo-milev-pleven` to produce
`mg-geo-milev-pleven.pages.dev`. The **production** project therefore takes the
name `mg-geo-milev-pleven-prod`; its name is cosmetic since production is
reached via its custom domain.

**Why two projects** rather than one project with production + preview
environments: Cloudflare assigns a *stable custom domain* cleanly only to a
project's production environment, and we want full isolation between staging and
production with a clean 1:1 branch→project mapping. The only cost is a second CF
project, which is negligible.

DNS: a single proxied `CNAME` for `mg-geo-milev-pleven.sitehub.bg` pointing at
`mg-geo-milev-pleven-prod.pages.dev`, in the `sitehub.bg` zone (verified to live
in the same Cloudflare account — zone `42a14f60d7e2c7b3f14d725f78562ec2`,
account `4cffec782105327b06015c7e3e511b81`).

## CI/CD — GitHub Actions + `wrangler pages deploy`

Workflows under `.github/workflows/`:

1. **`ci.yml`** — on `pull_request` targeting `staging` or `main`:
   `npm ci` → `astro check` → `astro build`. A green build gates merges.
2. **`deploy-staging.yml`** — on `push` to `staging`: build with
   `SITE_URL=https://mg-geo-milev-pleven.pages.dev` →
   `wrangler pages deploy ./dist --project-name mg-geo-milev-pleven`.
3. **`deploy-production.yml`** — on `push` to `main` **and** `workflow_dispatch`:
   build with `SITE_URL=https://mg-geo-milev-pleven.sitehub.bg` →
   `wrangler pages deploy ./dist --project-name mg-geo-milev-pleven-prod`.

**Secrets** (set via `gh secret set`):
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Both deploy workflows pin Node (matching the project's toolchain), run
`npm ci` for reproducible installs, and use the official `cloudflare/wrangler`
action (or `npx wrangler`) for the deploy step.

## Code change — environment-aware `site`

`astro.config.mjs` currently hardcodes
`site: "https://mg-geo-milev-pleven.sitehub.bg"`, so a staging build would emit
production canonical/OG URLs.

- Read `site` from a `SITE_URL` env var, defaulting to the production URL so a
  plain local `npm run build` still behaves as today.
- Each deploy workflow sets `SITE_URL` to its environment's origin.
- Emit `noindex` (robots meta + `_headers`/`robots.txt` as appropriate) on the
  staging build only, so search engines never index the staging copy.

## Provisioning runbook (executed today)

1. Verify `sitehub.bg`'s DNS zone is in the same Cloudflare account as the token.
   (Done: zone `42a14f…ec2`, account `4cffec…b81`.)
2. Create both Cloudflare Pages projects (`mg-geo-milev-pleven` staging,
   `mg-geo-milev-pleven-prod` production).
3. Add the production custom domain `mg-geo-milev-pleven.sitehub.bg` + its
   proxied `CNAME` DNS record. (Staging needs no custom domain.)
4. `gh secret set CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
5. Add the three workflows and the `SITE_URL` / `noindex` change.
6. Rename `master` → `main`; create `staging`; push both to origin.
7. Trigger staging (push `staging`) and production (`workflow_dispatch` for the
   initial go-live) deploys.
8. Verify both URLs serve over HTTPS with correct canonical/OG origins and that
   staging is `noindex`.
9. Write `DEPLOYMENT.md` documenting the publish-button contract.

## Prerequisites from the user

- Cloudflare **API token** (Pages edit + DNS edit on the `sitehub.bg` zone) and
  **account ID**, provided into the session at implementation time.

## Non-goals / explicitly deferred

- Admin-panel Publish button UI and backend endpoint.
- Multi-school generalization (reusable workflow across the
  `sitehub-bg-schools` org) — this repo is the first instance; generalize later.
- Preview deploys per PR (PR builds are CI-checked but not deployed).
