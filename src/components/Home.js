import React from "react";
import { useNavigate } from "react-router-dom";
import { PiChartLineUpFill } from "react-icons/pi";
import { FaPersonRunning } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { IoFitnessSharp } from "react-icons/io5";

import Navbar from "react-bootstrap/Navbar";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="main">
          <Navbar
            style={{
              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",

              // backgroundPosition: "top",
              padding: "2px",
            }}
            fixed="top"
            collapseOnSelect
            expand="lg"
            className="bg-body-tertiary"
          >
            <Container>
              <IoFitnessSharp size={42} />
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
                  <Nav.Link
                    onClick={() => navigate("/Contactus")}
                    href="#contactus"
                  >
                    Contact Us
                  </Nav.Link>
                </Nav>
                <Nav style={{ fontSize: "20px" }}>
                  <Nav.Link
                    onClick={() => navigate("/Loginn")}
                    href="#LoginPage"
                  >
                    Log In
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/signup")}
                    eventKey={2}
                    href="#SignUp page"
                  >
                    Sign Up
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="monti">
            <Carousel data-bs-theme="dark">
              <Carousel.Item
                style={{
                  border: "solid 7px turquoise",
                  height: "100%",
                  width: "625px",
                  marginTop: "2000px",
                  marginBottom: "75px",
                  marginLeft: "300px",
                }}
              >
                <img
                  className="d-block w-100"
                  src="https://appmaster.io/api/_files/oqQD259R96yciZHjFVRneK/download/"
                  alt="First "
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  height: "100%",
                  width: "525px",
                  marginTop: "2000px",
                  marginLeft: "340px",
                }}
              >
                <img
                  className="d-block w-100"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/online-heart-checkup-5472175-4573012.png"
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            {/* <h2
          style={{
            fontStyle: "italic",
            fontSize: "40px",

            height: "100%",
            margin: "0",
            display: "flex",
            justifycontent: "center",
            paddingLeft: "20rem",
            paddingRight: "72rem",

            fontcolor: "black",
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
           

            
            margin: "0",
            
           
            paddingTop: "1rem",
            paddingLeft: "2rem",
            paddingRight: "60rem",
            

            color: "turquoise",
            
           
          }}
        >
          "Empower your journey to better health
           with our comprehensive tracking
          platform. 
          Monitor progress, set goals, and achieve your wellness
          aspirations with ease".
        </p> */}

            <div className="d-flex justify-content-center align-items-end p-3">
              <Card
                style={{
                  marginTop: "989px",
                  width: "18rem",
                  color: "black",
                  backgroundColor: "turquoise",
                  cursor: "pointer",
                }}
                className="m-2"
              >
                <Card.Body>
                  <Card.Title>Track Progress</Card.Title>
                  <PiChartLineUpFill size={42} />
                  <Card.Text>
                    Lorem ipsum dolor sit amet. Non iusto sequi ab corporis
                    tenetur qui animi.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{
                  cursor: "pointer",
                  width: "18rem",
                  backgroundColor: "turquoise",
                }}
                className="m-2"
              >
                <Card.Body>
                  <Card.Title>Set Your Pace</Card.Title>
                  <FaPersonRunning size={42} />
                  <Card.Text>
                    Lorem ipsum dolor sit amet. Non iusto sequi ab corporis
                    tenetur qui animi.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{
                  cursor: "pointer",
                  width: "18rem",
                  backgroundColor: "turquoise",
                }}
                className="m-2"
              >
                <Card.Body>
                  <Card.Title>Workout On-the go</Card.Title>
                  <CgGym size={42} />
                  <Card.Text>
                    Lorem ipsum dolor sit amet. Non iusto sequi ab corporis
                    tenetur qui animi .
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{
                  cursor: "pointer",
                  width: "18rem",
                  backgroundColor: "turquoise",
                }}
                className="m-2"
              >
                <Card.Body>
                  <Card.Title>Healthy Diet</Card.Title>
                  <MdFoodBank size={42} />
                  <Card.Text>
                    Lorem ipsum dolor sit amet. Non iusto sequi ab corporis
                    tenetur qui animi .
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <Accordion
              style={{
                marginRight: "250px",

                marginLeft: "250px",
                marginTop: "54px",
                backgroundColor: "turquoise",
              }}
              defaultActiveKey={["0"]}
              alwaysOpen
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ backgroundColor: "white" }}>
                  About Us
                </Accordion.Header>
                <Image
                  src="https://blog.solguruz.com/wp-content/uploads/2023/11/Fitness-App-Development-A-Comprehensive-Guide.png"
                  fluid
                />
                <Accordion.Body style={{ backgroundColor: "turquoise" }}>
                  Welcome to Fitnessjournal, your ultimate companion on the
                  journey to a healthier and fitter you. Our mission is to
                  empower individuals to achieve their fitness goals through
                  innovative technology and personalized support. At
                  Fitnessjournal, we believe that everyone deserves to live a
                  healthy and active lifestyle, and we are dedicated to
                  providing the tools and resources necessary to make that
                  possible. Our app is designed with you in mind, offering a
                  seamless and intuitive experience that makes tracking your
                  fitness progress simple and enjoyable. Whether you're a
                  seasoned athlete or just starting out, FitTrack adapts to your
                  needs, helping you stay motivated and on track.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header style={{ backgroundColor: "white" }}>
                  Our Vision
                </Accordion.Header>
                <Image
                  src="https://blog.smart.com.ph/wp-content/uploads/2022/03/Essential-Fitness-Apps-to-Track-Your-Workouts.jpg?w=1170"
                  fluid
                />

                <Accordion.Body style={{ backgroundColor: "turquoise" }}>
                  At Fitnessjournal, we envision a world where everyone has the
                  opportunity to lead a healthy and active lifestyle. We are
                  committed to continuous innovation and improvement, ensuring
                  that our app remains at the forefront of fitness technology.
                  Your success is our success, and we are here to support you
                  every step of the way. Join us today and take the first step
                  towards a healthier, happier you with FitTrack. Feel free to
                  customize this content to better fit your app's unique
                  features and philosophy.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <button
              type="button"
              class="btn btn-primary btn-lg"
              onClick={() => navigate("/signup")}
              style={{
                cursor: "pointer",
                marginTop: "132px",

                paddingRight: "63px",
                paddingLeft: "63px",
                marginLeft: "500px",

                color: "red",
                background: "white",
                fontStyle: "bold",
              }}
            >
              Let's START
            </button>

            <div
              className="text-center p-4"
              style={{
                marginTop: "10px",
                marginRight: "68px",
              }}
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
      </div>
    </>
  );
};
export default Home;
