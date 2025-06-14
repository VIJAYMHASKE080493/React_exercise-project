import React from "react";

function NumberInput1({ value, onChange }) {
  return (
    <div>
      <label>Number 1: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default NumberInput1;
