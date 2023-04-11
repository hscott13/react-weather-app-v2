import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <ul className="d-flex flex-column p-0 m-0">
      <li className="city-name fw-semibold">Glasgow, GB</li>
      <li className="date">10/04/2023</li>
      <li className="weather-main d-flex py-2 justify-content-center align-items-center">
        <i className="fa-solid fa-cloud px-3"></i>5°
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
