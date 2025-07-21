import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://github.com/sebasiohx',
  base: '/portfolio-2025',
  output: 'static'
});