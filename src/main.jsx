import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import CadUserPage from './pages/CadUserPage'
import HomePage from './pages/HomePage'
import Apiarios from './pages/Apiarios'
import AppRoutes from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <CadUserPage />
    <HomePage />
    <Apiarios /> */}
   <AppRoutes/> 
   
  </StrictMode>,
)