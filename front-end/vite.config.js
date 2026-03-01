import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://qlxvf88c-8000.inc1.devtunnels.ms",
                changeOrigin: true,
            }
        }
    }
})