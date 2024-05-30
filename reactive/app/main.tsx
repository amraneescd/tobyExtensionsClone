// css imports
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'virtual:uno.css'
import { I18nProvider } from '@lingui/react'
import { ClickToComponent } from 'click-to-react-component'
// js imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import ToLinks from './routes/ToLinks'
import Next from './routes/Next'
import MyCollection from './routes/MyCollection'
import StarredCollections from './routes/StarredCollections'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/toLinks',
        element: <ToLinks />,
      },
      {
        path: '/next',
        element: <Next />,
      },
      {
        path: '/starredCollections',
        element: <StarredCollections />,
      },
      {
        path: '/',
        element: <MyCollection />,
      },
    ],
  },
])

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <RouterProvider router={router} />
      <ClickToComponent />
    </I18nProvider>
  </StrictMode>
)
