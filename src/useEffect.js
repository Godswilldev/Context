import React, { useState, useEffect } from "react";

const useEfect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => (document.title = `You click ${count} times`));
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};

export default useEfect;
