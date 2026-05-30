export type NewsKind = "news" | "upcoming-event";

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  /**
   * Discriminator for rendering / sort order.
   *   • "news"           — historical / past-tense item, sorted by date desc.
   *   • "upcoming-event" — pinned above news, marked with an accent badge.
   * Defaults to "news" when omitted (kept optional for terser entries).
   */
  kind?: NewsKind;
}

export const news: NewsItem[] = [
  {
    slug: "24-may-2026",
    title: "24 май — Ден на българската просвета и култура",
    date: "2026-05-24",
    excerpt:
      "Поздравяваме всички ученици, учители и родители с празника на знанието и българската писменост.",
    category: "Празник",
    kind: "news",
  },
  {
    slug: "neofit-rilski-award",
    title: 'Учител от МГ "Гео Милев" с престижно отличие "Неофит Рилски"',
    date: "2026-05-21",
    excerpt:
      "Министерство на образованието удостои наш учител с най-високото признание в системата на образованието.",
    category: "Признание",
    kind: "news",
  },
  {
    slug: "milevs-multilingual-masters",
    title: 'Отбелязахме Деня на Европа с "Milev\'s Multilingual Masters"',
    date: "2026-05-12",
    excerpt:
      "Многоезичното състезание събра ученици от различни класове в творческо предизвикателство.",
    category: "Събитие",
    kind: "news",
  },
];

/**
 * Sort helper used by both the home news teaser and `/novini`:
 *   1. Upcoming events first (pinned), ordered by date asc (soonest first).
 *   2. Then regular news, ordered by date desc (newest first).
 */
export function sortedNews(items: readonly NewsItem[] = news): NewsItem[] {
  const isUpcoming = (n: NewsItem) => n.kind === "upcoming-event";
  const upcoming = items
    .filter(isUpcoming)
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));
  const regular = items
    .filter((n) => !isUpcoming(n))
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  return [...upcoming, ...regular];
}
