import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Toast() {
  return (
    <div className="text-left">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        progress={undefined}
        theme="light"
      />
    </div>
  );
}

export default Toast;
