import { Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SiteDetails from "./SiteDetails";
import SiteLayoutEnginsList from "./SiteLayoutEnginsList";
import SiteLayoutDetailsHeader from "./SiteLayoutDetailsHeader";

function SiteLayout() {
  return (
    <div className="row">
      <div className="col-md">
        <Card border="light">
          <SiteLayoutDetailsHeader />
          <SiteDetails />
          <div className="border-top pt-1">
            <Outlet />
          </div>
        </Card>
      </div>
      <div className="col-md">
        <SiteLayoutEnginsList />
      </div>
    </div>
  );
}

export default SiteLayout;
