import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DisplayAll from './DisplayAll.jsx'
import AddPlayer from './AddPlayer.jsx'
import UpdatePlayer from './UpdatePlayer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    
  </StrictMode>,
)
