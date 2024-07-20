import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams, NavLink} from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(res => setData(res))
  }, [])

  return (
    <>
      <h1>Home Page</h1>
      <div>
        {
          data && data.map((obj) => <NavLink to={`/user/${obj.id}`}>{obj.title}</NavLink>)
        }
      </div>
    </>
  )
}

const About = () => {
  return (<h1>About page</h1>)
}

const User = () => {
  const params = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(res => res.json())
    .then(res => setData(res))
  }, [])


  return (
    <>
      <h1>user: {params.id}</h1>
      <>
      {
        data && 
        <>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </>
      }
      </>
    </> 
  )
}

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/user/:id' element={<User />}/>
    </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
)
