import React, { useState } from "react";

// Change color when clicking on a button

const BackgroundColor = () => {
  const [color, setColor] = useState("bg-green-500");

  const changeColor = () => {
    setColor((selectedColor) =>
      selectedColor === "bg-blue-500" ? "bg-green-500" : "bg-blue-500"
    );
  };

  return (
    <div
      className={`w-screen h-40 ${color} flex flex-col items-center justify-center`}
    >
      <h2>My background is {color === "bg-green-500" ? "Green" : "Blue"}</h2>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default BackgroundColor;
