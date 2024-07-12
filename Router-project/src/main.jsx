import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Layout from './Layout.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

// const myRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about-us',
//         element: <About />
//       },
//       {
//         path:'contact-us',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />} />
      <Route path='about-us' element={<About />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route path='github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>,
)
