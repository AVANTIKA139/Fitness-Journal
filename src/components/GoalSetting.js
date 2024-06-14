// src/components/GoalSetting.js
import React, { useState } from 'react';

const GoalSetting = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <div>
      <h2>Goal Setting</h2>
      <button onClick={() => addGoal('New Goal')}>Add Goal</button>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalSetting;
