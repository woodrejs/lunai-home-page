import { defineConfig } from 'vite'

import { cloudflare } from "@cloudflare/vite-plugin";

// Wrangler on Cloudflare Pages parses this .js file with Esprima (no import.meta). Use paths
// relative to project root instead of __dirname from import.meta.url.

export default defineConfig({
  plugins: [cloudflare()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about/index.html',
        contact: 'contact/index.html',
        terms: 'terms/index.html',
        privacy: 'privacy/index.html',
      },
    },
  },
})