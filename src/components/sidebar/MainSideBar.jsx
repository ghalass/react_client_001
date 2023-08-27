import { faBars, faGears, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function MainSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const list = [
    {
      title: "Configurations",
      link: "/config",
      icon: faGears,
    },
    {
      title: "Saisie",
      link: "/saisie",
      icon: faKeyboard,
    },
  ];

  return (
    <div
      className="sidebar shadow-sm"
      style={{ width: isOpen ? "250px" : "50px" }}
    >
      <div className="top_section">
        <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
          APP
        </div>

        <div className="bars" style={{ marginLeft: isOpen ? "130px" : "12px" }}>
          <FontAwesomeIcon icon={faBars} onClick={toggle} />
        </div>
      </div>
      {list.map((item, index) => (
        <NavLink
          as={Link}
          to={item.link}
          key={index}
          className="link"
          activeclassName="active"
        >
          <div className="icon">
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            {item.title}
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default MainSideBar;
