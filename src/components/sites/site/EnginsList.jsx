import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function EnginsList({ records }) {
  const columns = [
    {
      name: "Engin",
      selector: (row) => {
        return (
          <Link
            to={`/config/engins/${row.id}`}
            className="btn btn-sm btn-light py-0 px-1 text-uppercase"
          >
            {row.body.slice(0, 20)}
          </Link>
        );
      },
      sortable: true,
    },
    {
      name: "Parc",
      selector: (row) => {
        return (
          <Link
            to={`/config/parcs/${row.id}`}
            className="btn btn-sm btn-light py-0 px-1 text-uppercase"
          >
            {row.body.slice(0, 20)}
          </Link>
        );
      },
      sortable: true,
    },
    {
      name: "Type de parc",
      selector: (row) => {
        return (
          <Link
            to={`/config/typeparcs/${row.id}`}
            className="btn btn-sm btn-light py-0 px-1 text-uppercase"
          >
            {row.body.slice(0, 20)}
          </Link>
        );
      },
      sortable: true,
    },
  ];
  return (
    <>
      <div className="">
        <DataTable
          noDataComponent={
            <Alert key={"idx"} variant={"info"} className="my-2">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              Il n'y a aucun enregistrement à afficher
            </Alert>
            // )
          }
          columns={columns}
          data={records}
          dense="true"
          // direction="auto"
          fixedHeader="true"
          fixedHeaderScrollHeight="400px"
          // highlightOnHover="true"
          // pointerOnHover="true"
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
          progressComponent="Loading ..."
          onRowClicked={(row, event) => {
            // console.log(event);
            // setObject(row);
            // navigate(`/config/sites/${row.id}`);
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
      {/* )} */}
    </>
  );
}

export default EnginsList;
