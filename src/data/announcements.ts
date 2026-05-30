export interface Announcement {
  slug: string;
  title: string;
  /** Body shown on the card. Keep to ~2–3 sentences. */
  body: string;
  /** ISO date the item refers to (event date or publish date). */
  date: string;
  /** Short pill label, e.g. "Събитие", "Олимпиада", "Покана". */
  tag?: string;
  /** Marks a future-dated event (renders an accent badge). */
  upcoming?: boolean;
  /**
   * Optional outbound link (official page, PDF flyer, news post). Several of
   * the school's real links (родителска среща PDF, olympiad announcement) are
   * not in our hands yet — those cards render without a link until provided.
   */
  href?: string;
}

/**
 * "Актуално" — the timely cards the school leads its home page with, mirroring
 * pleven-mg.com. Distinct from `news.ts` (the dated news feed): these are
 * pinned, high-visibility items shown near the top.
 */
export const announcements: Announcement[] = [
  {
    slug: "parent-meeting",
    title: "Предстояща родителска среща — ОЧАКВАМЕ ВИ!",
    body:
      "Каним всички родители на предстоящата родителска среща. Подробности за датата и часовете по класове ще намерите в поканата.",
    date: "2026-05-28",
    tag: "Покана",
  },
  {
    slug: "physics-olympiad-laureates",
    title: "Седем лауреати на Националната олимпиада по физика",
    body:
      "Гордеем се с постиженията на нашите ученици на най-високото национално ниво — седем лауреати на Националната олимпиада по физика.",
    date: "2026-05-12",
    tag: "Олимпиада",
  },
  {
    slug: "drone-fest-pleven-2026",
    title: "Първи по рода си Дрон Фест ще се проведе в Плевен",
    body:
      'Първият за региона „Drone Fest Pleven — Технологиите в полет над Плевен" ще бъде част от тазгодишното издание на Плевенския фестивал на науката. Събитието ще се проведе на 5 юни и се организира от Сдружение „РоботиксЛаб Академи" с подкрепата на Община Плевен. Домакин на инициативата е Математическата гимназия „Гео Милев".',
    date: "2026-06-05",
    tag: "Събитие",
    upcoming: true,
  },
];
