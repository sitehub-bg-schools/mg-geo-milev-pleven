import { describe, it, expect } from "vitest";
import { contrastRatio, passesAA } from "../src/lib/contrast.ts";
import { theme } from "../src/data/theme.ts";

describe("contrast", () => {
  it("computes ~21 for black on white", () => {
    expect(Math.round(contrastRatio("#000000", "#ffffff"))).toBe(21);
  });

  it("ink-on-paper passes AA body text", () => {
    expect(passesAA(theme.ink, theme.paper, 4.5)).toBe(true);
  });

  it("amber accent-500 on white FAILS AA body text (so red/amber is never text)", () => {
    expect(passesAA(theme.accent["500"], theme.paper, 4.5)).toBe(false);
  });

  it("brand-700 button background carries white text at AA", () => {
    expect(passesAA("#ffffff", theme.brand["700"], 4.5)).toBe(true);
  });
});
