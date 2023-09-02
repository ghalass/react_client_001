import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function SitesLayout() {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="m-0">
            <FontAwesomeIcon icon={faLocationDot} className="mx-2" />
            <span className="mx-2">Gestion des sites</span>
          </h6>
          <Link
            to="/config/sites/create"
            className="btn btn-sm btn-light py-0 px-1"
          >
            <FontAwesomeIcon icon={faPlus} className="text-primary" />
          </Link>
        </div>
        <Outlet />
      </Card.Body>
    </Card>
  );
}

export default SitesLayout;
