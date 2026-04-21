// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: "https://r-sec-pr.github.io/rsec",
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
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Orbitron",
      cssVariable: "--font-orbitron-variable",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Noto Sans JP",
      cssVariable: "--font-noto-sans-jp",
      weights: [400, 500, 700],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Share Tech Mono",
      cssVariable: "--font-share-tech-mono",
      weights: [400, 700],
    },
  ],
});
