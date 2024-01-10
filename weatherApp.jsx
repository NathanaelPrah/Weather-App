/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "../Weather-App/weatherApp.css"

const api = {
    key: "248c637765425af9c6018dc00892ea62",
    base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherApp = () => {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    /*
      Search button is pressed. Make a fetch call to the Open Weather Map API.
    */
    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            });
    };


    return (
        <div className="App">
            <header className="App-header">
                {/* HEADER  */}
                <h1>Weather App</h1>

                {/* Search Box - Input + Button  */}
                <div>
                    <input
                        type="text"
                        placeholder="Enter city/town..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={searchPressed}>Search</button>
                </div>

                {/* If weather is not undefined display results from API */}
                {typeof weather.main !== "undefined" ? (
                    <div>
                        {/* Location  */}
                        <p>{weather.name}</p>

                        {/* Temperature Celsius  */}
                        <p>{weather.main.temp}°C</p>

                        {/* Condition (Sunny ) */}
                        <p>{weather.weather[0].main}</p>
                        <p>({weather.weather[0].description})</p>
                    </div>
                ) : (
                    ""
                )}
            </header>
        </div>
    );
    ssName="weather-image">
   
}

export default WeatherApp;

