/**
 * External link registry for the site footer.
 *
 * Each entry carries an explicit `verified` boolean. The Footer renders:
 *   • verified === true  → real `<a href>` to the URL.
 *   • verified === false → plain `<span>` with a small "(линк предстои)"
 *                          muted suffix — no clickable link, no broken
 *                          promise to the user.
 *
 * Before launch, flip the three unverified entries to `verified: true`
 * after the school confirms the canonical URLs. See
 * `LAUNCH_CHECKLIST.md` (section "Single blocker") for the exact procedure.
 *
 * Audit notes (iter-4 → iter-5):
 *   • mon.bg                 — verified, official Министерство на образованието.
 *   • ruo-pleven.com         — flagged; canonical .bg URL unconfirmed.
 *   • neaa.government.bg     — НЕАО vs НАОА: agency rename uncertain.
 *   • e-uchebnitsi.mon.bg    — subdomain of mon.bg, needs availability check.
 *   • pleven.bg              — verified, Община Плевен.
 *   • mon.bg/bg/100199       — МОН раздел "Прием в държавните и общинските
 *                              училища".
 */
export interface ExternalLink {
  /** Visible Bulgarian label. */
  label: string;
  /** Destination URL (used only when verified === true). */
  url: string;
  /** Flip to true once the school confirms the URL. */
  verified: boolean;
}

export const externalLinks: readonly ExternalLink[] = [
  { label: "МОН", url: "https://www.mon.bg", verified: true },
  // TODO(launch): confirm RUO Плевен canonical URL with the school.
  { label: "РУО — Плевен", url: "https://ruo-pleven.com", verified: false },
  // TODO(launch): confirm НАОА/НЕАО current host with the school.
  { label: "НАОА", url: "https://neaa.government.bg", verified: false },
  // TODO(launch): confirm e-uchebnitsi.mon.bg availability with the school.
  {
    label: "Електронни учебници (МОН)",
    url: "https://e-uchebnitsi.mon.bg",
    verified: false,
  },
  { label: "Община Плевен", url: "https://www.pleven.bg", verified: true },
  {
    label: "Прием — МОН",
    url: "https://www.mon.bg/bg/100199",
    verified: true,
  },
] as const;
