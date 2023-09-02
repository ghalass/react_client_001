import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import {
  faLocationDot,
  faTruckMonster,
  faTruckPickup,
  faTruckPlane,
} from "@fortawesome/free-solid-svg-icons";

function ConfigLayout() {
  const list = [
    {
      title: "Sites",
      link: "/config/sites",
      icon: faLocationDot,
    },
    {
      title: "Type des parcs",
      link: "/config/typeparcs",
      icon: faTruckPlane,
    },
    { title: "Parcs", link: "/config/parcs", icon: faTruckMonster },
    { title: "Engins", link: "/config/engins", icon: faTruckPickup },
  ];

  return (
    <>
      <h5 className="m-0">Gestion des configurations</h5>
      <SideBar list={list} />
      <Outlet />
    </>
  );
}

export default ConfigLayout;
