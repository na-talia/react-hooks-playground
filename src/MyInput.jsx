import React, { useEffect, useRef, useState } from "react";

const MyInput = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  const inputElement = useRef();

  useEffect(() => {
    count.current++;
  }, [value]);

  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.background = "red"; // change color when button is clicked
  };

  return (
    <div>
      <button onClick={() => setValue((prev) => prev + 1)}>+1</button>
      <h2>{value}</h2>
      <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
      <h2>Render {count.current} times</h2>
      <input
        className="border border-gray-300 "
        type="text"
        ref={inputElement}
      />
      <button onClick={btnClicked}>Click me</button>
    </div>
  );
};

export default MyInput;
