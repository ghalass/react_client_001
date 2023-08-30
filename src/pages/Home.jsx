import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Nav.Link as={Link} to="/login">
        <div className="d-flex">
          Se connecter <FontAwesomeIcon icon={faSignIn} />
        </div>
      </Nav.Link>
    </div>
  );
}

export default Home;
