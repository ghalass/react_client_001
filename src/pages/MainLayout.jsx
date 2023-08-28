import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainSideBar from "../components/sidebar/MainSideBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainLoader from "../components/loaders/MainLoader";

function MainLayout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      <div className="main">
        {loading ? (
          <MainLoader />
        ) : (
          <>
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

              <Outlet />
            </Container>
          </>
        )}
      </div>
    </div>
  );
}

export default MainLayout;
