import React from "react";
import "./CheckPlate.css";


function CheckPlate() {
  return (
    <div className="CheckPlate">
      <h1>Check Your License Plate Validation</h1>
      <input
        placeholder="Enter License Plate Number"
      />
      <button className="submitBtn" type="submit">
        Submit
      </button>
    </div>
  );
}

export default CheckPlate;