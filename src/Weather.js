import React from "react";
import "./Weather.css";
import DateFormat from "./DateFormat";
import Icon from "./Icon";
import MainTemperature from "./Temperature";

export default function Weather(props) {
  return (
    <ul className="d-flex flex-column p-0 m-0">
      <li className="city-name fw-semibold">
        {props.weather.city}, {props.weather.country}
      </li>
      <li className="date">
        <DateFormat date={props.weather.date} />
      </li>
      <li className="weather-main d-flex py-2 justify-content-center align-items-center">
        <Icon icon={props.weather.icon} />
        <MainTemperature celsius={props.weather.temp} />
      </li>
      <li className="weather-description text-capitalize">
        {props.weather.description}
      </li>
      <li>
        <div className="weather-info ">
          <div>Feels like: {Math.round(props.weather.feels)}°</div>
          <div>Humidity: {props.weather.humidity}%</div>
          <div>Clouds: {props.weather.clouds}%</div>
          <div>Wind Speed: {Math.round(props.weather.wind)}m/s</div>
        </div>
      </li>
    </ul>
  );
}
