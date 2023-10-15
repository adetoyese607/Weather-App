import React from 'react'
import './WeatherApp.css'

import searchimg from '../Assets/magnifying-glass-solid.svg'
import sun from '../Assets/sun-solid.svg'
import wind from '../Assets/wind-solid.svg'
import rain from '../Assets/cloud-rain-solid.svg'
import cloud from '../Assets/cloud-sun-solid1.svg'
import humidity from '../Assets/water-solid.svg'

function WeatherApp() {
    let api_key = '75302c1ff56a65c59ed58e75145de771'; 

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
        wind[0].innerHTML = data.wind.speed+'km/h'
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
              <img src={cloud} alt=''/>
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