import React from 'react'

const CurrentWeather = ({data}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center bg-purple-400 mt-12 py-6 rounded-lg'>
    <div className='flex flex-col justify-center items-center'>
    <div className='capitalize'>
        <p>{data.city}</p>
        <p>{data.weather[0].description}</p>
    </div>
    <img src={`icons/${data.weather[0].icon}.png`}/>
    <p>{Math.round(data.main.temp)}°C</p>
    </div>
    <div>
        <div>
            <span>Feels Like </span>
            <span>{Math.round(data.main.feels_like)}°C</span>
        </div>
        <div>
            <span>Humidity </span>
            <span>{data.main.humidity} %</span>
        </div>
        <div>
            <span>Wind</span>
            <span> {Math.round(data.wind.speed)} m/s</span>
        </div>
        <div>
            <span>Pressure </span>
            <span>{data.main.pressure} hPa</span>
        </div>
 
    </div>
    </div>
  )
}

export default CurrentWeather
