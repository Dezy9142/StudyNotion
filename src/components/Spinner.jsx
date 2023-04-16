import React from "react";
import "./Spinner.css";
function Spinner() {
  return (
    <div className="flex  flex-col justify-center h-[100vh] w-[100vh] items-center mx-auto">
      <div className="spinner  ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="text-xl font-semibold mt-6">Loading</div>
    </div>
  );
}

export default Spinner;
