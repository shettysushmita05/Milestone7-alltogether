import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";
import "./Task6.css";
import "../../App.css";
const ThemeToggle = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h1>Theme Toggle</h1>
      <button className="theme" onClick={() => dispatch(toggleTheme())}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
