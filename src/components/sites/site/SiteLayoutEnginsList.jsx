import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";

function SiteLayoutEnginsList() {
  return (
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
  );
}

export default SiteLayoutEnginsList;
