import React from 'react'
import './WeatherApp.css'

import icon_sol from '../Assets/user-solid.svg'
import weather from '../Assets/lock-solid.svg'
import humidity from '../Assets/envelope-solid.svg'
function WeatherApp() {
  return (
      <div className='container'>
          <div className="top-bar">
              <input type="text" className="cityInput" placeholder='Search' />
              <div className="search-icon">
                  <img src={icon_sol} alt=""/>
              </div>
          </div>  
          <div className='weather-image'>
              <img src={weather} alt=''/>
          </div>
          <div className='weather-temp'>24<sup>o</sup>c</div>
          <div className="weather-location">London</div>
          <div className="data-container">
              <div className="element">
                  <img src={humidity} alt='' className='icon' />
                  <div className="data">
                      <div className="humidy-percent">64%</div>
                      <div className="text">Humidity</div>
                </div>
              </div>
              <div className="element">
                  <img src={humidity} alt='' className='icon' />
                  <div className="data">
                      <div className="humidy-percent">16 km/h</div>
                      <div className="text">Wind Speed</div>
                  </div>
              </div> 
          </div>


    </div>
  )
}

export default WeatherApp