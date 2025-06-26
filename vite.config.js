import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
  react()],
  base: '/Portfolio.V1/',
  build: {
    chunkSizeWarningLimit: 1500
  }
})


