import React, { useEffect, useState } from "react";
import "./Update.css";
import axios from "axios";
import swal from "sweetalert";


function Update() {
  const [name, setName] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [searchNum, setSearchNum] = useState("");

  const search = (event) => {
    event.preventDefault();
    
    axios.get('http://localhost:8080/api/v1/vehicle/' + searchNum )
         .then(response=>{
            if(response.plateNumber == null){
                swal("Error", "Incorrect plate number", "danger");
            }else{
              setName(response.name);
              setName(response.plateNumber);
              setName(response.brand);
              setName(response.type);
            }
        }); 
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const vehicle = {
        "plateNumber" : plateNumber,
        "name": name,
        "brand": brand,
        "type" : type,
    }
    console.log(vehicle);

    axios.put('http://localhost:8080/api/v1/vehicle/' + searchNum, vehicle)
         .then(response=>{
            if(response.plateNumber != null){
                swal("Successful", "successfully registered your vehicle", "success");
            }
        }); 

        setName("");
        setBrand("")
        setPlateNumber("");
        setType("");
  };

  return (
    <div className="UpdateVehicle">
      <h1>Updating Vehicles</h1>
      <form onSubmit={search}>
      <div className="containNumber">
        <label>Plate Number</label>
        <input
          placeholder="Enter Plate Number"
          value={searchNum}
          onChange={(e) => setSearchNum(e.target.value)}
        />
        <button className="search" type="submit"  >
          Search
        </button>
        
      </div>
      </form>

      {

      }

<form onSubmit={handleSubmit}>
            <div className="contain">
                <label>Full Name</label>
                <input
                    placeholder="Enter Owner Name"
                    value = {name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="contain">
                <label>Plate Number</label>
                <input
                    placeholder="Enter Plate Number"
                    value = {plateNumber}
                    onChange={e => setPlateNumber(e.target.value)}
                />
            </div>
            <div className="contain">
                <label>Car Brand</label>
                <input
                    placeholder="Enter Car Brand"
                    value = {brand}
                    onChange={e => setBrand(e.target.value)}
                />
            </div>
            <div className="contain">
                <label>Car Type</label>
                <input
                    placeholder="Enter Car Type"
                    value = {type}
                    onChange={e => setType(e.target.value)}
                />
            </div>
            <button className="submitCreate" type="submit" >
                Submit
            </button>
        </form>
    </div>
  );
}

export default Update;