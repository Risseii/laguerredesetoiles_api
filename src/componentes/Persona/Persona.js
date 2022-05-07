import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import People from '../People/People';

const Persona = (props) => {  //sin las {}
    
    const[id] = props.match.params.id;
    const[Persona,setPersona] = useState({});

    useEffect(() => { 
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(respuesta => {
                setPersona(respuesta.data); 
            })
            .catch(err => {
                setPersona(null);
            })
    },[]); 

    return(
        <div>
            { id!==null?
                <People datos={Persona} /> 
                :
                <div> 
                    <h2>Estos no son los droides que está buscando.</h2>
                    <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/03/obi-wan-kenobi-serie-tv-2639997.jpg?itok=Be0Z6RUp"></img>
                </div>
        }
        </div>
    );


}
export default Persona; 