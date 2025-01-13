import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Galactic Explorer</h1>
      <p>Embark on a journey through the cosmos and discover the wonders of our universe.</p>
      <div className="space-animation">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
    </div>
  );
};

export default Home;

