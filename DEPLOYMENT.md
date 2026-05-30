# Deployment

Static Astro site hosted on **Cloudflare Pages**, deployed by **GitHub Actions**.

## Environments

| Env | URL | Branch | Cloudflare project |
|---|---|---|---|
| Staging | https://mg-geo-milev-pleven.pages.dev | `staging` | `mg-geo-milev-pleven` |
| Production | https://mg-geo-milev-pleven.sitehub.bg | `main` | `mg-geo-milev-pleven-prod` |

Staging is `noindex` (search engines ignore it). Production is indexable.

## How it flows

```
edit code ──► push to staging ──► deploy-staging ──► STAGING (auto)
                                                       │
                          open PR staging → main  ◄────┘  (the "Publish" action)
                                   │
                          merge PR ──► deploy-production ──► PRODUCTION
```

- **Every push to `staging`** rebuilds and deploys the staging site.
- **`main` is protected:** code can reach it only through a pull request from
  `staging` (enforced by the `only-from-staging` required check). Direct pushes,
  force-pushes, deletions, and creating new branches are all blocked
  (org admins can bypass).
- **Publishing** = merge `staging` → `main`. That push to `main` deploys
  production. Production can also be re-deployed manually from the Actions tab
  (`deploy-production` → "Run workflow").

## Publish from the admin panel (future)

The admin "Publish" button is a PR-create-then-merge against this repo:

1. `POST /repos/sitehub-bg-schools/mg-geo-milev-pleven/pulls`
   `{ "base": "main", "head": "staging", "title": "Publish" }`
2. `PUT /repos/.../pulls/{number}/merge` once `only-from-staging` is green.
3. Poll `GET /repos/.../actions/runs` to show publish progress.

Needs a GitHub App / token with `contents: write` + `pull_requests: write`.

## Workflows

- `.github/workflows/ci.yml` — build gate on PRs into `staging`/`main`.
- `.github/workflows/deploy-staging.yml` — push to `staging` → staging deploy.
- `.github/workflows/deploy-production.yml` — push to `main` or manual dispatch
  → production deploy.
- `.github/workflows/guard-main.yml` — fails PRs into `main` not from `staging`.

## Secrets (GitHub Actions, repo level)

- `CLOUDFLARE_API_TOKEN` — Cloudflare token (Pages edit + DNS edit on `sitehub.bg`).
- `CLOUDFLARE_ACCOUNT_ID` — `4cffec782105327b06015c7e3e511b81`.

## Local build

```bash
npm ci
npm run build            # builds with the production origin
SITE_URL=https://example.test npm run build   # override origin
```

The origin comes from `SITE_URL` (see `astro.config.mjs`), defaulting to the
production URL.
