import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Origin is environment-driven: production sets SITE_URL to the custom domain,
// staging sets it to the *.pages.dev URL. Default keeps local builds on prod.
const SITE_URL = process.env.SITE_URL ?? "https://mg-geo-milev-pleven.sitehub.bg";

export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "bg",
    locales: ["bg"],
  },
});
