import React, { useState } from 'react';
// import '../styles/DeepSpace.css';
import "./DeepSpace.css";
const deepSpaceObjects = [
  { name: 'Black Hole', description: 'A region of spacetime where gravity is so strong that nothing can escape from it.' },
  { name: 'Nebula', description: 'A giant cloud of dust and gas in space.' },
  { name: 'Galaxy', description: 'A huge collection of gas, dust, and billions of stars and their solar systems.' },
  { name: 'Quasar', description: 'An extremely luminous active galactic nucleus.' },
];

const DeepSpace = () => {
  const [selectedObject, setSelectedObject] = useState(null);

  return (
    <div className="deep-space">
      <h2>Deep Space Objects</h2>
      <div className="object-container">
        {deepSpaceObjects.map((object, index) => (
          <div
            key={object.name}
            className={`space-object object-${index + 1}`}
            onClick={() => setSelectedObject(object)}
          >
            {object.name}
          </div>
        ))}
      </div>
      {selectedObject && (
        <div className="object-info">
          <h3>{selectedObject.name}</h3>
          <p>{selectedObject.description}</p>
        </div>
      )}
    </div>
  );
};

export default DeepSpace;

