import React, { useState } from "react";
import "./Weather.css";
import DateFormat from "./DateFormat";
import Icon from "./Icon";
import MainTemperature from "./Temperature";

export default function Weather(props) {
  const [unit, setUnit] = useState("celsius");
  let feelsLike =
    unit === "celsius"
      ? Math.round(props.weather.feels)
      : Math.round((props.weather.feels * 9) / 5 + 32);

  return (
    <ul className="d-flex flex-column p-0 m-0">
      <li className="city-name fw-semibold">
        {props.weather.city}, {props.weather.country}
      </li>
      <li className="date">
        <DateFormat date={props.weather.date} />
      </li>
      <li className="weather-main d-flex py-2 justify-content-center align-items-center">
        <Icon icon={props.weather.icon} size={110} />
        <MainTemperature
          unit={unit}
          setUnit={setUnit}
          celsius={props.weather.temp}
        />
      </li>
      <li className="weather-description text-capitalize">
        {props.weather.description}
      </li>
      <li>
        <div className="weather-info ">
          <div>Feels like: {feelsLike}°</div>
          <div>Humidity: {props.weather.humidity}%</div>
          <div>Cloud Cover: {props.weather.clouds}%</div>
          <div>Wind Speed: {Math.round(props.weather.wind)}m/s</div>
        </div>
      </li>
    </ul>
  );
}
