import React from "react";
import "./PlateType.css";

function PlateType() {
  return (
    <div className="plateType">
      <h1>Check Your License Plates Type.</h1>
      <input
        placeholder="Enter License Plate Number"
      />
      <button className="submit" type="submit">
        Submit
      </button>
    </div>
  );
}

export default PlateType;