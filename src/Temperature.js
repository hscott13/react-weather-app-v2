import React from "react";
import "./Temperature.css";

export default function MainTemperature(props) {
  function convertToFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <div className="d-flex  flex-row align-items-center">
        {Math.round(props.celsius)}°
        <div className="temp-buttons d-flex flex-column fs-5">
          <button className="active" onClick={convertToCelsius}>
            C
          </button>
          <button onClick={convertToFahrenheit}> F</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex  flex-row align-items-center">
        {Math.round(fahrenheit())}°
        <div className="temp-buttons d-flex flex-column fs-5">
          <button onClick={convertToCelsius}>C</button>
          <button className="active" onClick={convertToFahrenheit}>
            {" "}
            F
          </button>
        </div>
      </div>
    );
  }
}
