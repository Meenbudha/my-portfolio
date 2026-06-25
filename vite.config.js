import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// This configuration uses the Vite-native plugin for Tailwind v4
// It avoids the PostCSS errors by handling the styles directly
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})