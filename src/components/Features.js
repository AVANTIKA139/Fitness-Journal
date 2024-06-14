import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { IoFitnessSharp } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Features = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
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

        <h3 style={{paddingTop:"4rem", paddingRight:"67rem" , fontFamily:"sans-serif"}}>Features</h3>
        <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </>
  );
};
export default Features;
