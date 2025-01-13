import React from "react";
import "./Task4.css";
import "../../App.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/task4/login" target="_blank" rel="noopener noreferrer">Task 4: Login</a></li>
        <li><a href="/task4/register" target="_blank" rel="noopener noreferrer">Task 4: Register</a></li>
        <li><a href="/task4/profile" target="_blank" rel="noopener noreferrer">Task 4: Profile</a></li>
        <li><a href="/task6/counter" target="_blank" rel="noopener noreferrer">Task 6: Counter</a></li>
        <li><a href="/task6/todolist" target="_blank" rel="noopener noreferrer">Task 6: Todo List</a></li>
        <li><a href="/task6/theme-toggle" target="_blank" rel="noopener noreferrer">Task 6: Theme Toggle</a></li>
        <li><a href="/task7" target="_blank" rel="noopener noreferrer">Task 7</a></li>
        <li><a href="/task8/admin-dashboard" target="_blank" rel="noopener noreferrer">Task 8: Admin,manager,user Dashboard</a></li>
        {/* <li>
          <a href="/task8/manager-dashboard" target="_blank" rel="noopener noreferrer">Task8- manager Dashboard</a>
        </li> */}
        {/* <li>
          <a href="/task8/user-dashboard" target="_blank" rel="noopener noreferrer">task8- user Dashboard</a>
        </li> */}
        {/* <li>
          <a href="/task9" target="_blank" rel="noopener noreferrer">Task 9: Home</a>
        </li>
        <li><a href="/task9/feature-a" target="_blank" rel="noopener noreferrer">Task 9: Feature A</a></li>
        <li><a href="/task9/feature-b" target="_blank" rel="noopener noreferrer">Task 9: Feature B</a></li> */}
        <li>
          <a href="task9" target="_blank" rel="noopener noreferrer">Task 9</a>
        </li>
        <li>
          <a href="/solar-system" target="_blank" rel="noopener noreferrer">Solar Syatem</a>
        </li>
        <li>
          <a href="/deep-space" target="_blank" rel="noopener noreferrer">Deep Space</a>
        </li>
        {/* <li>
          <a href="/s3-uploader" target="_blank" rel="noopener noreferrer">Task5</a>
        </li> */}
        
      </ul>
    </nav>
  );
};

export default Navbar;
