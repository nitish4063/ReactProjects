import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout.jsx'
import Dashboard from './components/Dashboard.jsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Products from './components/Products.jsx'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='' element={<Dashboard />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/products' element={<Products />} />
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
