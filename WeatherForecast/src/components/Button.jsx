import React from 'react'
import { useWeather } from '../context/Weather'

function Button() {

    const {fetchWeatherData} = useWeather()

  return (
    <div>
        <button onClick={fetchWeatherData}>Search</button>
    </div>
  )
}

export default Button