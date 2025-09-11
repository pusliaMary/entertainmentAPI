import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://evilinsult.com',
        changeOrigin: true,
        rewrite: (path => path.replace(/^\/api/, ''))
      }
    }
    
  }
  
})
