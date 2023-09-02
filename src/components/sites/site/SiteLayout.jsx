import { Outlet } from "react-router-dom";
import SiteDetails from "./CRUD/SiteDetails";
import EnginsList from "./EnginsList";

import { Card } from "react-bootstrap";

function SiteLayout() {
  return (
    <>
      <div className="row p-3 pt-0 gap-2">
        <Card border="light" className="col-md p-1 mb-1">
          <Card.Body className="p-0">
            <SiteDetails />
          </Card.Body>
          <div className="my-2">
            <Outlet />
          </div>
        </Card>

        <Card border="light" className="col-md p-1 mb-1">
          <Card.Body>
            <EnginsList />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default SiteLayout;
