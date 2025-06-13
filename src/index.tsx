import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import Layout from './layout/layout'
import Routers from './routes/router'
import { GoogleOAuthProvider } from '@react-oauth/google'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // Não refaz ao focar na janela
      // refetchOnMount: false, // Não refaz ao montar componente
      // refetchOnReconnect: false, // Não refaz ao reconectar
      // staleTime: 5 * 60 * 1000, // 5 minutos (dados ficam "frescos")
      // gcTime: 10 * 60 * 1000, // 10 minutos no cache
      // retry: 1 // Só tenta 1 vez em caso de erro
    }
  }
})

// Client ID do Google
const GOOGLE_CLIENT_ID =
  '566612538072-lt6fo1kk28mnmrsfbhqtlvc4kpqv97vh.apps.googleusercontent.com'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={client}>
        <Routers />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
