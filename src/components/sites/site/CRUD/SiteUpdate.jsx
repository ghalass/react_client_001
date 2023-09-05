import { faSave, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { SiteContext } from "../SiteLayout";
import axios from "axios";
import { API_URL, TIMEOUT } from "../../../../Config";

function SiteUpdate() {
  const { siteState, setSiteState } = useContext(SiteContext);
  const [isProcess, setIsProcess] = useState(false);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      <Card border="light">
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            Modification
            <Link
              to={`/config/sites/${siteState.id}`}
              className="btn btn-sm btn-light py-0 px-1"
            >
              <FontAwesomeIcon icon={faX} className="text-primary" />
            </Link>
          </Card.Title>
          {err && <div className="alert alert-danger">{err}</div>}

          <div>
            <Formik
              initialValues={{
                title: siteState.title,
                description: siteState.description,
              }}
              validationSchema={Yup.object({
                title: Yup.string()
                  .min(2, "Ce champ doit comporter au moins 2 caractères.")
                  .max(64, "Ce champ doit comporter au maximum 64 caractères")
                  .required("Ce champ est obligatoire."),
                description: Yup.string().max(
                  255,
                  "Ce champ doit comporter au maximum 255 caractères"
                ),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setIsProcess(true);
                setTimeout(() => {
                  axios
                    .put(`${API_URL}/sites`, { id: siteState.id, ...values })
                    .then((res) => {
                      setSiteState({ id: siteState.id, ...values });
                      navigate(`/config/sites/${siteState.id}`);
                      setIsProcess(false);
                      setSubmitting(false);
                      toast.success("Site modifié avec succès.");
                    })
                    .catch((err) => {
                      setErr(err.message);
                      setIsProcess(false);
                      setSubmitting(false);
                    });
                }, TIMEOUT);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="mt-2  ">
                      <Field
                        className={
                          "form-control form-control-sm " +
                          (props.errors.title && props.touched.title
                            ? " is-invalid"
                            : "")
                        }
                        name="title"
                        type="text"
                        placeholder="Nom du site"
                        autoComplete="off"
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-danger text-left "
                      />
                    </div>

                    <div className="mt-2  ">
                      <Field
                        name="description"
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Description du site"
                        autoComplete="off"
                        as="textarea"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-danger text-left "
                      />
                    </div>

                    <div className="mt-2 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-sm btn-outline-success"
                        disabled={isProcess}
                      >
                        {isProcess ? (
                          <Spinner animation="border" size="sm" />
                        ) : (
                          <FontAwesomeIcon icon={faSave} />
                        )}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default SiteUpdate;
