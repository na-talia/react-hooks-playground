import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [
    count,
  ]); /* BAD Practice: without dependencies - increases by 1 countless times. 
        Runs the effect on every render, creating multiple setTimeout calls.

        BAD Practice: with "count" dependency - increases by 1 countless times.
        Controlling the interval better but still causing an infinite loop. 
        
        RECOMMENDED practice: with empty dependencies - increase by 1 only once. */

  return (
    <div className="mt-10">
      <p>I've rendered {count} times</p>
    </div>
  );
};

export default Counter;
