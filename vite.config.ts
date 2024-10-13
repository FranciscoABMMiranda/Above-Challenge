import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Above-Challenge/',
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@services': '/src/services',
      '@utils': '/src/utils',
    },
  },
})
