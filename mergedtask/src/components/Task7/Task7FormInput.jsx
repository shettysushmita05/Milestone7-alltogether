// Task7FormInput.js
import React, { useState } from "react";
import "./Task7.css"; // Add appropriate styles

const Task7FormInput = () => {
  const [text, setText] = useState("");

  return (
    <div className="task7-container">
      <h2>Form Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <p>Entered Text: {text}</p>
    </div>
  );
};

export default Task7FormInput;
