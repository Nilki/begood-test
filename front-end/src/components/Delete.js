import React, { useState, useEffect } from "react";
import "./Delete.css";
import axios from "axios";
import swal from "sweetalert";

function Delete() {
  const [plateNumber, setPlateNumber] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const vehicle = {
        "plateNumber" : plateNumber,       
    }
    console.log(vehicle);

    axios.delete('http://localhost:8080/api/v1/vehicle/' + plateNumber, vehicle)
         .then(response=>{
            if(response.plateNumber != null){
                swal("Successful", "successfully deleted your details", "success");
            }
        }); 
  };
  

  return (
    <div className="DeleteVehicle">
      <h1>Deleting Vehicles</h1>
      <div className="containDelete">
        <label>Plate Number</label>
        <input
          placeholder="Enter Plate Number"
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
        />
      </div>
      <button className="delete" type="submit" onClick={submit} >
        Delete
      </button>
    </div>
  );
}

export default Delete;
