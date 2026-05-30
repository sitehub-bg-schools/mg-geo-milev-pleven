import type { BalFormula } from "../lib/bal.ts";

export interface AdmissionProfile {
  slug: string;
  title: string;
  /** Approved places; null until confirmed by the Педагогически съвет. */
  places: number | null;
  formula: BalFormula;
  /** Last year's minimum admission score; null until published. */
  lastYearCutoff: number | null;
}

export const admissionsYear = "2026/2027";

/**
 * Admission profiles (profile-as-a-choice). The `formula` coefficients, the
 * `places`, and `lastYearCutoff` are PLACEHOLDERS — the school must confirm the
 * official балообразуване and last-year cutoffs. The calculator therefore shows
 * an „индикативно, не е официално" result. When the real numbers arrive, only
 * this file changes.
 */
export const admissionProfiles: AdmissionProfile[] = [
  {
    slug: "matematika-i-informatika",
    title: "Математика и информатика",
    places: null,
    formula: {
      nvoBel: 1,
      nvoMat: 3,
      gradeA: { subject: "Математика", mult: 1 },
      gradeB: { subject: "Информационни технологии", mult: 1 },
    },
    lastYearCutoff: null,
  },
  {
    slug: "matematika-i-fizika",
    title: "Математика и физика",
    places: null,
    formula: {
      nvoBel: 1,
      nvoMat: 3,
      gradeA: { subject: "Математика", mult: 1 },
      gradeB: { subject: "Физика и астрономия", mult: 1 },
    },
    lastYearCutoff: null,
  },
  {
    slug: "softuerni-i-harduerni-nauki",
    title: "Софтуерни и хардуерни науки",
    places: null,
    formula: {
      nvoBel: 1,
      nvoMat: 3,
      gradeA: { subject: "Математика", mult: 1 },
      gradeB: { subject: "Информационни технологии", mult: 1 },
    },
    lastYearCutoff: null,
  },
  {
    slug: "prirodni-nauki",
    title: "Природни науки",
    places: null,
    formula: {
      nvoBel: 1,
      nvoMat: 2,
      gradeA: { subject: "Математика", mult: 1 },
      gradeB: { subject: "Биология и здравно образование", mult: 1 },
    },
    lastYearCutoff: null,
  },
];
