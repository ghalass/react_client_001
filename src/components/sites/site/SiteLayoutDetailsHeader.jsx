import {
  faLocationDot,
  faPen,
  faTrashCan,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SiteLayoutDetailsHeader() {
  return (
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
  );
}

export default SiteLayoutDetailsHeader;
