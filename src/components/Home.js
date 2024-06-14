import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { IoFitnessSharp } from "react-icons/io5";

import Navbar from "react-bootstrap/Navbar";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Figure from "react-bootstrap/Figure";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          fontFamily: "Montserrat",

          backgroundImage: `url('https://img.freepik.com/premium-vector/heart-rate-monitoring-app-concept-girl-with-smart-watch-her-hand-runs-near-huge-smartphone_202279-186.jpg')`,

          height: "auto" /* Maintain aspect ratio */,
          filter: "brightness(110%) contrast(110%)" /* Adjust filters */,
          imageRendering: "pixelated",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          opacity: "1.5rem",
        }}
      >
        <div
        // style={{
        //   backgroundColor: "orchid",
        //   height: "100vh",
        //   marginTop: 0,
        //   border: "10px solid black",
        //   padding: "55px",
        //   lineHeight: 2,
        //   backgroundImage:
        //     'url("https://images.freecreatives.com/wp-content/uploads/2016/04/Free-Website-BAckgrounds1.jpg")',
        // }}
        >
          <Navbar
            style={{
              backgroundImage: `url()`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url('https://img.freepik.com/premium-vector/heart-rate-monitoring-app-concept-girl-with-smart-watch-her-hand-runs-near-huge-smartphone_202279-186.jpg')`,
              backgroundPosition: "top",
              padding: "2px",
            }}
            fixed="top"
            collapseOnSelect
            expand="lg"
            className="bg-body-tertiary"
          >
            <Container>
              <IoFitnessSharp />
              <Navbar.Brand
                onClick={() => navigate("/Fitnessjournal")}
                style={{ fontSize: "45px", fontStyle: "bold" }}
                href="#home"
              >
                Fitness-Journal
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{ fontSize: "20px" }} className="me-auto">
                  <Nav.Link
                    onClick={() => navigate("/Features")}
                    href="#Features"
                  >
                    Features
                  </Nav.Link>
                  <Nav.Link href="#pricing">Contact Us</Nav.Link>
                </Nav>
                <Nav style={{ fontSize: "20px" }}>
                  <Nav.Link onClick={() => navigate("/Loginn")} href="#deets">
                    Log In
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/signup")}
                    eventKey={2}
                    href="#memes"
                  >
                    Sign Up
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <h2
            style={{
              fontStyle: "italic",
              fontSize: "40px",

              height: "100%",
              margin: "0",
              display: "flex",
              justifycontent: "center",
              paddingTop: "9rem",
              paddingLeft: "45rem",

              color: "black",
              alignitems: "center",
              textAlign: "center",
              position: "top",
            }}
          >
            Elevate Your Workout Routine!!{" "}
          </h2>
          <p
            class="red-text"
            style={{
              fontStyle: "italic",
              fontSize: "20px",
              fontcolor: "red",

              height: "100%",
              margin: "0",
              display: "flex",
              justifycontent: "center",
              paddingTop: "3rem",
              paddingLeft: "43rem",

              color: "black",
              alignitems: "center",
              textAlign: "center",
              position: "top",
            }}
          >
            "Empower your journey to better health with our comprehensive
            tracking platform. Monitor progress, set goals, and achieve your
            wellness aspirations with ease.
          </p>

          <button
            type="button"
            class="btn btn-primary btn-lg"
            onClick={() => navigate("/signup")}
            style={{
              cursor: "pointer",
              marginLeft: "550px",
              marginTop: "550px",
              color: "red",
              background: "white",
              fontStyle: "bold",
            }}
          >
            Let's START
          </button>
          {/* <button
          style={{ marginLeft: "800px", marginBottom: "40px" }}
          onClick={() => navigate("/signup")}
          class="button-85"
          role="button"
        >
          Let's START
        </button> */}

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2024 Copyright:
            <a
              className="text-reset fw-bold"
              href="https://Fitness-Journal.com/"
            >
              Fitness-Journal.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
