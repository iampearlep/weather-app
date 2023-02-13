import React, {useState} from 'react'
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import { weatherApiUrl, weatherApiKey } from './components/api'
const App = () => {
const [currentWeather, setCurrentWeather] = useState(null)
const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const CurrentWeatherFetch = fetch(`${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`)
    const forecastFetch = fetch(`${weatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`)

    Promise.all([CurrentWeatherFetch, forecastFetch])
    .then(async(response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({city: searchData.label, ...weatherResponse})
      setForecast({city: searchData.label,...forecastResponse})
    })
    .catch(err => console.error(err));
  }
  console.log(forecast);
  return (
    <div className='flex flex-col mx-auto mt-10 w-11/12 md:w-2/5'>
      <h1 className='text-4xl text-sky-300 font-semibold text-center my-8'>Weather App</h1>
     <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
    </div>
  )
}

export default App
