import React from "react";
import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoFitnessSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Fitnessjournal = () => {
  const navigate = useNavigate();
  return (
    <div className="overlay">
      <div className="home-container">
        <Navbar fixed="stick">
          <Container>
            <IoFitnessSharp />
            <Navbar.Brand
              style={{ fontSize: "45px", fontStyle: "bold" }}
              href="#home"
            >
              Fitness-Journal
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav style={{ fontSize: "20px" }} className="me-auto">
                <Nav.Link onClick={() => navigate("/")} href="#features">
                  Home
                </Nav.Link>
                <Nav.Link style={{cursor:"pointer"}} href="#features">Features</Nav.Link>
                <Nav.Link style={{cursor:"pointer"}} href="#Contact Us">Contact Us</Nav.Link>
              </Nav>
              <Nav style={{ fontSize: "20px", cursor:"pointer" }}>
                <Nav.Link href="#deets">Log In</Nav.Link>
                <Nav.Link  eventKey={2} href="#memes">
                  Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="hero-section">
          <h2 style={{ color: "black" }}>Track Your Health and Fitness</h2>
          <p>
            Monitor your health, set goals, and achieve your fitness targets
            with our easy-to-use health tracker.
          </p>
          <button className="cta-button">Get Started</button>
        </section>
        <section id="features" className="features-section">
          <h3 style={{ color: "black" }}>Features</h3>
          <ul>
            <li>Track daily activity and workouts</li>
            <li>Monitor sleep patterns</li>
            <li>Log your meals and nutrition</li>
            <li>Set and achieve health goals</li>
          </ul>
        </section>
        <section id="about" className="about-section">
          <h3 style={{ color: "black" }}>About Us</h3>
          <p>
            We are dedicated to helping you maintain a healthy lifestyle through
            easy-to-use tracking tools and insightful analytics.
          </p>
        </section>
        <section id="contact" className="contact-section">
          <h3 style={{ color: "black" }}>Contact Us</h3>
          <p>
            If you have any questions or feedback, feel free to reach out to us.
          </p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://Fitness-Journal.com/">
            Fitness-Journal.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fitnessjournal;
