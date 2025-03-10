import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'material-symbols';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
