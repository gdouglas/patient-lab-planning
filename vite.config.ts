import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

// Custom plugin to load markdown files from the public/documentation folder
function markdownFromPublicPlugin() {
  const virtualModulePrefix = 'virtual:md/'
  const resolvedVirtualModulePrefix = '\0' + virtualModulePrefix

  return {
    name: 'markdown-from-public',
    resolveId(id: string) {
      if (id.startsWith(virtualModulePrefix)) {
        return '\0' + id
      }
    },
    load(id: string) {
      if (id.startsWith(resolvedVirtualModulePrefix)) {
        const fileName = id.slice(resolvedVirtualModulePrefix.length)
        const filePath = path.resolve('./public/documentation', fileName)
        
        try {
          const content = fs.readFileSync(filePath, 'utf-8')
          return `export default ${JSON.stringify(content)}`
        } catch (error) {
          console.error(`Error loading markdown file ${filePath}:`, error)
          return `export default "# Error loading markdown file: ${fileName}"`
        }
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdownFromPublicPlugin()
  ],
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
