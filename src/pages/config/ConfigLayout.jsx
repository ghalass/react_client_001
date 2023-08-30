import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import {
  faLocationDot,
  faTruckMonster,
  faTruckPickup,
  faTruckPlane,
} from "@fortawesome/free-solid-svg-icons";

function ConfigLayout() {
  const list = [
    {
      title: "Sites",
      link: "/config/sites",
      icon: faLocationDot,
    },
    {
      title: "Type des parcs",
      link: "/config/typeparcs",
      icon: faTruckPlane,
    },
    { title: "Parcs", link: "/config/parcs", icon: faTruckMonster },
    { title: "Engins", link: "/config/engins", icon: faTruckPickup },
  ];

  return (
    <>
      <h2>Gestion des configurations</h2>
      <Row>
        <Col
          className="border-end border-2 col-lg-2 col-md-4 col-12"
          style={{ height: "100%", minWidth: "50px" }}
        >
          <SideBar list={list} />
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default ConfigLayout;
