import React, { useState } from "react";
import NumberInput1 from "./NumberInput1";
import NumberInput2 from "./NumberInput2";

function ParentComponent() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sum = Number(num1) + Number(num2);

  return (
    <div>
      <NumberInput1 value={num1} onChange={setNum1} />
      <NumberInput2 value={num2} onChange={setNum2} />
      <h3>Sum: {sum}</h3>
    </div>
  );
}

export default ParentComponent;
