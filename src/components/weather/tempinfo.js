import React from 'react'
import { useState, useEffect } from 'react';

const Tempinfo = ({weatherInfo}) => {
    const [weatherState, setWeatherState] = useState("");
    const { temp, humidity, pressure, weather, name, speed, country, sunset } = weatherInfo; 
    let date = new Date(sunset * 1000);
    let sunsetTime = `${date.getHours()} : ${date.getMinutes()}`;

    useEffect(() => {
      if(weather) {
        switch (weather) {
            case "Clouds": setWeatherState("wi-day-cloudy");
                break;
            case "Haze": setWeatherState("wi-day-haze");
                break;
            case "Smoke": setWeatherState("wi-smoke");
                break;
        
            default: setWeatherState("wi-day-sunny");
                break;
        }
      }
    }, [weather])
    

  return (
    <>
        <article className="widget">
            <div className="weatherIcon">
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span>{ temp }&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">{ weather }</div>
                    <div className="place">{name}, {country}</div>
                </div>
            </div>
            <div className="date">{new Date().toLocaleString() }</div>
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className="extra-info-leftside">
                        {sunsetTime} PM <br /> 
                            Sunset
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className="extra-info-leftside">
                            { humidity } <br /> 
                            Humidity
                        </p>
                    </div>
                </div>

                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className="extra-info-leftside">
                            { pressure }<br />
                            Pressure
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className="extra-info-leftside">
                            { speed } <br />
                            Speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Tempinfo