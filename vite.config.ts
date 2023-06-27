import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'vendor-framer-motion'
            } else if (id.includes('chakra-ui')) {
              return 'vendor-chakra-ui'
            } else if (id.includes('date-fns')) {
              return 'vendor-date-fns'
            }
            return 'vendor'
          }
          return
        },
      },
    },
  },
})
