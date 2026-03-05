import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React into its own chunk — cached independently
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Framer-motion is large (~100kb); separate chunk keeps main bundle lean
          'vendor-motion': ['framer-motion'],
        },
      },
    },
    // Increase the warning threshold slightly (default 500kb)
    chunkSizeWarningLimit: 600,
  },
})
