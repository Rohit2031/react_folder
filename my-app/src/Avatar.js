import React from 'react';
import './Avtar.css';
import 'tachyons';

// now i have create another component name avatar 

const Avatar= (props) => {
    return (
        <div className="avtatstyle ma4 bg-light-purple dib pa4">
            <img src= "https://joeschmoe.io/api/v1/rohit" alt = "Avtar" />
            <h1 className="tf">{props.name} </h1>
            <p> {props.work} </p>
        </div>
    )
}


export default Avatar;