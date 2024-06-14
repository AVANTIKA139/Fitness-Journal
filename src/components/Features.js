// import React from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// const Features = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div
//         style={{
//           alignItems: "center",
//           justifyContent: "center",
//           display: "flex",
//         }}
//       >
//         <Container style={{ paddingRight: "60rem" }}>
//           <Navbar
//             style={{ paddingRight: "60rem" }}
//             fixed="top"
//             expand="lg"
//             className="bg-body-tertiary"
//           >
//             <Container>
//               <IoFitnessSharp />
//               <Navbar.Brand
//                 onClick={() => navigate("/Fitnessjournal")}
//                 href="#"
//               >
//                 Fitnessjournal
//               </Navbar.Brand>
//             </Container>

//             <Container>
//               <Navbar.Brand onClick={() => navigate("/")} href="#">
//                 Home
//               </Navbar.Brand>
//             </Container>
//           </Navbar>
//         </Container>

//       </div>
//     </>
//   );
// };
// export default Features;
// src/components/FeaturePage.js
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./FeaturePage.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { IoFitnessSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const [workouts, setWorkouts] = useState([]);
  const [meals, setMeals] = useState([]);
  const [waterIntake, setWaterIntake] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [goals, setGoals] = useState([]);
  const navigate = useNavigate();

  const addWorkout = (e) => {
    e.preventDefault();
    const workout = e.target.elements.workout.value;
    setWorkouts([...workouts, workout]);
    e.target.elements.workout.value = "";
  };

  const addMeal = (e) => {
    e.preventDefault();
    const meal = e.target.elements.meal.value;
    setMeals([...meals, meal]);
    e.target.elements.meal.value = "";
  };

  const addGoal = (e) => {
    e.preventDefault();
    const goal = e.target.elements.goal.value;
    setGoals([...goals, goal]);
    e.target.elements.goal.value = "";
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

  const mealChartData = {
    labels: meals.map((_, index) => `Meal ${index + 1}`),
    datasets: [
      {
        label: "Meals",
        data: meals.map((_, index) => index + 1),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
      },
    ],
  };

  return (
    <>
      <Container style={{ paddingRight: "60rem" }}>
        //{" "}
        <Navbar
          style={{ paddingRight: "60rem" }}
          fixed="top"
          expand="lg"
          className="bg-body-tertiary"
        >
          <Container>
            <IoFitnessSharp />
            <Navbar.Brand onClick={() => navigate("/Fitnessjournal")} href="#">
              Fitnessjournal
            </Navbar.Brand>
          </Container>

          <Container>
            <Navbar.Brand onClick={() => navigate("/")} href="#">
              Home
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <div className="feature-page">
        <h1 style={{ paddingTop: "3rem" }}>Health Tracker Features</h1>

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

        <div className="feature-section">
          <h2>Diet Tracker</h2>
          <form onSubmit={addMeal}>
            <input type="text" name="meal" placeholder="Add Meal" />
            <button type="submit">Add Meal</button>
          </form>
          <ul>
            {meals.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
          <Line data={mealChartData} />
        </div>

        <div className="feature-section">
          <h2>Water Intake</h2>
          <button onClick={() => setWaterIntake(waterIntake + 1)}>
            Add Glass
          </button>
          <p>Glasses of water: {waterIntake}</p>
        </div>

        <div className="feature-section">
          <h2>Sleep Tracker</h2>
          <button onClick={() => setSleepHours(sleepHours + 1)}>
            Add Hour
          </button>
          <p>Hours of sleep: {sleepHours}</p>
        </div>

        <div className="feature-section">
          <h2>Goal Setting</h2>
          <form onSubmit={addGoal}>
            <input type="text" name="goal" placeholder="Add Goal" />
            <button type="submit">Add Goal</button>
          </form>
          <ul>
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Features;
