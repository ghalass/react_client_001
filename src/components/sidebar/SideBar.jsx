import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SideBar({ list = [] }) {
  return (
    <ListGroup className="shadow-sm">
      {list.map((item, index) => {
        return (
          <Link
            key={index}
            className="list-group-item list-group-item-action  py-1"
            to={item.link}
          >
            <FontAwesomeIcon icon={item.icon} /> {item.title.slice(0, 20)}
          </Link>
        );
      })}
    </ListGroup>
  );
}
