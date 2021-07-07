import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='home-page'>
            <Link to="/Plate-type">Check Your Licence Plate Type</Link>
            <Link to="/Check-Plate">Check License Plate Validation</Link>
        </div>
    )
}

export default Home
