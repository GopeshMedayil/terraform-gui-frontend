import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Login } from './components/Login/Login.tsx'
import { Dashboard } from './components/DashBoard/DashBoard.tsx'
import { ProtectedRoute } from './components/ProtectedRoute.tsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>)
  },
  {
    path:'/',
    element:(
      <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>
    )
  }
]

)
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
