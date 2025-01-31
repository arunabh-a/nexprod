import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
        proxy: {
        '/api': {
            target: `https://nexprod-interface.onrender.com`,
            // target: `http://localhost:5000`,
        },
        },
    },
})
