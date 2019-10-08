import React, { useState } from "react";

export default function Temperature() {
  const [temperature, setTemperature] = useState("");

  function getTemperature(e) {
    const value = e.target.value;
    setTemperature(value);
  }

  function temperatureStyle() {
    let color;
    let text;
    if (!temperature) {
      text = "Waiting for the temperature";
      color = "green";
    } else if (temperature <= 0) {
      text = "It's freezing!";
      color = "dodgerblue";
    } else if (temperature <= 10) {
      text = "It's cold!";
      color = "blue";
    } else if (temperature > 10 && temperature <= 30) {
      text = "It's nice!";
      color = "black";
    } else if (temperature > 30) {
      text = "It's hot!";
      color = "red";
    }
    return <div style={{ color: color }}>{text}</div>;
  }

  return (
    <div className="container">
      <h1>Temperature</h1>
      <input type="number" onChange={getTemperature} />
      {temperatureStyle()}
    </div>
  );
}
