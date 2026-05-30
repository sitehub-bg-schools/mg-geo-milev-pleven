import type { CollectionEntry } from "astro:content";

export type NewsEntry = CollectionEntry<"news">;

/**
 * Sort order shared by the home teaser and `/novini`:
 *   1. Upcoming events first (pinned), soonest date first.
 *   2. Then regular news, newest date first.
 */
export function sortNews(items: NewsEntry[]): NewsEntry[] {
  const isUpcoming = (n: NewsEntry) => n.data.kind === "upcoming-event";
  const upcoming = items
    .filter(isUpcoming)
    .sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
  const regular = items
    .filter((n) => !isUpcoming(n))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return [...upcoming, ...regular];
}

const dateFormatter = new Intl.DateTimeFormat("bg-BG", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatNewsDate(date: Date): string {
  return dateFormatter.format(date);
}
