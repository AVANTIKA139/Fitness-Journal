import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Loginn from "./components/Loginn";
import Profile from "./components/Profile";
import Signup from "./components/Signup";

import NotFound from "./components/NotFound";

import Contactus from "./components/Contactus";
import Fitnessjournal from "./components/Fitnessjournal";
import Features from "./components/Features";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Features" Component={Features} />

          <Route path="/Fitnessjournal" Component={Fitnessjournal} />
          <Route path="/Contactus" Component={Contactus} />

          <Route path="/loginn" Component={Loginn} />
          <Route path="/signup" Component={Signup} />
          <Route path="/Profile" Component={Profile} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
