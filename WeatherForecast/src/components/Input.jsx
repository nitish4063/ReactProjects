import React from 'react'
import { useWeather } from '../context/Weather'

function Input() {

    const {searchCity, setSearchCity} = useWeather()

  return (
    <div>
        <input
            placeholder='Enter City Name'
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
        />

    </div>
  )
}

export default Input