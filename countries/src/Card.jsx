import React, { useState, useEffect } from 'react';


const Card = ( props) => {

    
    
        return (
        
        <div className="card" style={{width: "18rem",}}>

            <img className="card-img-top" src= {props.flag} alt=""></img>
            

            <div className ="card-body">

            <br/><p className ="card-text">
            Name:{props.name}
            </p>

            <br/><p className ="card-text">
            Capital:{props.capital}
            </p>

            <br/> <p className ="card-text">
            <i className="bi bi-globe2"></i>
            Region:{props.region}
            </p>

            <br/> <p className ="card-text">
            <i className="bi bi-person-circle"></i> 
            Population:{props.population}
            </p>

            </div>
        </div>
        )}
 


export default Card;
