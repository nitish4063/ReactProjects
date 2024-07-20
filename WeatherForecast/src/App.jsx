import { useEffect, useState } from 'react'
import './App.css'
import { getWeatherData } from './Api'
import Input from './components/Input'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   getWeatherData('London').then((res) => console.log(res))
  // }, [])

  return (
    <>
      <h1>Weather Forecast</h1>
      <Input />
      <Button />
      <Card />
    </>
  )
}

export default App
