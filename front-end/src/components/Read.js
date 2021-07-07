import React, { useEffect, useState } from "react";
import "./Read.css";
import axios from 'axios';

function Read() {
  const [detail, setDetail] = useState([]);
  const [value, setValue] = useState(0); 
 
  useEffect(() => {
  axios.get('http://localhost:8080/api/v1/vehicle')
             .then(response=>{
                if(response.data[0]){
                    setDetail(response.data);
                }
                console.log(response.data);
              }); 
              setValue(1);
  }, []);

  return (
    <div className="ViewVehicle">
      {detail != []?
        <table>
        <thead>
          <tr>
            <th> Owner's Name |  </th>
            <th>Plate Number |</th>
            <th>Vehicle Brand |</th>
            <th>Vehicle Type |</th>  
          </tr>
        </thead>
        <tbody>
          {detail.map(d => {
          <tr>
            <td> {d.name} |  </td>
            <td> {d.plateNumber} |</td>
            <td> {d.brand} |</td>
            <td> {d.type} |</td>  
          </tr>
        } )}
        </tbody>
      </table>
      :<h2> no data to show</h2>
      }
      
    </div>
  );
}

export default Read;