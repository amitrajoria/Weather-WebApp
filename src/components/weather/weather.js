import React from 'react'
import { useState , useEffect} from 'react'
import "./style.css"
import Tempinfo from './tempinfo'

const Weather = () => {
    const[searchValue, setSearchValue] = useState("agra");
    const[weatherInfo, setWeatherInfo] = useState({});
    const getWeatherInfo = async (e) => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=53e51200538dd4f9bb5e3fc70fbc45bc`;
            const res = await fetch(url);
            const data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weather } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const newWeatherInfo  = {
                temp, humidity, pressure, weather, name, speed, country, sunset
            }
            setWeatherInfo(newWeatherInfo);
            e.preventDefault();
        }
        catch (error) {
            console.log(error);
        }
       
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])
    

  return (
    <>
        <div className="wrap">
            <div className="search">
                <form action='javascript:void(0)' onSubmit={getWeatherInfo}>
                    <input type="search" placeholder='Search' autoFocus id='search' className='searchTerm' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                    <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
                </form>
            </div>
        </div>
        <Tempinfo weatherInfo={weatherInfo}/>
    </>
  )
}

export default Weather