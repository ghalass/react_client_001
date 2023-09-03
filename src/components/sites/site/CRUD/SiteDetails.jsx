import { Card } from "react-bootstrap";
import { faPen, faTrashCan, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../SiteLayout";

function SiteDetails() {
  const { siteState } = useContext(SiteContext);

  return (
    <Card.Body className="p-2">
      <div className="d-flex justify-content-between ">
        <div>
          <Card.Title>
            {siteState.id}-{siteState.title}
          </Card.Title>
          <Card.Text>{siteState.description}</Card.Text>
        </div>
        <div>
          <Link
            to={`/config/sites/${siteState.id}/delete`}
            className="btn btn-sm btn-light py-0 px-1 mx-1"
          >
            <FontAwesomeIcon icon={faTrashCan} className="text-danger" />
          </Link>

          <Link
            to={`/config/sites/${siteState.id}/update`}
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
