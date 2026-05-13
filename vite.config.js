import { defineConfig } from 'vite'

// Wrangler on Cloudflare Pages parses this .js file with Esprima (no import.meta). Use paths
// relative to project root instead of __dirname from import.meta.url.

export default defineConfig({
  plugins: [],
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
