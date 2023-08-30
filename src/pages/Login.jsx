import { Button, Card, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

function Login() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <>
      <div className="login-container d-flex justify-content-center align-items-center vh-100 vw-100">
        {/* <div className="login"> */}
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>Se connecter</Card.Title>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Votre Email" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" />
              </Form.Group>
              <Button
                variant="outline-secondary"
                size="sm"
                type="button"
                className="mt-2 float-end"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : " Se connecter"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
        {/* </div> */}
      </div>
    </>
  );
}

export default Login;
