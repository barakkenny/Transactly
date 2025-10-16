import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Auth from './pages/Auth'
import Tables from './pages/Tables'

const router = createBrowserRouter([
  {
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: '/tables',
        element: <Tables />,
      }
    ],
  },
  {
    path: "/auth",
    element: <Auth />, 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
