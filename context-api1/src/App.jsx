import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [visible, setVisible] = useState(true)
  return (
    <>
      {visible ? <Counter /> : <></>}
      <button onClick={()=>setVisible(!visible)}>Toggle</button>
    </>
  )
}

export default App
