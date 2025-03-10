import React from "react";




import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Route, Routes,  BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Loginn from "./components/Loginn";
import Profile from "./components/Profile";
import Signup from "./components/Signup";

import NotFound from "./components/NotFound";

import Contactus from "./components/Contactus";
import Fitnessjournal from "./components/Fitnessjournal";
import Features from "./components/Features";
import WaterIntake from "./components/WaterIntake";
import WorkoutTracker from "./components/WorkoutTracker";
import DietTracker from "./components/DietTracker";

import SleepTracker from "./components/SleepTracker";
import GoalSetting from "./components/GoalSetting";

const App = () => {
  return (
    <>
      <Router>
    
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Features" Component={Features} />

          <Route path="/Fitnessjournal" Component={Fitnessjournal} />
          <Route path="/Contactus" Component={Contactus} />

          

          <Route path="/Loginn" Component={Loginn} />
          <Route path="/signup" Component={Signup} />
          <Route path="/Profile" Component={Profile} />
          <Route path="*" Component={NotFound} />
          <Route path="/workout-tracker" component={WorkoutTracker} />
          <Route path="/diet-tracker" component={DietTracker} />
          <Route path="/water-intake" component={WaterIntake} />
          <Route path="/sleep-tracker" component={SleepTracker} />
          <Route path="/goal-setting" component={GoalSetting} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
