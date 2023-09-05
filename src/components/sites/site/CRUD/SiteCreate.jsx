import {
  faMinus,
  faPlus,
  faSave,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
import axios from "axios";
import { API_URL, TIMEOUT } from "../../../../Config";

function SiteCreate() {
  const [listToAdd, setListToAdd] = useState([]);
  const [isProcess, setIsProcess] = useState(false);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const [nbrAdded, setNbrAdded] = useState(0);

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
          <button
            className="btn btn-sm btn-light py-0 px-1"
            disabled={isProcess}
            onClick={() => {
              if (listToAdd.length !== 0) {
                setIsProcess(true);
                setTimeout(() => {
                  listToAdd.map((item) => {
                    axios
                      .post(`${API_URL}/sites`, item)
                      .then((res) => {
                        //  navigate(`/config/sites`);
                        //  setIsProcess(false);
                        if (res.data.error) {
                          // toast.error(res.data.error);
                        } else {
                          setNbrAdded(nbrAdded + 1);
                          setListToAdd(
                            listToAdd.filter((i) => i.title !== item.title)
                          );
                        }
                        setIsProcess(false);
                      })
                      .catch((err) => {
                        toast.error(err.message);
                        setErr(err.message);
                        setIsProcess(false);
                      });
                  });
                  setIsProcess(false);

                  if (nbrAdded !== listToAdd.length) {
                    toast.warning(
                      `${listToAdd.length - nbrAdded}/${
                        listToAdd.length
                      } non ajouté.`
                    );
                    if (nbrAdded != 0) {
                      toast.success(`${nbrAdded} ajouté avec succes.`);
                    }
                  } else {
                    toast.success(`${listToAdd.length} ajouté avec succes.`);
                  }
                }, TIMEOUT);
              } else {
                toast.info(`Aucun site n'est rajouté !`);
              }
            }}
          >
            {isProcess ? (
              <Spinner animation="border" size="sm" />
            ) : (
              <FontAwesomeIcon icon={faSave} className="mx-1" />
            )}
          </button>
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
