import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.tsx'
import 'virtual:uno.css'

import './styles/main.css'
const initialState = window.location.hash.slice(1) || ''
function App() {
  const [activeComponent, setActiveComponent] = useState(initialState)

  useEffect(() => {
    const updateActiveComponent = () => {
      setActiveComponent(window.location.hash.slice(1) || '')
    }

    window.addEventListener('hashchange', updateActiveComponent)

    return () => window.removeEventListener('hashchange', updateActiveComponent)
  }, [])

  return (
    <React.StrictMode>
      <Home activeComponent={activeComponent} />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
