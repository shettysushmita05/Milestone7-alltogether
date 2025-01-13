// Task7Counter.js
import React, { useState } from "react";
import "./Task7.css"; // Add appropriate styles

const Task7Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="task7-container">
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() =>{ if (count > 0) { setCount(count - 1) ; } }} disabled={count === 0} >Decrease</button>
      
      {/* <button onClick={() => setCount(count - 1)}>Decrease</button> */}



    </div>
  );
};

export default Task7Counter;
