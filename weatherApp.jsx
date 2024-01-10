/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "../Weather-App/weatherApp.css"

// import search_icon from '../Assets/search.png';
// import clear_icon from '../Assets/clear.png';
// import cloud_icon from '../Assets/cloud.png';
// import drizzle_icon from '../Assets/drizzle.png';
// import rain_icon from '../Assets/rain.png';
// import wind_icon from '../Assets/wind.png';
// import humidity_icon from '../Assets/humidity.png';
// import snow_icon from '../Assets/snow.png';

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
    //     <div className='container'>
    //         <div className='top-bar'>
    //             <input type='text' className="cityInput" placeholder='Enter City /Town' />
    //             <button className="search-icon" onClick={search} >
    //                 <img src={search_icon} alt="" />
    //                 <p>test</p>
    //             </button>
    //         </div>
    //         <div className="weather-image">
    //             <img src={wicon} alt="" />
    //         </div>
    //         <div className="weather-temp">24°c</div>
    //         <div className="weather-location">Adenta</div>
    //         <div className="date-container">
    //             <div className="element">
    //                 <img src={humidity_icon} alt='' className="icon" />
    //                 <div className="data">
    //                     <div className="humidity-percent">64%</div>
    //                     <div className="text">Humidity</div>
    //                 </div>
    //             </div>
    //             <div className="element">
    //                 <img src={wind_icon} alt='' className="icon" />
    //                 <div className="data">
    //                     <div className="humidity-percent">18km/h</div>
    //                     <div className="text">Wind Speed</div>
    //                 </div>
    //             </div>


    //         </div>
    //     </div>
    // );
}

export default WeatherApp;

