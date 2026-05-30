/**
 * WCAG 2.x relative-luminance contrast. Pure, dependency-free — used by the
 * theme contrast validator (and later wired into CI so a per-school accent that
 * fails against paper can't ship). Inputs are 6-digit hex (`#rrggbb`).
 */
function srgbToLinear(channel: number): number {
  const s = channel / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function relativeLuminance(hex: string): number {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (
    0.2126 * srgbToLinear(r) +
    0.7152 * srgbToLinear(g) +
    0.0722 * srgbToLinear(b)
  );
}

export function contrastRatio(fg: string, bg: string): number {
  const a = relativeLuminance(fg);
  const b = relativeLuminance(bg);
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
}

/** AA: 4.5 for normal text, 3 for large text / graphics. */
export function passesAA(fg: string, bg: string, min = 4.5): boolean {
  return contrastRatio(fg, bg) >= min;
}
