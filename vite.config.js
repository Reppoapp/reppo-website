import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  preview: {
    port: 3000,
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
}) 