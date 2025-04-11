import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/patient-lab-planning/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  // Configure handling of markdown files
  optimizeDeps: {
    exclude: ['path'],
  },
  // Enable raw imports for markdown files
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['..'],
    },
  },
})
