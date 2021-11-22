import React, {useState, useEffect, useReducer } from 'react';
import '../App.css';
import arnaud from '../assets/arnaud.jpeg';
import alexis from '../assets/alexis.jpeg';
import {v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router-dom";

const ListItem = () => {

    const [consultants, setConsultants] = useState([
        { name: 'Arnaud', surname: 'Kapongo', statut: 'Développeur web', notation: [], id: uuidv4(), avatar: arnaud  },
        { name: 'Alexis', surname: 'Averty', statut: 'Développeur mobile', notation: [], id: uuidv4(), avatar: arnaud  }
    ]); 

    /*const [consultants, dispatch] = useReducer( [], () => {

        const localData = localStorage.getItem('consultants');
        return localData ? JSON.parse(localData) : []
    });*/

    const history = useHistory();

    useEffect(() => {
        localStorage.setItem('consultants', JSON.stringify(consultants))
    }, [consultants])


    useEffect(() => {

    }, )

    return(
        <>
        <div
        className='container-row' onClick={() => history.push("/rating") }>
        <div className="container-item">
          <img className="image" src={arnaud} alt=""/>
          <div className="row-description">
            <p className="alexis">Arnaud Kapongo</p>
            <p>Développeur web</p>
          </div>
        </div>
        
      </div>
      <div
        className='container-row' onClick={() => history.push("/rating")}>
        <div className="container-item">
          <img className="image" src={alexis} alt=""/>
          <div className="row-description">
            <p className="alexis">Alexis Averty</p>
            <p>Développeur mobile</p>
          </div>
        </div>
        
      </div>
      

    
    
    </>
    )
}

export default ListItem;