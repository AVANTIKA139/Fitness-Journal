// src/components/SleepTracker.js
import React, { useState } from 'react';

const SleepTracker = () => {
  const [hours, setHours] = useState(0);

  return (
    <div>
      <h2>Sleep Tracker</h2>
      <button onClick={() => setHours(hours + 1)}>Add Hour</button>
      <p>Hours of sleep: {hours}</p>
    </div>
  );
};

export default SleepTracker;
