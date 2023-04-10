import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <ul className="d-flex flex-column">
      <li className="city-name">Glasgow, GB</li>
      <li className="date">10/04/2023</li>
      <li className="weather-main d-flex justify-content-center align-items-center">
        5°<i className="fa-solid fa-cloud"></i>
        <div className="temp-buttons d-flex flex-column fs-5">
          <button>C</button>
          <button>F</button>
        </div>
      </li>
      <li className="weather-description">Cloudy</li>
      <li>
        <div className="weather-info ">
          <div>Feels like: 3°</div>
          <div>Clouds: 60%</div>
          <div>Visibility: 50%</div>
          <div>Wind Speed:5k/m</div>
        </div>
      </li>
    </ul>
  );
}
