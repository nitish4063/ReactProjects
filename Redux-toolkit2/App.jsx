import './App.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <h1>WELCOME</h1>
      <Products />
    </>
  )
}

export default App
