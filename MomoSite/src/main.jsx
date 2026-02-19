// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import CartProvider from './context/CartProvider.jsx'

// createRoot(document.getElementById('root')).render(
//   <CartProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </CartProvider>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartProvider.jsx'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
  <Auth0Provider 
   domain="dev-t3v5blg3dxxbdzwj.us.auth0.com"
   clientId="3b4TPyelThnJvGTPG1nPjQiWzCMye9Vj"
   authorizationParams={{
   redirect_uri: window.location.origin
  }}>
    
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
  </Auth0Provider>
)
