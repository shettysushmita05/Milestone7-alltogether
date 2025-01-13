import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Navbar.css';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" exact>
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/products" className="nav-link">
        Products
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
