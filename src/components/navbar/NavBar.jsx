import { faGears, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/profilImage.jpg"
            alt="logo"
            className="rounded-circle "
            style={{ height: "35px" }}
          />
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>

          <Nav.Link as={Link} to={"config"}>
            <FontAwesomeIcon icon={faGears} /> Config
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
