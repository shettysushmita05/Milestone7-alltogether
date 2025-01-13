import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../../features/counterSlice";
import "./Task6.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="count">Counter: {count}</h1>
      <div className="counter-buttons">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button
          onClick={() => {
            if (count > 0) {
              dispatch(decrement());
            }
          }}
          disabled={count === 0} // Disable button if count is 0
        >
          Decrement
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
