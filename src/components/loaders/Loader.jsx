import "./mainLoader.css";

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center text-info">
      <div className="spinner-border border-1"></div>
      <span className="mx-2">Loading ...</span>
    </div>
  );
}

export default Loader;
