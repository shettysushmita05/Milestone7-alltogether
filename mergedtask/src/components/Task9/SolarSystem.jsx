import React, { useState } from 'react';
import "./SolarSystem.css";

const planets = [
  { name: 'Mercury', description: 'The smallest planet in our solar system.' },
  { name: 'Venus', description: 'Often called Earth\'s twin due to its similar size.' },
  { name: 'Earth', description: 'Our home planet, teeming with life.' },
  { name: 'Mars', description: 'The Red Planet, target for future human exploration.' },
  { name: 'Jupiter', description: 'The largest planet in our solar system.' },
  { name: 'Saturn', description: 'Known for its beautiful ring system.' },
  { name: 'Uranus', description: 'An ice giant with a tilted axis of rotation.' },
  { name: 'Neptune', description: 'The windiest planet in our solar system.' },
];

const SolarSystem = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="solar-system">
      <h2>Solar System Explorer</h2>
      <div className="planet-container">
        {planets.map((planet, index) => (
          <div
            key={planet.name}
            className={`planet planet-${index + 1}`}
            onClick={() => setSelectedPlanet(planet)}
          >
            {planet.name}
          </div>
        ))}
      </div>
      {selectedPlanet && (
        <div className="planet-info">
          <h3>{selectedPlanet.name}</h3>
          <p>{selectedPlanet.description}</p>
        </div>
      )}
    </div>
  );
};

export default SolarSystem;

