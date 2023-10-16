import React, { useState } from 'react'
import './WeatherApp.css'

import searchimg from '../Assets/magnifying-glass-solid.svg'
import clear_icon from '../Assets/sun-solid.svg'
import drizzle_icon from '../Assets/cloud-sun-rain-solid.svg'
import wind from '../Assets/wind-solid.svg'
import rain from '../Assets/cloud-rain-solid.svg'
import cloud from '../Assets/cloud-sun-solid1.svg'
import humidity from '../Assets/water-solid.svg'
import snow from '../Assets/snow.svg'

function WeatherApp() {
    let api_key = '75302c1ff56a65c59ed58e75145de771'; 
    const [wicon, setWicon] = useState(cloud)

    const search = async () => {
        const element = document.getElementsByClassName('cityInput')
        if (element[0].value === '')
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const location = document.getElementsByClassName('weather-location')
        const temperature = document.getElementsByClassName('weather-temp')
        const humidity = document.getElementsByClassName('humidity-percent')
        const wind = document.getElementsByClassName('wind-rate')

        location[0].innerHTML = data.name
        temperature[0].innerHTML = data.main.temp+'<sup>0</sup>C'
        humidity[0].innerHTML = data.main.humidity+'%'
        wind[0].innerHTML = data.wind.speed + 'km/h'
        // wicon(clear_icon)
        if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n')
        {
            setWicon(clear_icon)
        }
        else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n')
        {
            setWicon(cloud)
        }
        else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
            setWicon(drizzle_icon)
        }
        else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n')
            setWicon(drizzle_icon)
        else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n')
            setWicon(drizzle_icon)
        else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n')
            setWicon(rain)
        else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n')
            setWicon(rain)
        else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n')
            setWicon(snow)
        else {
            setWicon(clear_icon)
        }
    }
  
  return (
      <div className='container'>
          <div className="top-bar">
              <input type="text" className="cityInput" placeholder='Search' />
              <div className="search-icon" onClick={()=>{search()}}>
                  <img src={searchimg} alt=""/>
              </div>
          </div>  
          <div className='weather-image'>
              <img src={wicon} alt=''/>
          </div>
          <div className='weather-temp'>24<sup>o</sup>c</div>
          <div className="weather-location">London</div>
          <div className="data-container">
              <div className="element">
                  <img src={humidity} alt='' className='icon' />
                  <div className="data">
                      <div className="humidity-percent">64%</div>
                      <div className="text">Humidity</div>
                </div>
              </div>
              <div className="element">
                  <img src={wind} alt='' className='icon' />
                  <div className="data">
                      <div className="wind-rate">16 km/h</div>
                      <div className="text">Wind Speed</div>
                  </div>
              </div> 
          </div>


    </div>
  )
}

export default WeatherApp