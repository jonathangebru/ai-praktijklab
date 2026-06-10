import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // Lokale dev gebruikt de échte Azure-backend: /api wordt doorgestuurd naar
  // de live Static Web App (Azure Functions + Azure OpenAI). Secrets blijven
  // dus in Azure — niks op je laptop. Override de target in .env.local met
  // VITE_API_PROXY (bijv. een staging-URL of http://localhost:4280 voor de
  // volledige lokale Functions-emulatie via de SWA CLI).
  const apiProxyTarget = env.VITE_API_PROXY || 'https://praktijklab.datagrid.nl'

  return {
    plugins: [react()],
    server: {
      // Respecteer een toegewezen poort (bv. van de preview-runner); anders
      // de Vite-default 5173 met auto-increment.
      port: Number(process.env.PORT) || undefined,
      proxy: {
        '/api': {
          target: apiProxyTarget,
          changeOrigin: true,
          secure: true,
        },
      },
    },
  }
})
