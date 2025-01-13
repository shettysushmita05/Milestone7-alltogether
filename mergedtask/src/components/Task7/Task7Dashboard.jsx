// Task7Dashboard.js
// import React from "react";
// import Task7Counter from "./Task7Counter";
// import Task7FormInput from "./Task7FormInput";
// import Task7Timer from "./Task7Timer";

import Task7FormInput from "./Task7FormInput";
import Task7Counter from "./Tasks7Counter";
import Timer from "./Timer";

const Task7Dashboard = () => {
  return (
    <div className="task7-dashboard">
      <h1>Task 7: React Hooks</h1>
      {/* <Task7Counter />
      <Task7FormInput />
      <Task7Timer /> */}
      <Task7Counter />
      <Task7FormInput />
      <Timer />
    </div>
  );
};

export default Task7Dashboard;
