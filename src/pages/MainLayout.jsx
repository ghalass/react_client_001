import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainSideBar from "../components/sidebar/MainSideBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MainLayout() {
  return (
    <div>
      <Header />
      <Container fluid className="p-2 mainContainer">
        <MainSideBar />
        <div className="text-left">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick={true}
            rtl={false}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            draggable={false}
            progress={undefined}
            theme="light"
          />
        </div>
        <div className="main">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}

export default MainLayout;
