import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
// import moment from "moment";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, TIMEOUT } from "../../Config";
import Loader from "../loaders/Loader";

function SitesList() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState([]);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title.slice(0, 10),
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.body.slice(0, 20),
      sortable: true,
    },
    // {
    //   name: "CreatedAt",
    //   selector: (row) => moment(row.createdAt).format("ll"),
    //   sortable: true,
    // },
    // {
    //   name: "UpdatedAt",
    //   selector: (row) => moment(row.updatedAt).format("ll"),
    //   sortable: true,
    // },
  ];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(`${BASE_URL}/posts/`)
        .then((res) => {
          setRecords(res.data);
        })
        .catch((err) => {
          setErr(err.message);
        })
        .finally(setIsLoading(false));
    }, TIMEOUT);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : err ? (
        <div className="alert alert-danger">{err}</div>
      ) : (
        <div>
          <DataTable
            // title="Liste des sites :"
            noDataComponent={
              <Alert key={"idx"} variant={"info"} className="my-2">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                Il n'y a aucun enregistrement à afficher
              </Alert>
            }
            columns={columns}
            data={records}
            dense="true"
            // direction="auto"
            fixedHeader="true"
            fixedHeaderScrollHeight="400px"
            highlightOnHover="true"
            pointerOnHover="true"
            responsive="true"
            // subHeader="true"
            // subHeaderAlign="right"
            // subHeaderWrap="true"
            persistTableHead="true"
            /* selectableRows="true" */
            /* selectableRowsSingle="true"
        selectableRowsHighlight="true"
        selectableRowsNoSelectAll="true"
        selectableRowsVisibleOnly="true" */
            /* progressPending={isLoading} */
            progressComponent={<Loader />}
            onRowClicked={(row, event) => {
              // console.log(event);
              // setObject(row);
              navigate(`/config/sites/${row.id}`);
            }}
            onSelectedRowsChange={({
              allSelected,
              selectedCount,
              selectedRows,
            }) => {
              /* setObject(selectedRows.length !== 0 ? selectedRows[0] : {});
          setOperation(""); */
            }}
            pagination="true"
          />
        </div>
      )}
    </>
  );
}

export default SitesList;
