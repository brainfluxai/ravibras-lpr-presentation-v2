import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        host: '0.0.0.0',
        cors: true
    },
    preview: {
        host: '0.0.0.0',
        port: 4173,
        strictPort: false,
        cors: true,
        allowedHosts: true
    }
})
