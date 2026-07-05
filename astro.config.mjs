import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://imantung.github.io",
  integrations: [sitemap()],
});
