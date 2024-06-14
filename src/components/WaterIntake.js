// src/components/WaterIntake.js
import React, { useState } from 'react';

const WaterIntake = () => {
  const [glasses, setGlasses] = useState(0);

  return (
    <div>
      <h2>Water Intake</h2>
      <button onClick={() => setGlasses(glasses + 1)}>Add Glass</button>
      <p>Glasses of water: {glasses}</p>
    </div>
  );
};

export default WaterIntake;
