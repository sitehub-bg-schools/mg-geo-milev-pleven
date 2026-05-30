/**
 * Per-school theme metadata (platform layer). Mirrors the CSS tokens in
 * `src/styles/theme.css` in a typed form, for use by the contrast validator
 * and (later) the sitehub template's per-school theming. Hex values here must
 * match the RGB channels in theme.css.
 */
export interface SchoolTheme {
  slug: string;
  brand: Record<"50" | "100" | "500" | "600" | "700" | "900", string>;
  accent: Record<"50" | "100" | "200" | "500" | "600" | "700", string>;
  /** Page background. Kept white for МГ. */
  paper: string;
  /** Body text colour (slate-900). */
  ink: string;
  fonts: { display: string; sans: string; mono: string };
}

export const theme: SchoolTheme = {
  slug: "mg-geo-milev-pleven",
  brand: {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "500": "#2563eb",
    "600": "#1d4ed8",
    "700": "#1e40af",
    "900": "#1e3a8a",
  },
  accent: {
    "50": "#fefce8",
    "100": "#fef9c3",
    "200": "#fde68a",
    "500": "#eab308",
    "600": "#ca8a04",
    "700": "#a16207",
  },
  paper: "#ffffff",
  ink: "#0f172a", // slate-900
  fonts: { display: "Spectral", sans: "Golos Text", mono: "Martian Mono" },
};
