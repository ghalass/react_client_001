import {
  faLocationDot,
  faPen,
  faTrashCan,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import SiteDetails from "./SiteDetails";

function SiteLayout() {
  return (
    <div className="row">
      <div className="col-md">
        <Card border="light">
          <Card.Header className="py-1">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <FontAwesomeIcon icon={faLocationDot} /> Détails d'un site
              </div>
              <div>
                <Link
                  to="/config/sites/1/delete"
                  className="btn btn-sm btn-light py-0 px-1 mx-1"
                >
                  <FontAwesomeIcon icon={faTrashCan} className="text-danger" />
                </Link>

                <Link
                  to="/config/sites/1/update"
                  className="btn btn-sm btn-light py-0 px-1 mx-1"
                >
                  <FontAwesomeIcon icon={faPen} className="text-success" />
                </Link>
                <Link
                  to="/config/sites"
                  className="btn btn-sm btn-light py-0 px-1 mx-1"
                >
                  <FontAwesomeIcon icon={faX} className="text-primary" />
                </Link>
              </div>
            </div>
          </Card.Header>
          <SiteDetails />
          <div className="border-top pt-1">
            <Outlet />
          </div>
        </Card>
      </div>
      <div className="col-md">
        <Card border="light">
          <Card.Header className="py-1">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <FontAwesomeIcon icon={faLocationDot} /> Engins sur site
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>Engins sur site</Card.Title>
            <Card.Text>Some quick example.</Card.Text>
            <div>Table Engins sur site</div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SiteLayout;
