import React from 'react'
import ReactDOM from 'react-dom/client'

import { I18nProvider } from '@lingui/react'
import 'virtual:uno.css'

import './styles/main.css'
import { RouterProvider } from 'react-router-dom'
function App() {
  return (
    <React.StrictMode>
      <I18nProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nProvider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
