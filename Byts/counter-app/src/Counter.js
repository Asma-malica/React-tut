import React, { useState } from "react";

const Counter = () => {
  let initialCount = 0;
  const [state, setCount] = useState(initialCount);

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={() => setCount(state - 1)}>-</button>
      <button onClick={() => setCount(state + 1)}>+</button>
      <button style={{ width: "160px" }} onClick={() => setCount(initialCount)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;