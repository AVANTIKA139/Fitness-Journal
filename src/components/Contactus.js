// src/components/ContactPage.js
import React, { useState } from "react";
import "./ContactPage.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { IoFitnessSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Contactus = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      <Container style={{ paddingRight: "60rem" }}>
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
      <div className="contact-page">
        <h1 style={{ paddingTop: "3rem" }}>Contact Us</h1>
        {submitted ? (
          <div className="thank-you-message">
            <h2>Thank you for contacting us!</h2>
            <p>We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: support@Fitnessjournal.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
    </>
  );
};

export default Contactus;
