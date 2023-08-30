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
      <h2>Gestion des configurations</h2>
      <div className="d-flex justify-content-start gap-2">
        <div className="">
          <SideBar list={list} />
        </div>
        <div className="w-100">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ConfigLayout;
