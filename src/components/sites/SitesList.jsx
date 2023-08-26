import React from "react";
import { Link } from "react-router-dom";

function SitesList() {
  return (
    <div>
      <Link to="1">Site 1 </Link>
      <br />
      <Link to="2">Site 2 </Link>
      <br />
      <Link to="3">Site 3 </Link>
      <br />
    </div>
  );
}

export default SitesList;
