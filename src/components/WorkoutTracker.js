import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (e) => {
    e.preventDefault();
    const workout = e.target.elements.workout.value;
    setWorkouts([...workouts, workout]);
    e.target.elements.workout.value = "";
  };
  const workoutChartData = {
    labels: workouts.map((_, index) => `Workout ${index + 1}`),
    datasets: [
      {
        label: "Workouts",
        data: workouts.map((_, index) => index + 1),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <>
      <div className="feature-section">
        <h2>Workout Tracker</h2>
        <form onSubmit={addWorkout}>
          <input type="text" name="workout" placeholder="Add Workout" />
          <button type="submit">Add Workout</button>
        </form>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>{workout}</li>
          ))}
        </ul>
        <Line data={workoutChartData} />
      </div>
    </>
  );
};

export default WorkoutTracker;
