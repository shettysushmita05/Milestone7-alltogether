import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My App</h1>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
