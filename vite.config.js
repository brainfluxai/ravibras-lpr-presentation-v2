import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        host: true
    },
    preview: {
        host: true,
        port: 4173,
        strictPort: false,
        allowedHosts: [
            'presentations.lawdata.com.br',
            '.lawdata.com.br'
        ]
    }
})
