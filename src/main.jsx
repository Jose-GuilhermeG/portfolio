import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './Index.jsx'
import './styles/style.css'
import { ThemeProvider } from './components/providers/ThemaProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  </StrictMode>,
)
