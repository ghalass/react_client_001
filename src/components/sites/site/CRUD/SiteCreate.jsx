import {
  faMinus,
  faPlus,
  faSave,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";

function SiteCreate() {
  const [listToAdd, setListToAdd] = useState([
    {
      title: "PG11sdgsdvddssssss",
      description: "pg11 descpg11 descpg11 descpg11 desc",
    },
    {
      title: "TO14",
      description: "to14 desc",
    },
    {
      title: "MHDTT",
      description: "mhdtt desc",
    },
  ]);

  return (
    <div className="row p-3 pt-0 gap-2">
      <Card border="light" className="col-md p-2 mb-1">
        <div className="d-flex align-items-center justify-content-between">
          <div>Ajouter un site</div>
          <Link to="/config/sites" className="btn btn-sm btn-light py-0 px-1">
            <FontAwesomeIcon icon={faX} className="text-primary" />
          </Link>
        </div>
        <Card.Body className="p-0">
          <div>
            <Formik
              initialValues={{ title: "", description: "" }}
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
                  const itemExist = listToAdd.filter(
                    (i) =>
                      i.title.trim().toLowerCase() ===
                      values.title.trim().toLowerCase()
                  );
                  if (itemExist.length === 0) {
                    setListToAdd([...listToAdd, values]);
                    // toast.success("Enregistré avec succès.");
                  } else {
                    toast.warning("Ce site est dèjà dans votre liste.");
                  }
                  setSubmitting(false);
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
                        className="text-danger text-left fst-italic fw-lighter"
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
                        className="btn btn-sm btn-outline-success py-0 px-1"
                      >
                        <FontAwesomeIcon icon={faPlus} className="" />
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Card.Body>
      </Card>

      {/* ************************ */}
      <Card border="light" className="col-md p-2 mb-1">
        <div className="d-flex align-items-center justify-content-between">
          <div>Les sites à rajouter</div>
          <div
            className="btn btn-sm btn-light py-0 px-1"
            onClick={() => {
              console.log(listToAdd);
              toast.success("Enregistré avec succès.");
            }}
          >
            <FontAwesomeIcon icon={faSave} className="mx-1" />
          </div>
        </div>
        <Card.Text className="text-danger my-2 fst-italic fw-lighter">
          Vous devez sauvegarder cette liste avant de fermer la page.
        </Card.Text>
        <Card.Body className="p-0">
          <div className="d-flex justify-content-start align-items-center gap-1">
            {listToAdd.map((item, index) => (
              <Card
                key={index}
                // style={{ width: "200px" }}
                className="p-0"
              >
                <Card.Body className="p-1 d-flex justify-content-start align-items-center">
                  <span
                    className="btn btn-sm btn-light p-0"
                    onClick={() => {
                      setListToAdd(
                        listToAdd.filter((i) => i.title !== item.title)
                      );
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="mx-1 text-danger"
                    />
                  </span>
                  <span className="mx-1">
                    {item.title.slice(0, 9).toUpperCase()}
                  </span>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SiteCreate;
