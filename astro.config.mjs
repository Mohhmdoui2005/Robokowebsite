import { defineConfig } from 'astro/config';

// Static-first for best performance: pre-rendered HTML, zero JS unless opted in.
// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  output: 'static',
  compressHTML: true,
  site: 'https://roboko.example.com',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
