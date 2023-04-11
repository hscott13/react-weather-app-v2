import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <ul className="d-flex flex-column p-0 m-0">
      <li className="city-name fw-semibold">
        {props.weather.city}, {props.weather.country}
      </li>
      <li className="date">{props.date}</li>
      <li className="weather-main d-flex py-2 justify-content-center align-items-center">
        <i className="fa-solid fa-cloud px-3"></i>
        {Math.round(props.weather.temp)}°
        <div className="temp-buttons d-flex flex-column fs-5">
          <button className="active">C</button>
          <button>F</button>
        </div>
      </li>
      <li className="weather-description">{props.weather.description}</li>
      <li>
        <div className="weather-info ">
          <div>Feels like: {props.weather.feels}°</div>
          <div>Humidity: {props.weather.humidity}%</div>
          <div>Clouds: {props.weather.clouds}%</div>
          <div>Wind Speed: {props.weather.wind}k/m</div>
        </div>
      </li>
    </ul>
  );
}
