import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainSideBar from "../components/sidebar/MainSideBar";

function MainLayout() {
  return (
    <div>
      <Header />
      <Container fluid className="p-2 mainContainer">
        <MainSideBar />
        <div className="main">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}

export default MainLayout;
