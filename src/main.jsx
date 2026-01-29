import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// NOTE: `main.jsx` is the entry point. Only files imported from here (directly or indirectly)
// are included in the app bundle.
// Mentor tip: If you create `indexCOPY.css` (or `WhateverCOPY.css`) it will NOT do anything
// unless you import it somewhere in the graph (e.g. here, or inside a component).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
