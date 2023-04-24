import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  function handleClick() {
    setHeading("Welcome");
  }

  const [change, setChange] = useState("submit");
  const [isMouseOver, setStyling] = useState(false);
  function handleMouseOver() {
    setChange("Submited");
    setStyling(true);
  }

  function handleMouseOut() {
    setChange("Submit");
    setStyling(false);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {change}
      </button>
    </div>
  );
}

export default App;
