import React from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import moment from "moment";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function SitesList() {
  const navigate = useNavigate();
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title.toUpperCase(),
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description.toUpperCase(),
      sortable: true,
    },
    {
      name: "CreatedAt",
      selector: (row) => moment(row.createdAt).format("ll"),
      sortable: true,
    },
    {
      name: "UpdatedAt",
      selector: (row) => moment(row.updatedAt).format("ll"),
      sortable: true,
    },
  ];

  const records = [
    {
      id: "1",
      title: "to14",
      description: "desc",
    },
    {
      id: "2",
      title: "pg11",
      description: "desc",
    },
    {
      id: "2",
      title: "pg10",
      description: "desc",
    },
    {
      id: "3",
      title: "fdeirek",
      description: "desc",
    },
  ];

  return (
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
        progressComponent="Loading ..."
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
  );
}

export default SitesList;
