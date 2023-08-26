import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function SitesLayout() {
  return (
    <div>
      <Card border="light">
        <Card.Header className="py-1">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <FontAwesomeIcon icon={faLocationDot} /> Gestion des sites
            </div>
            <Link
              to="/config/sites/create"
              className="btn btn-sm btn-light py-0 px-1"
            >
              <FontAwesomeIcon icon={faPlus} className="text-primary" />
            </Link>
          </div>
        </Card.Header>
        <Card.Body>
          <Outlet />
        </Card.Body>
      </Card>
    </div>
  );
}

export default SitesLayout;
