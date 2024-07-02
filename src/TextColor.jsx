import React, { useState } from "react";

const TextColor = () => {
  // Initialize the car state with an object containing 5 properties
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    colorName: "Silver",
    bgColor: "bg-zinc-300",
  });

  const toggleBgColor =
    car.bgColor === "bg-zinc-300" ? "bg-yellow-500" : "bg-zinc-300";
  const toggleColorName = car.colorName === "Silver" ? "Gold" : "Silver";

  const changeColor = () => {
    setCar((prevCar) => ({
      ...prevCar, // passes unchanged values
      bgColor: toggleBgColor,
      colorName: toggleColorName,
    }));
  };

  return (
    <div className="w-screen">
      <h2>{car.brand}</h2>
      <p>
        It's a <span className={`${car.bgColor}`}>{car.colorName}</span>{" "}
        {car.model} from the year {car.year}.
      </p>
      <button className={`${toggleBgColor}`} onClick={changeColor}>
        Also available in {toggleColorName}
      </button>
    </div>
  );
};

export default TextColor;
