import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],

  // Treat binary formats as static assets so Vite never tries to parse them
  assetsInclude: ['**/*.pptx', '**/*.pdf'],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['framer-motion'],
          'icons': ['react-icons'],
        },
      },
    },
    // Warn if any single chunk exceeds 600 kB
    chunkSizeWarningLimit: 600,
  },

  // Do not expose env vars to the client unless prefixed with VITE_
  envPrefix: 'VITE_',
}))
