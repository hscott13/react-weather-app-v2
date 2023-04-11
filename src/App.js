import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";
export default function App() {
  let [weatherData, setweatherData] = useState({ ready: false });

  function getWeather(response) {
    console.log(response);
    setweatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: "11/04/23",
      temp: response.data.main.temp,
      description: response.data.weather[0].main,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      clouds: response.data.clouds.all,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-6 px-5 d-flex flex-column align-items-center justify-content-center">
              <h1>What's the weather like in... </h1>
              <form>
                <input
                  type="search"
                  className="border border-0 fs-5"
                  placeholder="Enter a city"
                />
                <button
                  className="button-form border border-0 bg-transparent"
                  type="submit"
                >
                  <i className="fa-solid fa-magnifying-glass fs-5"></i>
                </button>
              </form>
            </div>
            <div className="col-6 d-flex flex-column align-items-center">
              <Weather weather={weatherData} />
            </div>
          </div>
        </div>
        <div>
          Open-sourced on{" "}
          <a
            href="https://github.com/hscott13/react-weather-app-v2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , coded by{" "}
          <a
            href="https://celebrated-arithmetic-8e4959.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Heather Scott
          </a>
        </div>
      </div>
    );
  } else {
    let city = "London";
    const apiKey = "6e6ec494746b5229a9f2d526478c924c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getWeather);
    return "Thinking about it...";
  }
}
