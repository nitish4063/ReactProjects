import React from 'react'
import { useWeather } from '../context/Weather'

function Card() {
    const {weatherData} = useWeather()

  return (
    <div>
        <img src={weatherData?.current?.condition?.icon} />
        <h3>{weatherData?.current?.condition?.text}</h3>
        <h2>Temperature: {weatherData?.current?.temp_c} C</h2>
        <h2>{weatherData?.location?.name}, {weatherData?.location?.region}, {weatherData?.location?.country}    </h2>
    </div>
  )
}

export default Card