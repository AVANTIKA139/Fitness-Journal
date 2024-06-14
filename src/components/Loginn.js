import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import "./loginn.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
      <ToastContainer />
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
      </div>
    </>
  );
};
export default Loginn;
