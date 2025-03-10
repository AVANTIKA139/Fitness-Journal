import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUserCircle,
  FaTint,
  FaBed,
  FaUtensils,
  FaDumbbell,
} from "react-icons/fa";

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
      {/* <div className="mainbody">
        <h1>Hello {userdata.name}, Welcome Back!</h1>
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
      </div> */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "url('https://source.unsplash.com/1600x900/?fitness,gym') no-repeat left center/cover",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          color:"white",
        }}
      >
        <div
          style={{
            // background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            // padding: "25px",
            // borderRadius: "15px",
            // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            // textAlign: "center",
            maxWidth: "400px",
            // width: "100%",
            background: "rgba(0, 0, 0, 0.75)",
            padding: "40px",
            borderRadius: "120px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            width: "400px",
            textAlign: "center",
          }}
        >
          <FaUserCircle
            size={120}
            
            style={{ marginBottom: "15px", display: "block", margin: "0 auto", 
              color: "white"}}
          />
          <h2> Hello {userdata.name}, Welcome back!</h2>
          <p
            style={{ fontSize: "14px", color: "white", marginBottom: "15px" }}
          ></p>

          <div style={{ fontSize: "16px", color: "whitesmoke" }}>
            <p>Email: {userdata.email}</p>
            <p>Phone: {userdata.phonenumber}</p>
            <p>Height: {userdata.height} cm</p>
            <p>Weight: {userdata.weight} kg</p>
            <p>
              Age :
              {new Date().getFullYear() - new Date(userdata.dob).getFullYear()}{" "}
              years
            </p>
          </div>
          <button
            onClick={() => handleLogout()}
            style={{
             backgroundColor: "#f39c12",
                color: "#000",
              padding: "12px 18px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "0.3s",
              marginTop: "10px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#c9302c")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#d9534f")}
          >
            Log Out
          </button>
        </div>

        <div style={{ display: "flex", gap: "20px", marginTop: "25px" }}>
          {[
            {
              title: "Workout Tracker",
              icon: <FaDumbbell size={25} color="#ff5733" />,
            },
            {
              title: "Water Intake",
              icon: <FaTint size={25} color="#007BFF" />,
            },
            {
              title: "Sleep Tracker",
              icon: <FaBed size={25} color="#673AB7" />,
            },
            {
              title: "Diet Tracker",
              icon: <FaUtensils size={25} color="#4CAF50" />,
            },
          ].map((stat, index) => (
            <button
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                padding: "15px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                width: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#ddd";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                e.target.style.transform = "scale(1)";
              }}
            >
              {stat.icon}
              <p style={{ marginTop: "8px" }}>{stat.title}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
