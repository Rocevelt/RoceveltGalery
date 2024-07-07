import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"; // Asegúrate de que esta ruta sea correcta

const NavBar = () => {
  return (
    <Navbar expand="lg" className="p-0 fixed-top navbar-custom">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Rocevelt Galery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 m-2">
            <Nav.Item>
              <Nav.Link as={Link} to="/home">
                Galeria
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/services">
                Quién soy
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">
                Contacto
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
