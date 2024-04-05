
import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  const [query, setQuery]=useState("");
  const [weatherData, setWeatherData]=useState({});
  function searchWeather(e){
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=a059d01100076699ed971258da736401&units=imperial`).then((res)=>{
      return res.json()
    }).then((data)=>{
      setWeatherData({...data});
    }).catch(error=>{
        console.log(error);
    });
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={(e)=>searchWeather(e)}>
          <input className="search" type="text" placeholder="search weather" onChange={(e)=>setQuery(e.target.value)}/>
          <button type="submit">search</button>
        </form>
        {
         Object.keys(weatherData).length===0?<></>: <div className="weather">
                    <h1>{weatherData.name}</h1>
                    <h2>{weatherData.main.feels_like}°F</h2>
                    <p>{weatherData.weather[0].description}</p>
         </div>
        }
       
    </div>
  )
}

export default App
