import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";

import { Card, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SiteContext } from "../SiteLayout";

function SiteDelete() {
  const navigate = useNavigate();
  const { siteState } = useContext(SiteContext);
  const [isProcess, setIsProcess] = useState(false);

  return (
    <Card border="light">
      <Card.Body>
        <Card.Title className="text-danger d-flex justify-content-between">
          Suppression
          <Link
            to={`/config/sites/${siteState.id}`}
            className="btn btn-sm btn-light py-0 px-1"
          >
            <FontAwesomeIcon icon={faX} className="text-primary" />
          </Link>
        </Card.Title>
        <Card.Text>Voulez vous supprimer ce site ?</Card.Text>
        <div className="d-flex justify-content-end align-content-center gap-2">
          <button
            className="btn btn-sm btn-outline-danger "
            disabled={isProcess}
            onClick={() => {
              setIsProcess(true);
              setTimeout(() => {
                toast.success("Site supprimé avec succès.");
                navigate("/config/sites");
                setIsProcess(false);
              }, 5000);
            }}
          >
            {isProcess ? (
              <Spinner animation="border" size="sm" />
            ) : (
              <>
                <FontAwesomeIcon icon={faCheck} />
                <span className="mx-2">Oui</span>
              </>
            )}
          </button>
          <button
            className="btn btn-sm btn-outline-success"
            disabled={isProcess}
            onClick={() => {
              navigate(`/config/sites/${siteState.id}`);
            }}
          >
            <FontAwesomeIcon icon={faX} />
            <span className="mx-2">Non</span>
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SiteDelete;
