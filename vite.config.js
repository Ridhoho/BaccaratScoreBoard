import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Mentor tip: if you ever create new files like `FooCOPY.css`, Vite won't include them
  // unless they're imported by something in `src/` (starting from `main.jsx`).
})
