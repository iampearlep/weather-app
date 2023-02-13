import React from 'react'
import BackgroundImg from '../assets/bg-img.webp'

const CurrentWeather = ({data}) => {
  return (
    <div className='relative rounded-xl'>
        <img className='absolute rounded-xl h-full md:w-full brightness-75' src={BackgroundImg} alt="" />
    <div className='z-10 relative flex flex-col justify-center items-center text-center py-6 px-3'>
    <div className='flex flex-col justify-center items-center'>
    <div className='capitalize'>
        <p className='text-3xl font-semibold text-white'>{data.city}</p>
    </div> 
    <img className='mt-2' src={`icons/${data.weather[0].icon}.png`}/>
    <p className='capitalize text-md font-semibold text-white'>{data.weather[0].description}</p>
    <p className='text-5xl font-bold my-6 text-white'>{Math.round(data.main.temp)}°C</p>
    </div>
    <div className='flex flex-row space-x-5 text-white'>
        <div className='flex flex-col'>
            <span className='font-semibold text-sm'>Feels Like </span>
            <span className='font-bold'>{Math.round(data.main.feels_like)}°C</span>
        </div>
        <div className='flex flex-col'>
            <span className='font-semibold text-sm'>Humidity </span>
            <span className='font-bold'>{data.main.humidity} %</span>
        </div>
        <div className='flex flex-col'>
            <span className='font-semibold text-sm'>Wind</span>
            <span className='font-bold'> {Math.round(data.wind.speed)} m/s</span>
        </div>
        <div className='flex flex-col'>
            <span className='font-semibold text-sm' >Pressure </span>
            <span className='font-bold'>{data.main.pressure} hPa</span>
        </div>
 
    </div>
    </div>
    </div>
  )
}

export default CurrentWeather
