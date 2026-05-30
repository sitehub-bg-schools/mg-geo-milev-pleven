import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://mg-geo-milev-pleven.sitehub.bg",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "bg",
    locales: ["bg"],
  },
});
