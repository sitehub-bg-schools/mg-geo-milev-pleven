/**
 * Document catalog — the data behind the generic document/section pages
 * (/dokumenti and the document sub-sections of /obuchenie).
 *
 * This is deliberately the shape a future DMS will populate: a list of
 * categories, each holding document entries. For now most entries are
 * placeholders (`pending: true`, no `href`) — they render an „очаквайте" chip
 * instead of a link. When the DMS exists, it fills `documents[]` with real
 * `href`s and the same component renders them unchanged.
 *
 * Only document titles actually seen on the reference site are listed; where we
 * know only the category, `documents` is left empty and the section renders a
 * pending empty-state. Real source URLs for migration live in
 * `docs/document-migration-manifest.md`.
 */

export type DocFileType = "pdf" | "doc" | "xls" | "image" | "link";

export interface DocItem {
  title: string;
  /** Display date or period, e.g. "31.03.2026", "2025/2026". */
  date?: string;
  fileType?: DocFileType;
  /** Real destination once available; absent → renders a pending chip. */
  href?: string;
  /** Force the pending state even if other fields are set. */
  pending?: boolean;
}

export interface DocCategory {
  slug: string;
  title: string;
  description?: string;
  /** Small muted note under the description (e.g. count, external system). */
  note?: string;
  group: "dokumenti" | "obuchenie";
  documents: DocItem[];
}

export const documentCategories: DocCategory[] = [
  // ── Документи ──────────────────────────────────────────────────────────
  {
    slug: "pravilnici",
    title: "Правилници",
    description: "Правилник за дейността, етичен кодекс, вътрешни правила.",
    group: "dokumenti",
    documents: [],
  },
  {
    slug: "uchebni-planove",
    title: "Учебни планове",
    description: "Годишен план и учебни планове по профили.",
    group: "dokumenti",
    documents: [],
  },
  {
    slug: "zashtita-na-lichnite-danni",
    title: "Защита на личните данни (ГДПР)",
    description: "Политика за защита на личните данни и свързани документи.",
    group: "dokumenti",
    documents: [],
  },
  {
    slug: "byudzhet",
    title: "Бюджет",
    description:
      "Утвърден бюджет и тримесечни отчети за изпълнението на бюджета.",
    note: "Архив 2019–2026 (~45 документа) — предстои пренасяне.",
    group: "dokumenti",
    documents: [
      { title: "Изпълнение на бюджета — тримесечни отчети", fileType: "pdf", pending: true },
      { title: "Утвърден бюджет на гимназията", fileType: "pdf", pending: true },
    ],
  },
  {
    slug: "profil-na-kupuvacha",
    title: "Профил на купувача",
    description: "Обществени поръчки и публични покани по реда на ЗОП.",
    note: "Актуалните процедури се водят в ЦАИС ЕОП.",
    group: "dokumenti",
    documents: [],
  },
  {
    slug: "informacia-roditeli-i-ucenici",
    title: "Информация за родители и ученици",
    description: "Полезна информация и указания за родители и ученици.",
    group: "dokumenti",
    documents: [
      { title: "Правила и мерки", fileType: "pdf", pending: true },
      { title: "Безопасност в мрежата", fileType: "pdf", pending: true },
      { title: "Готови ли сме за учебната година?", fileType: "pdf", pending: true },
    ],
  },
  {
    slug: "informacia-abiturienti",
    title: "Информация за абитуриенти",
    description:
      "Информация за здравноосигурителните вноски на завършващите зрелостници.",
    group: "dokumenti",
    documents: [],
  },
  {
    slug: "zaavlenia-obrazec",
    title: "Заявления (образци)",
    description: "Бланки и образци на заявления за изтегляне и попълване.",
    group: "dokumenti",
    documents: [],
  },
  {
    slug: "nacionalna-telefonna-linia-za-deca",
    title: "Национална телефонна линия за деца",
    description:
      "Денонощна безплатна телефонна линия 116 111 за деца и родители към Държавната агенция за закрила на детето.",
    group: "dokumenti",
    documents: [
      {
        title: "Национална телефонна линия за деца — 116 111",
        fileType: "link",
        href: "https://116111.bg",
      },
    ],
  },
  {
    slug: "drugi",
    title: "Други",
    description: "Други документи за изтегляне.",
    group: "dokumenti",
    documents: [],
  },

  // ── Обучение ───────────────────────────────────────────────────────────
  {
    slug: "grafici",
    title: "Графици",
    description:
      "График на учебното време, организация на учебния ден, контролни и класни работи, консултации, час на класа и приемно време.",
    note: "Учебна 2025/2026 година.",
    group: "obuchenie",
    documents: [],
  },
  {
    slug: "uup",
    title: "Училищни учебни планове",
    description: "Училищни учебни планове по класове и профили.",
    group: "obuchenie",
    documents: [],
  },
  {
    slug: "za-zrelostnicite",
    title: "За зрелостниците (ДЗИ)",
    description: "Държавни зрелостни изпити — заповеди, дати и указания.",
    group: "obuchenie",
    documents: [
      {
        title:
          "Заповед № РД09-2072/26.08.2025 г. за датите за провеждане на ДЗИ",
        date: "2025/2026",
        fileType: "pdf",
        pending: true,
      },
      { title: "ДЗИ за учебната 2025/2026 година", fileType: "pdf", pending: true },
    ],
  },
  {
    slug: "formi-na-obuchenie",
    title: "Форми на обучение",
    description:
      "Дневна, самостоятелна, индивидуална и комбинирана форма на обучение.",
    group: "obuchenie",
    documents: [],
  },
  {
    slug: "svobodni-mesta",
    title: "Свободни места",
    description: "Свободни места по класове през учебната година.",
    group: "obuchenie",
    documents: [],
  },
  {
    slug: "uchebnici",
    title: "Учебници",
    description: "Списък на учебниците по класове и предмети.",
    group: "obuchenie",
    documents: [],
  },
];

export function categoriesByGroup(group: DocCategory["group"]): DocCategory[] {
  return documentCategories.filter((c) => c.group === group);
}
