import React from "react";
import useToggle from "./hooks/useToggle";
const Toggler = () => {
  const [isHappy, toggleIsHappy] = useToggle(true);

  return (
    <div>
      <h1>{isHappy ? "happy" : "sad"} </h1>
      <button onClick={toggleIsHappy}>Click</button>
    </div>
  );
};

export default Toggler;
