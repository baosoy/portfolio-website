import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://kerimhudson.com",
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ["nofollow"],
          target: "_blank",
        },
      ],
    ],
  },
  integrations: [sitemap(), tailwind(), preact()],
});
