# Launch checklist — МГ „Гео Милев“ Плевен (v1.0)

Pre-launch tasks. Items in **Single blocker** must be resolved before
the site goes live. Everything else is recommended but not strictly
launch-blocking.

---

## Single blocker

### Verify and enable 3 external footer links

File: `src/config/externalLinks.ts`

Three entries currently render as plain text with a muted "(линк предстои)"
suffix because their canonical URLs could not be confirmed during build.
Once the school confirms each URL, flip the `verified` flag to `true`
(and adjust the `url` if a different canonical URL is provided).

| Label | Current URL | Action |
|---|---|---|
| РУО — Плевен | `https://ruo-pleven.com` | Confirm the official URL with school staff (likely a `riopleven.com` or `mon.bg` sub-page); update `url`; set `verified: true`. |
| НАОА | `https://neaa.government.bg` | Confirm current agency host (agency was renamed НЕАО / НАОА). Update `url` if needed; set `verified: true`. |
| Електронни учебници (МОН) | `https://e-uchebnitsi.mon.bg` | Confirm the subdomain is live; update if MOE moved it; set `verified: true`. |

After flipping, run `npm run build` — the footer renders these as real
`<a>` tags instead of plain text.

---

## Recommended verifications

- [ ] **Drone Fest Плевен — 5 юни 2026** — confirm with the school that
      the event is still on the calendar; if cancelled or rescheduled,
      update `src/data/news.ts` (the entry has `kind: "upcoming-event"`
      and is pinned above other news).
- [ ] **Педагогически съветник card contrast** — the avatar tone on
      `/za-nas` for this role uses `accent` (amber). Verify in a real
      browser (light + dark monitor) that the contrast against white
      background still meets WCAG AA. If not, switch tone to `brand-soft`.
- [ ] **Walk through all 10 routes** to confirm Bulgarian copy reads
      well at production typography (Cyrillic kerning, line breaks).
- [ ] **Visit `/og-default.svg` directly** — confirm it renders at
      1200×630 and looks acceptable for social previews. If a social
      platform refuses SVG, generate a PNG fallback and point
      `BaseLayout.astro`'s default `ogImage` at it.

---

## DNS / hosting cutover

> Filled in by the human running the launch.

- [ ] Choose host (static — Netlify, Cloudflare Pages, Vercel, GitHub Pages, Fly.io static, etc.).
- [ ] Configure custom domain (e.g. `mg-pleven.bg` or whatever the school holds).
- [ ] Set up HTTPS (typically automatic with the chosen host).
- [ ] Configure `astro.config.mjs`'s `site:` field to match the final URL
      so canonical / OG tags use the production origin.
- [ ] Rebuild and redeploy after setting the `site` URL.
- [ ] Update DNS records (A / AAAA / CNAME per host docs).
- [ ] Verify HTTPS certificate is live before flipping DNS.

---

## Final smoke test (mobile + desktop)

Visit each route at both 375px (phone) and 1280px (desktop) widths. Tab
through interactive elements with keyboard only to confirm focus rings.

- [ ] `/` — hero, news teaser, profiles grid, CTA band
- [ ] `/za-nas` — history timeline, leadership grid
- [ ] `/obuchenie` — programmes / curriculum
- [ ] `/stem` — STEM section
- [ ] `/priem` — admissions empty state
- [ ] `/novini` — news cards including upcoming-event badge ordering
- [ ] `/dokumenti` — 5 category cards (2+2+1 at lg, 3+2 at xl)
- [ ] `/galeriya` — gallery
- [ ] `/kontakti` — contacts, phone/email links functional
- [ ] `/404` — verify the not-found page renders (e.g. visit `/nonexistent`)
- [ ] Footer — confirm verified links open in new tab, unverified entries
      show "(линк предстои)" as plain text.

---

## Sign-off

| Role | Name | Date |
|---|---|---|
| Школско ръководство | __________________________ | ______________ |
| Технически отговорник | __________________________ | ______________ |
