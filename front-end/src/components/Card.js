import React from 'react';
import './Card.css';



function Card({ imageUrl, title, body }) {
    return (
        <div className='card-container'>

            <div className='image-container'>
                <img src={imageUrl} alt='' />
            </div>
            <div className='image-content' >
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-title'>
                    <p>{body}</p>
                </div>
            </div>
        </div>



    )
}

export default Card
