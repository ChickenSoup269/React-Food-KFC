import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '~/App'
import './index.css'
import { LanguageProvider } from './components/Translate/LanguageContext'
import { CartProvider } from './components/AddCard/CartContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CartProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </CartProvider>
  </React.StrictMode>
)
