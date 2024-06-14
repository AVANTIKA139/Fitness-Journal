// src/components/DietTracker.js
import React, { useState } from 'react';

const DietTracker = () => {
  const [meals, setMeals] = useState([]);

  const addMeal = (meal) => {
    setMeals([...meals, meal]);
  };

  return (
    <div>
      <h2>Diet Tracker</h2>
      <button onClick={() => addMeal('Breakfast')}>Add Breakfast</button>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
};

export default DietTracker;
