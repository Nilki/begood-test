import React, { useState } from 'react';
import "./Create.css";
import axios from 'axios';
import swal from 'sweetalert';

function Create() {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [type, setType] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const vehicle = {
            "plateNumber" : plateNumber,
            "name": name,
            "brand": brand,
            "type" : type,
        }
        console.log(vehicle);

        axios.post('http://localhost:8080/api/v1/vehicle', vehicle)
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
        <div className="CreateVehicle">
            <h1>Vehicle Registration</h1>
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

export default Create;
