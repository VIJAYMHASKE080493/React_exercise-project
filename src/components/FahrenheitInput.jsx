import React from "react";

function FahrenheitInput({ value, onTemperatureChange }) {
  return (
    <div>
      <label>Fahrenheit: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}

export default FahrenheitInput;
