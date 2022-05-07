import React, {useEffect,useState} from 'react';
import axios from 'axios';
import People from '../People/People';
import Films from '../Films/Films';
import Planets from '../Planets/Planets';
import Starships from '../Starships/Starships';
import Vehicles from '../Vehicles/Vehicles';
import Species from '../Species/Species';

const Home = () =>{

const [datos, setDatos] = useState({}); //{name:"r2-d2",birth_year:"33BBY",...}
const [id, setId] = useState(0); //1,2,3 ...
const [category, setCategory] = useState(null); //people,films...
const [onClick, setClick] = useState(false);

const obtenerCategoria = (event) =>{
    setCategory(event.target.value);
    setClick(false);
}

const obtenerId = (event) =>{
    setId(event.target.value)
}

//Obtener info del API 
const getInfo = (e) => {
    e.preventDefault();
    prueba();

};

//Se puede retirar
useEffect(() => {
    console.log("Cada vez que hago click(en categoria o submit) sale este mensaje");
    prueba();
},[onClick]);

const prueba = () => {
    if(onClick){
    axios.get(`https://swapi.dev/api/${category}/${id}`)
    .then(respuesta => {
        setDatos(respuesta.data);
    })
    .catch(err => {
        setDatos(null);
    })
    }
}

const mostrar = () => {
    if (onClick){
    if (category === 'people') {
        return <People datos = {datos}/>
    } else if(category === 'films') {
        return <Films datos = {datos}/>
    } else if(category === 'starships') {
        return <Starships datos = {datos}/>
    } else if ( category === 'vehicles'){
        return <Vehicles datos = {datos}/>
    } else if (category === 'species'){
        return <Species datos = {datos}/>
    } else {
        return <Planets datos = {datos}/>
    }
    }
}

    return(
    <div>
        <form onSubmit={getInfo}>
            <div>
            <label htmlFor='menuDesplegable'>Search for: </label>
            <select id="menuDesplegable" onChange={(event) => obtenerCategoria(event)}>
                <option value="" hidden>select a category-</option>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </select>
            </div>

            <div>
                <label htmlFor='idInput'>Id: </label>
                <input type='number' id='id' name='id' onChange={(event) => obtenerId(event)}></input>
            </div>
            <button onClick={() => setClick(true)}> Search </button>
        </form>
        
        { 
            datos!==null?
            <div> {mostrar()} </div>
                :
                <div> 
                    <h2>Estos no son los droides que está buscando.</h2>
                    <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/03/obi-wan-kenobi-serie-tv-2639997.jpg?itok=Be0Z6RUp"></img>
                </div>
        }
    </div>
    )
}

export default Home;