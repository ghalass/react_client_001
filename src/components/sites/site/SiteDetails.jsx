import { Card } from "react-bootstrap";
import { faPen, faTrashCan, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

function SiteDetails() {
  return (
    <Card.Body className="p-2">
      <div className="d-flex justify-content-between ">
        <div>
          <Card.Title>PG11</Card.Title>
          <Card.Text>Description</Card.Text>
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
    </Card.Body>
  );
}

export default SiteDetails;
