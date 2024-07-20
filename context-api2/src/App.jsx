import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { UserContextProvider } from './context/Usercontext'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!!</h1>
      <Login />
      <Profile />
    </>
  )
}

export default App
