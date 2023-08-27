import {
  faChevronRight,
  faHome,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className=" navBarTop">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/profilImage.jpg"
            alt="logo"
            className="rounded-circle "
            style={{ height: "35px" }}
          />
        </Navbar.Brand>

        <Nav className="me-auto d-flex align-items-center">
          <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon={faHome} />
          </Nav.Link>

          <span
            className="mx-1 mt-1"
            style={{ color: "#ced4da", fontSize: "12px" }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </span>

          <Nav.Link as={Link} to={"about"}>
            <FontAwesomeIcon icon={faInfo} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
