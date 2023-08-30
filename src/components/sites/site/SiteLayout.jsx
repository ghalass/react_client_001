import { Outlet } from "react-router-dom";
import SiteDetails from "./SiteDetails";
import SiteLayoutEnginsList from "./SiteLayoutEnginsList";

import { Card } from "react-bootstrap";

function SiteLayout() {
  return (
    <div className="row">
      <div className="col mb-2">
        <Card border="light">
          <SiteDetails />
          <div className="my-2 px-2">
            <Outlet />
          </div>
        </Card>
      </div>
      <div className="col">
        <SiteLayoutEnginsList />
      </div>
    </div>
  );
}

export default SiteLayout;
