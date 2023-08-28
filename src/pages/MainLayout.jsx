import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainSideBar from "../components/sidebar/MainSideBar";

import MainLoader from "../components/loaders/MainLoader";

function MainLayout() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <MainLoader />
      ) : (
        <div>
          <Header />
          <Container fluid className="p-2 d-flex">
            <MainSideBar />
            <div className="mx-2 w-100">
              <Outlet />
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default MainLayout;
