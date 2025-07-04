import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import CadUserPage from './pages/CadUserPage'
import HomePage from './pages/HomePage'
import Apiarios from './pages/Apiarios'
import CadastrarApiarios from './pages/CadastrarApiarios'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CadUserPage /> */}
    {/* <HomePage /> */}
    {/* <Apiarios /> */}
    <CadastrarApiarios />

  </StrictMode>,
)