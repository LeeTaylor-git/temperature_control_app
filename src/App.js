/*
 * Project Name: Temperature Control App
 * Author: Taylor Lee
 * Last modified: September 30th, 2022
 * Desc: You will build a temperature control app where users can increment/decrement temperature and the
 * background color changes based on temperature.
*/

//import statements
import React, { useState } from "react";
import "./index.css";

const App = () => {
  //This line sets the starting temp to 50 degrees
  const [tempValue, setTempValue] = useState(50);
  //This line sets the starting color to cold
  const [tempColor, setTempColor] = useState("cold");

  //This is the function to increase the temp
  const increaseTemp = () => {
    //This line stops the temp from exceeding 110 degrees
    if (tempValue === 110) return;

    //This line add the value of 5 degrees everytime the increase button is pressed
    const newTemp = tempValue + 5;

    //This is a collection of if statments to change the background when the temperature increases
    setTempValue(newTemp);
    if (newTemp >= 35 && newTemp < 70) {
    setTempColor("cold");
    } if (newTemp >= 70 && newTemp < 85) {
      setTempColor("warm");
    } if (newTemp >= 85 && newTemp < 100) {
      setTempColor("hot");
    } if (newTemp >= 100) {
      setTempColor("hotter");
    }
  };
  
  //This is the function to decrease the temp
  const decreaseTemp = () => {
    //This line stops the temp from going lower thann0 degrees
    if (tempValue === 0) return;

    //This line subtracts the value of 5 degrees everytime the decrease button is pressed    
    const newTemp = tempValue - 5;
    setTempValue(newTemp);
    
    //This is a collection of if statments to change the background when the temperature decreases 
    if (newTemp < 100 && newTemp >= 85) {
      setTempColor("hot");
    }  if (newTemp < 85 && newTemp >= 70 ) {
        setTempColor("warm");
    } if (newTemp < 70 && newTemp >= 35) {
      setTempColor("cold");
    } if (newTemp < 35) {
      setTempColor("colder");
    }
  };

  //This is the return function
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>
          {tempValue}°F
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
};

export default App;