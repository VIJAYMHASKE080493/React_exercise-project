import React, { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";

// conversion functions
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function TemperatureConverter() {
  const [temperature, setTemperature] = useState(""); // number
  const [scale, setScale] = useState("c"); // "c" or "f"

  // input change handlers
  const handleCelsiusChange = (value) => {
    setTemperature(value);
    setScale("c");
  };

  const handleFahrenheitChange = (value) => {
    setTemperature(value);
    setScale("f");
  };

  // convert value according to scale
  const celsius = scale === "f" ? toCelsius(parseFloat(temperature) || 0).toFixed(2) : temperature;
  const fahrenheit = scale === "c" ? toFahrenheit(parseFloat(temperature) || 0).toFixed(2) : temperature;

  return (
    <div>
      <CelsiusInput value={celsius} onTemperatureChange={handleCelsiusChange} />
      <FahrenheitInput value={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
    </div>
  );
}

export default TemperatureConverter;
