import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Wrangler on Cloudflare Pages parses this file with Esprima (no import.meta).

export default defineConfig({
  plugins: [react()],
  base: '/',
})
