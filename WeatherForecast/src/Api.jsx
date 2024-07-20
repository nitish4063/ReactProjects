const baseURL = 'https://api.weatherapi.com/v1/current.json?key=0ce1b0e3880747fc8f3135533231106&q='

export const getWeatherData = async(searchCity) => {
    return await fetch(`${baseURL}${searchCity}&aqi=no`).then((res) => res.json())
}