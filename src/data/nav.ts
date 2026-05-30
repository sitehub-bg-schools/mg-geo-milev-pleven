export interface NavItem {
  href: string;
  label: string;
}

/**
 * Primary navigation — 6 intent-based hubs (replaces the old flat 9-item menu).
 * Home is reached via the logo. Existing pages (/za-nas, /novini, /galeriya,
 * /stem, /dokumenti) live under these hubs and are linked from the hub landing
 * pages rather than the top nav.
 */
export const primaryNav: NavItem[] = [
  { href: "/uchilishteto", label: "Училището" },
  { href: "/obuchenie", label: "Обучение" },
  { href: "/priem", label: "Прием" },
  { href: "/postizhenia", label: "Постижения" },
  { href: "/zhivot", label: "Живот в училище" },
  { href: "/kontakti", label: "Контакти" },
];

/**
 * Utility items (Търсене, Школо/е-дневник, Подай сигнал). Deferred to Phase 7
 * when search and the сигнал form exist — listed here so the model is ready.
 */
export const utilityNav: NavItem[] = [];
