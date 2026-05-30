import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { theme } from "../src/data/theme.ts";

/**
 * The site renders colours from theme.css (CSS RGB channels); the contrast gate
 * validates theme.ts (hex). They are hand-mirrored, so this test asserts they
 * agree — otherwise editing one and not the other could ship failing contrast
 * while the contrast test stays green.
 */
const css = readFileSync(new URL("../src/styles/theme.css", import.meta.url), "utf8");

function cssHex(token: string): string | null {
  const m = css.match(new RegExp(`--${token}:\\s*(\\d+)\\s+(\\d+)\\s+(\\d+)`));
  if (!m) return null;
  return (
    "#" +
    [m[1], m[2], m[3]]
      .map((n) => Number(n).toString(16).padStart(2, "0"))
      .join("")
  );
}

describe("theme.css ↔ theme.ts are in sync", () => {
  for (const [shade, hex] of Object.entries(theme.brand)) {
    it(`--brand-${shade}`, () => {
      expect(cssHex(`brand-${shade}`)).toBe(hex.toLowerCase());
    });
  }
  for (const [shade, hex] of Object.entries(theme.accent)) {
    it(`--accent-${shade}`, () => {
      expect(cssHex(`accent-${shade}`)).toBe(hex.toLowerCase());
    });
  }
});
