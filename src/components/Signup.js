import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { IoFitnessSharp } from "react-icons/io5";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [date, setdate] = useState("");
  const [number, setnumber] = useState("");
  const [isUnder18, setisUnder18] = useState(false);
  const [age, setage] = useState("");
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [medicalissues, setmedicalissues] = useState("");

  const handleRegister = async () => {
    try {
      if (name.trim() === "") return toast.warning("Please enter your name");
      if (password.trim() === "")
        return toast.warning("Please enter your password");
      if (email.trim() === "") return toast.warning("Please enter your email");
      if (date.trim() === "") return toast.warning("Please enter your date");

      if (!number) return toast.warning("Please enter your number");
      const response = await axios.post("/signup", {
        email: email,
        password: password,
        username: name,
        dob: date,
        phonenumber: number,
        isUnder18: isUnder18,
        age: age,
        weight: weight,
        height: height,
        medicalissues: medicalissues,
      });
      console.log(response);
      if (response.data.success) {
        toast.success("Successfully Registerd");
        navigate("/loginn");
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
      <ToastContainer />
      <div
        style={{
          marginTop: 0,
          backgroundImage:
            'url("https://t4.ftcdn.net/jpg/02/08/13/53/360_F_208135384_P3gpf2RVbAMvTcYo5LGK9gq98PZLNfcc.jpg")',
          backgroundPosition: "center",
          height: "100%",
          filter: "revert-layer",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-light p-2"
      >
        <Container style={{ paddingRight: "60rem" }}>
          <Navbar
            style={{ paddingRight: "60rem" }}
            fixed="top"
            expand="lg"
            className="bg-body-tertiary"
          >
            <Container>
              <IoFitnessSharp />
              <Navbar.Brand
                onClick={() => navigate("/Fitnessjournal")}
                href="#"
              >
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

        <h5
          style={{
            marginLeft: "540px",
            marginTop: "50px",
            fontSize: "50px",
            fontStyle: "bold",
            marginBottom: "50px",
            color: "black",
            textShadow: "revert-layer",
          }}
        >
          Register
        </h5>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label style={{ color: "black" }}>
                Enter your Name
              </Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={{ color: "black" }}>
                Enter your Email
              </Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="Email"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={{ color: "black" }}>
                {" "}
                Create your Password
              </Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridDateofBirth">
            <Form.Label style={{ color: "black" }}>
              Enter your Date of Birth
            </Form.Label>
            <Form.Control
              value={date}
              onChange={(e) => setdate(e.target.value)}
              type="date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridPhoneNumber">
            <Form.Label style={{ color: "black" }}>
              Enter your Phone Number
            </Form.Label>
            <Form.Control
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              type="number"
              size="4"
              placeholder="XXXXXXXXXX"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAge">
            <Form.Label style={{ color: "black" }}>Enter your Age</Form.Label>
            <Form.Control
              value={age}
              onChange={(e) => setage(e.target.value)}
              type="age"
              placeholder="Enter age"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridWeight">
            <Form.Label style={{ color: "black" }}>
              Enter your weight
            </Form.Label>
            <Form.Control
              value={weight}
              onChange={(e) => setweight(e.target.value)}
              type="weight"
              placeholder="Enter weight in kg"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridHeight">
            <Form.Label style={{ color: "black" }}>
              Enter your height
            </Form.Label>
            <Form.Control
              value={height}
              onChange={(e) => setheight(e.target.value)}
              type="height"
              placeholder="Enter height"
            />
          </Form.Group>
          <Form.Group
            style={{ color: "black" }}
            className="mb-3"
            id="formGridCheckbox"
          >
            <Form.Check
              checked={medicalissues}
              onChange={(e) => setmedicalissues(e.target.checked)}
              type="checkbox"
              label="Any medical issues?"
            />
          </Form.Group>
          <Form.Group
            style={{ color: "black" }}
            className="mb-3"
            id="formGridCheckbox"
          >
            <Form.Check
              checked={isUnder18}
              onChange={(e) => setisUnder18(e.target.checked)}
              type="checkbox"
              label="Are you under 18?"
            />
          </Form.Group>
          <Button
            onClick={() => handleRegister()}
            style={{ marginBottom: "50px" }}
            variant="success"
          >
            Sign In
          </Button>{" "}
          {/* <button
            
            class="button-40"
            type="button"
          >
            <span class="text">Sign in</span>
          </button> */}
          <Button
            onClick={() => navigate("/loginn")}
            style={{ marginBottom: "50px" }}
            variant="outline-warning"
          >
            Already Registered
          </Button>{" "}
        </Form>
      </div>
    </>
  );
};
export default Signup;
