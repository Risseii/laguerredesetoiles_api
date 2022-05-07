import React from 'react';

const Planets = ({datos}) => {  //tiene que ser entre {} para recibir los datos,porque se envió tmb en llaves

    const{name,rotation_period,orbital_period,diameter,climate} = datos;

    return(
        <div>
            <h1>Name: {name}</h1>            
            <p>Rotatio Period: {rotation_period}</p>            
            <p>Orbital Period: {orbital_period}</p>            
            <p>Diameter: {diameter}</p>
            <p>Climate: {climate}</p>            
        </div>
    );
}
export default Planets;