import path from 'node:path'
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import tailwind from "@astrojs/tailwind";
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        $lib: path.resolve("./src/lib"),
      },
    },
  },
    integrations: [starlight({
        customCss: ['./src/styles/tailwind.docs.css'],
        title: 'My delightful docs site',
      }), react(), svelte(),
      tailwind({ config: { applyBaseStyles: false }}),
    ]
});