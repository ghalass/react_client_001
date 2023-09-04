import { Outlet, useParams } from "react-router-dom";
import SiteDetails from "./CRUD/SiteDetails";
import EnginsList from "./EnginsList";

import { Card } from "react-bootstrap";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, TIMEOUT } from "../../../Config";
import Loader from "../../loaders/Loader";
export const SiteContext = createContext("");

function SiteLayout() {
  const { id } = useParams();
  const [siteState, setSiteState] = useState({});
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`${BASE_URL}/posts/${id}`)
        .then((res) => {
          setSiteState({
            id: id,
            title: res.data.title,
            description: res.data.body,
          });
        })
        .catch((err) => {
          setErr(err.message);
        })
        .finally(setIsLoading(false));
    }, TIMEOUT);
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : err ? (
        <div className="alert alert-danger">{err}</div>
      ) : (
        <SiteContext.Provider value={{ siteState, setSiteState }}>
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
        </SiteContext.Provider>
      )}
    </>
  );
}

export default SiteLayout;
