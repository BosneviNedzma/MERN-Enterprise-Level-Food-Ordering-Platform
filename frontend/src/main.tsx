import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes.tsx'
import React from 'react'

import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
)
