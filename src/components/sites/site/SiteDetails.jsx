import {
  faLocationDot,
  faPen,
  faTrashCan,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SiteDetails() {
  return (
    <Card.Body>
      <Card.Title>PG11</Card.Title>
      <Card.Text>Description</Card.Text>
    </Card.Body>
  );
}

export default SiteDetails;
