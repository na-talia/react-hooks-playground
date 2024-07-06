import React, { useEffect, useRef, useState } from "react";

const MyInput = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current++;
  }, [value]);

  return (
    <div>
      <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
      <h2>{value}</h2>
      <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
      <h2>Render {count.current} times</h2>
    </div>
  );
};

export default MyInput;
