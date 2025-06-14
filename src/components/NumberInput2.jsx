import React from "react";

function NumberInput2({ value, onChange }) {
  return (
    <div>
      <label>Number 2: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default NumberInput2;
