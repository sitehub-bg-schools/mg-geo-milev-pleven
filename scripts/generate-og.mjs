// Rasterizes the brand OG card (public/og-default.svg) to a 1200×630 PNG.
// Social platforms (Facebook, Viber, LinkedIn, X) reject SVG OG images.
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "node:fs";

const svg = readFileSync("public/og-default.svg", "utf8");
const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
  font: { loadSystemFonts: true },
});
writeFileSync("public/og-default.png", resvg.render().asPng());
console.log("wrote public/og-default.png");
