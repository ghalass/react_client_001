import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import "./sideBar.css";

export default function SideBar({ list = [] }) {
  return (
    <div className="secondary-sidebar">
      {list.map((item, index) => {
        return (
          <NavLink as={Link} to={item.link} key={index} className="">
            <span className="secondary-sidebar-icon">
              <FontAwesomeIcon icon={item.icon} />
            </span>
            <span className=""> {item.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
