import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'

// 1. Importa le funzioni di React Router e le tue pagine
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Template from './pages/template'
import Componenti from './pages/componenti'

// 2. Crea la "mappa" del tuo sito
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App è il "guscio" con la navbar
    children: [
      {
        index: true, // Pagina di default (la home)
        element: <Home />,
      },
      {
        path: 'template', // URL: /template
        element: <Template />,
      },
      {
        path: 'componenti', // URL: /componenti
        element: <Componenti />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)