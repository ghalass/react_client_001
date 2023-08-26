import { faLocationDot, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SiteDelete() {
  return (
    <Card border="light">
      <Card.Header className="py-1">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <FontAwesomeIcon icon={faLocationDot} /> Supprimer un site
          </div>
          <Link to="/config/sites/1" className="btn btn-sm btn-light py-0 px-1">
            <FontAwesomeIcon icon={faX} className="text-primary" />
          </Link>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>Suppression</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div>Delete Form</div>
      </Card.Body>
    </Card>
  );
}

export default SiteDelete;
