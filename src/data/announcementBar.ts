export interface SiteAnnouncement {
  message: string;
  /** Optional "Повече" link. */
  href?: string;
  /** "urgent" → brand band; "info" → amber band. */
  level: "info" | "urgent";
}

/**
 * Site-wide announcement bar content. Set to an object to show the bar; keep
 * `null` to hide it. Editable by the school via the staging→publish flow.
 *
 * Example:
 *   export const currentAnnouncement: SiteAnnouncement | null = {
 *     message: "На 5 юни училището е домакин на Drone Fest Pleven.",
 *     href: "/zhivot",
 *     level: "info",
 *   };
 */
export const currentAnnouncement: SiteAnnouncement | null = null;
