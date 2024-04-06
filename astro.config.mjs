import path from 'node:path';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import million from 'million/compiler';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: 'https://shadylights.vercel.app',
  output: "static",
  adapter: vercel(),
  markdown: {
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, {
      // Wrap the heading text in a link.
      behavior: 'wrap'
    }]]
  },
  vite: {
    build: {
      rollupOptions: {
        external: [
          "sharp"
        ]
      },
    plugins: [million.vite({
      mode: 'react',
      server: true,
      auto: {
        threshold: 0.05,
        skip: ['useBadHook', /badVariable/g]
      }
    })],
    resolve: {
      alias: {
        $lib: path.resolve('./src/lib')
      }
    }
  },
  integrations: [react(), svelte(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), starlight({
    title: 'ShadyLight',
    logo: {
      src: './src/assets/shadylight-logo-transparent.webp',
      replacesTitle: true
    },
    favicon: '/favicon.ico',
    customCss: ['./src/styles/tailwind.docs.css', '@fontsource/inter'],
    components: {
      SocialIcons: './src/components/SocialIcons.astro',
      Head: './src/components/Head.astro',
      Header: './src/components/Header.astro'
    },
    head: [
    // Add a custom meta tag to define the author of all pages.
    {
      tag: 'meta',
      attrs: {
        name: 'author',
        content: 'Hrihorii Ilin'
      }
    }],
    titleDelimiter: '—',
    lastUpdated: true,
    social: {
      github: 'https://github.com/Frikadellios',
      twitter: 'https://twitter.com/devopsick'
    }
  })]
});