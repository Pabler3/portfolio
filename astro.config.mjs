import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({

  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

  integrations: [tailwind(), sitemap()],
  site: 'https://portfolio-pabloarcas.vercel.app',
});