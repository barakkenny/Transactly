import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Auth from './pages/Auth'
import Tables from './pages/Tables'
import Menu from './pages/Menu'
import { Provider } from 'react-redux'
import store from './redux/store'

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
      },
      {
        path: '/menu',
        element: <Menu />,
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
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
