import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "SAT", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }
  return (
    <div className="forecast-day">
      <div className="day">{day()}</div>
      <Icon icon={props.data.weather[0].icon} size={75} />
      <div className="day-temps">
        <span className="day-temp-max">{Math.round(props.data.temp.max)}°</span>
        {"  "}
        <span className="day-temp-min">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
