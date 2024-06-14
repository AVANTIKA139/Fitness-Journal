import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Profile = () => {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState({});
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getUserData = async () => {
    try {
      const response = await axios.get("/currentuser");
      if (response.data.success) {
        setuserdata(response.data.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Session timed out! Login again");
        navigate("/Loginn");
      } else if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("/logout");
      if (response.data.success) {
        toast.success("You were logged out successfully!");
        navigate("/Loginn");
      }
    } catch (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  };

  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="Workout Tracker" title="Workout Tracker">
          Tab content for Workout Tracker
        </Tab>
        <Tab eventKey="Diet Tracker" title="Diet Tracker">
          Tab content for Diet Tracker
        </Tab>
        <Tab eventKey="Water Intake" title="Water Intake">
          Tab content for Water Intake
        </Tab>
        <Tab eventKey="Sleep Tracker" title="Sleep Tracker" disabled>
          Tab content for Sleep Tracker
        </Tab>
        <Tab eventKey="Goal Setting" title="Goal Setting">
          Tab content for Goal Setting
        </Tab>
      </Tabs>
      <div className="mainbody">
        <h1>Hello {userdata.username}, Welcome Back!</h1>
        <p>
          Age :{new Date().getFullYear() - new Date(userdata.dob).getFullYear()}{" "}
          years
        </p>
        <p>email : {userdata.email}</p>
        <p>Under 18? : {userdata.isUnder18 ? "Yes" : "No"}</p>
        <p>Phone number : {userdata.phonenumber} </p>
        <p>weight : {userdata.weight} </p>
        <p>height : {userdata.height} </p>
        <button type="button" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;
