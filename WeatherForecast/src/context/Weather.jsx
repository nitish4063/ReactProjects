import { useContext, createContext, useState } from "react";
import { getWeatherData } from "../Api";

export const weatherContext = createContext(null);

export const useWeather = () => {
  return useContext(weatherContext);
};

export const WeatherProvider = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState('');

  const fetchWeatherData = async() => {
    const res = await getWeatherData(searchCity)
    setWeatherData(res)
  }

  return (
    <weatherContext.Provider
      value={{ weatherData, setWeatherData, searchCity, setSearchCity, fetchWeatherData}}
    >
      {props.children}
    </weatherContext.Provider>
  );
};
