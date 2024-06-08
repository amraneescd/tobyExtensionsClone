import React from 'react'
import ReactDOM from 'react-dom/client'

import { I18nProvider } from '@lingui/react'
import { ClickToComponent } from 'click-to-react-component'
import 'virtual:uno.css'

import './styles/main.css'
import { RouterProvider } from 'react-router-dom'

export function Loader() {
  return (
    <div className="h-screen grid place-items-center">
      <h1>I am Loader, Put your Logo here</h1>
    </div>
  )
}
function App() {
  return (
    <React.StrictMode>
      <I18nProvider i18n={i18n}>
        <RouterProvider
          fallbackElement={<Loader />}
          router={router}
        />
        <ClickToComponent />
      </I18nProvider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
