/**
 * Балообразуване (admission score) computation. Pure & tested.
 *
 * бал = nvoBel·(НВО БЕЛ точки) + nvoMat·(НВО Математика точки)
 *       + gradeA.mult·(оценка A · 10) + gradeB.mult·(оценка B · 10)
 *
 * The ×10 grade scaling and the per-profile multipliers are PLACEHOLDERS until
 * the school confirms the official coefficients and the МОН grade-to-points
 * conversion — only `admissions.ts` (data) changes when they arrive, not this.
 */
export interface BalFormula {
  nvoBel: number;
  nvoMat: number;
  gradeA: { subject: string; mult: number };
  gradeB: { subject: string; mult: number };
}

export interface BalInput {
  /** НВО БЕЛ — points 0–100. */
  nvoBel: number;
  /** НВО Математика — points 0–100. */
  nvoMat: number;
  /** Оценка по предмет A — 2.00–6.00. */
  gradeA: number;
  /** Оценка по предмет B — 2.00–6.00. */
  gradeB: number;
}

export function computeBal(
  profile: { formula: BalFormula },
  input: BalInput,
): number {
  const f = profile.formula;
  return (
    f.nvoBel * input.nvoBel +
    f.nvoMat * input.nvoMat +
    f.gradeA.mult * (input.gradeA * 10) +
    f.gradeB.mult * (input.gradeB * 10)
  );
}
