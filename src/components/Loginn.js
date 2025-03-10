import React from "react";

import axios from "axios";
import { FaUser, FaLock, FaDumbbell, FaHome } from "react-icons/fa";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import { IoFitnessSharp } from "react-icons/io5";
// import Image from 'react-bootstrap/Image';

const Loginn = () => {
  const navigate = useNavigate();
  // const [isOtpSent, setisOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [otp, setotp] = useState(null);
  const handleLoginn = async () => {
    try {
      if (email.trim() === "") return toast.warning("Please enter your email");
      if (password.trim() === "")
        return toast.warning("Please enter your password");
      const response = await axios.post("/login", {
        useremail: email,
        userpassword: password,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        // setisOtpSent(true);
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
    navigate("/Profile");
  };
  return (
    <>
      {/* <Container style={{ paddingRight: "60rem" }}>
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

      <ToastContainer />
      <Image style={{width:"434px"}} />;


      <div className="main">
        <div className="wrapper">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input
                autoComplete="false"
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <input
                autoComplete="false"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#">forgot Password</a>
            </div>
            <button
              type="button"
              onClick={() => {
                handleLoginn();
              }}
            >
              Login
            </button>
            <div className="register-link">
              <p>
                Don't have an account?
                <a href="#" onClick={() => navigate("/signup")}>
                  Register{" "}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div> */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontFamily: "Arial, sans-serif",
          color: "#fff",
          padding: "0 10%",
          position: "relative",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            background: "#f39c12",
            border: "none",
            padding: "10px 15px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            color: "#000",
            zIndex: 10,
          }}
        >
          <FaHome style={{ marginRight: "8px" }} /> Home
        </button>

        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div
          style={{
            background: "rgba(0, 0, 0, 0.75)",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            width: "400px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaDumbbell
            size={50}
            color="#f39c12"
            style={{ marginBottom: "15px" }}
          />
          <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
            Welcome to Fitness Journal
          </h2>
          <form onSubmit={handleLoginn}>
            <div style={{ position: "relative", marginBottom: "15px" }}>
              <FaUser
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#f39c12",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 45px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "16px",
                  background: "#222",
                  color: "#fff",
                }}
              />
            </div>
            <div style={{ position: "relative", marginBottom: "20px" }}>
              <FaLock
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#f39c12",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 45px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "16px",
                  background: "#222",
                  color: "#fff",
                }}
              />
            </div>
            <button
              onClick={() => {
                handleLoginn();
              }}
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#f39c12",
                color: "#000",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
                textTransform: "uppercase",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e67e22")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#f39c12")}
            >
              Login
            </button>
          </form>
          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            Don't have an account?{" "}
            <span
              style={{ color: "#f39c12", cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Loginn;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// toast.configure();

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!email) {
//       toast.error("Email is required");
//       return;
//     }
//     if (!password) {
//       toast.error("Password is required");
//       return;
//     }
//     toast.success("Login successful!");
//     navigate("/profile");
//   };

//   return (

//   );
// }
