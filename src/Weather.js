import React from "react";

export default function Weather() {
  return (
    <div className="container">
      <ul className="d-flex flex-column">
        <li>Glasgow, GB</li>
        <li>10/04/2023</li>
        <li className="d-flex">
          5°<i class="fa-solid fa-cloud"></i>
          <div className="d-flex flex-column">
            <button>C</button>
            <button>F</button>
          </div>
        </li>
        <li>Cloudy</li>
        <li className="weather-info d-flex">
          <div>Feels like: 3°</div>
          <div>Clouds: 60%</div>
          <div>Visibility: 50%</div>
          <div>Wind Speed:5k/m</div>
        </li>
      </ul>
    </div>
  );
}
