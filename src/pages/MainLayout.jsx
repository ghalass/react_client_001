import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function MainLayout() {
  return (
    <div>
      <Header />
      <Container fluid className="p-2">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default MainLayout;
