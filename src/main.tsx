import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Resume } from '@ui/views/Resume'
import { ThemeProvider } from '@ui/theme/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Resume />
    </ThemeProvider>
  </React.StrictMode>
)
