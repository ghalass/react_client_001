import {
  faList,
  faLocationDot,
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
    <div className="row d-flex justify-content-center">
      <Card border="light" className="col-md px-0 mx-1">
        <Card.Header className="py-1">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <FontAwesomeIcon icon={faLocationDot} /> Ajouter un site
            </div>
            <Link to="/config/sites" className="btn btn-sm btn-light py-0 px-1">
              <FontAwesomeIcon icon={faX} className="text-primary" />
            </Link>
          </div>
        </Card.Header>
        <Card.Body>
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

      <Card border="light" className="col-md px-0 mx-1">
        <Card.Header className="py-1">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <FontAwesomeIcon icon={faList} /> Les sites à rajouter
            </div>
            <div
              className="btn btn-sm text-success py-0"
              onClick={() => {
                console.log(listToAdd);
                toast.success("Enregistré avec succès.");
              }}
            >
              <FontAwesomeIcon icon={faSave} className="mx-1" />
              Sauvegarder
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-danger mb-1">
            Vous devez sauvegarder cette liste avant de fermer la page.
          </Card.Text>
          <div className="row">
            {listToAdd.map((item, index) => (
              <Card
                key={index}
                style={{ width: "150px" }}
                className="p-0 mb-1 mx-1"
              >
                <Card.Body className="py-1">
                  <Card.Title>
                    {item.title.slice(0, 9).toUpperCase()}
                  </Card.Title>
                  <Card.Subtitle className="text-muted">
                    <div className="d-flex align-content-center justify-content-between">
                      <div>{item.description.slice(0, 10)} </div>
                      <div
                        className="btn btn-sm text-danger py-0"
                        onClick={() => {
                          setListToAdd(
                            listToAdd.filter((i) => i.title !== item.title)
                          );
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </div>
                    </div>
                  </Card.Subtitle>
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
