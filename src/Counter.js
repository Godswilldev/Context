import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(10);
  const handleClick = () => setCount(count + 10);

  return (
    <div>
      <h1>Count is: {count} </h1>
      <button onClick={handleClick}>Count</button>
    </div>
  );
};

export default Counter;
