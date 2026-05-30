import { describe, it, expect } from "vitest";
import { computeBal } from "../src/lib/bal.ts";
import { admissionProfiles } from "../src/data/admissions.ts";

const profile = {
  formula: {
    nvoBel: 2,
    nvoMat: 2,
    gradeA: { subject: "Математика", mult: 1 },
    gradeB: { subject: "Информационни технологии", mult: 1 },
  },
};

describe("computeBal", () => {
  it("sums weighted НВО points and grade points (×10)", () => {
    // 2*50 + 2*80 + (6*10) + (5*10) = 100 + 160 + 60 + 50 = 370
    const bal = computeBal(profile, {
      nvoBel: 50,
      nvoMat: 80,
      gradeA: 6,
      gradeB: 5,
    });
    expect(bal).toBe(370);
  });

  it("every configured profile produces a finite score for full marks", () => {
    for (const p of admissionProfiles) {
      const bal = computeBal(p, { nvoBel: 100, nvoMat: 100, gradeA: 6, gradeB: 6 });
      expect(Number.isFinite(bal)).toBe(true);
      expect(bal).toBeGreaterThan(0);
    }
  });
});
