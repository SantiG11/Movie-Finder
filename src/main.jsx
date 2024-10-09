import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MoviesContext, MoviesProvider } from './context/MoviesContext.jsx'

createRoot(document.getElementById('root')).render(
    <MoviesProvider>
        <App />
    </MoviesProvider>
)
