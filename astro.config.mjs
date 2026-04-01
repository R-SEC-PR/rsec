// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    //plugins: [arraybuffer()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/src/styles/_variables.scss" as *;`,
        },
      },
    },
  },
});
