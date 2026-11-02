import { defineConfig } from 'vite'

export default defineConfig({
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
