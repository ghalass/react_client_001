import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
        <Container fluid className="d-flex justify-content-center">
          Footer
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
