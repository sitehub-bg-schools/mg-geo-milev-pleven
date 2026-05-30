export interface StaffMember {
  /** Required — the role/title. Cards render from this even with no name yet. */
  role: string;
  name?: string;
  department?: string;
  subjects?: string[];
  email?: string;
  consultationHours?: string;
  /** Path under /staff/ if a photo is provided; otherwise initials/role glyph. */
  photo?: string;
  bio?: string;
}

/**
 * Leadership — role-based, names intentionally absent until officially supplied
 * by the school (no fabricated personal data). Each card shows a „предстои" chip.
 */
export const leadership: StaffMember[] = [
  { role: "Директор" },
  { role: "Заместник-директор, учебна дейност" },
  { role: "Заместник-директор, административно-стопанска дейност" },
  { role: "Педагогически съветник" },
  { role: "Училищен психолог" },
];

/** The expected catedri — the structure the roster will populate. */
export const departments: string[] = [
  "Математика",
  "Информатика и информационни технологии",
  "Физика и астрономия",
  "Български език и литература",
  "Чужди езици",
  "Природни науки (биология, химия)",
  "Обществени науки",
  "Изкуства, технологии и спорт",
];

/**
 * Teaching staff. Empty until the school supplies the 2025/2026 roster; the
 * directory renders the catedri structure with a pending state meanwhile. When
 * populated, members are grouped by their `department`.
 */
export const teachingStaff: StaffMember[] = [];
