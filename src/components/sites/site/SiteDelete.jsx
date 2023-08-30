import { faCheck, faLocationDot, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SiteDelete() {
  const navigate = useNavigate();

  return (
    <Card border="light">
      <Card.Header className="py-1">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <FontAwesomeIcon icon={faLocationDot} /> Supprimer un site
          </div>
          <Link to="/config/sites/1" className="btn btn-sm btn-light py-0 px-1">
            <FontAwesomeIcon icon={faX} className="text-primary" />
          </Link>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-danger">Suppression</Card.Title>
        <Card.Text>Voulez vous supprimer ce site ?</Card.Text>
        <div className="d-flex justify-content-end align-content-center gap-2">
          <button
            className="btn btn-sm btn-outline-danger "
            onClick={() => {
              toast.success("Site supprimé avec succès.");
              navigate("/config/sites");
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
            <span className="mx-2">Oui</span>
          </button>
          <button
            className="btn btn-sm btn-outline-success"
            onClick={() => {
              navigate("/config/sites/1");
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
            <span className="mx-2">Non</span>
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SiteDelete;
