import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './routing/Router.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
