import React, {useState} from 'react'
import Search from './components/Search'
// import Forecast from './components/Forecast'
import CurrentWeather from './components/CurrentWeather'
import { weatherApiUrl, weatherApiKey } from './components/api'
import BackgroundImg from './assets/bg-img.webp'
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
    <div>
      {/* <img className='flex w-full h-full absolute -mt-36' src={BackgroundImg} alt="" />
     <div className='mt-32 relative z-10 pt-10 w-2/5 mx-auto flex flex-col justify-center items-center bg-purple-300'> */}
     <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
     {/* </div> */}
    </div>
  )
}

export default App
