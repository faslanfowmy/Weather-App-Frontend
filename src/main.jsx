import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-wcw17swxji2pojqb.us.auth0.com"                  // e.g. dev-abc123.us.auth0.com
      clientId="T9tDggoPa8auHFYmLwbReIvbVAX9t5b5"            // from Auth0 app
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://weather-api"    // if you defined an API in Auth0
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
)
