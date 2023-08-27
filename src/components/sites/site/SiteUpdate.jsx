import { faLocationDot, faSave, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

function SiteUpdate() {
  const [site, siteSite] = useState({
    title: "to14",
    description: "desc to14",
  });

  useEffect(() => {
    siteSite({
      title: "to14",
      description: "desc to14",
    });
  }, []);

  const navigate = useNavigate();

  return (
    <Card border="light">
      <Card.Header className="py-1">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <FontAwesomeIcon icon={faLocationDot} /> Modifier un site
          </div>
          <Link to="/config/sites/1" className="btn btn-sm btn-light py-0 px-1">
            <FontAwesomeIcon icon={faX} className="text-primary" />
          </Link>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>Modification</Card.Title>

        <div>
          <Formik
            initialValues={{ title: site.title, description: site.description }}
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
              setTimeout(() => {
                /* alert(JSON.stringify(values, null, 2)); */
                toast.success("Site modifié avec succès.");
                setSubmitting(false);
                navigate("/config/sites/1");
              }, 400);
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
                    >
                      <FontAwesomeIcon icon={faSave} className="" />
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Card.Body>
    </Card>
  );
}

export default SiteUpdate;
