import React, {useState, useEffect, useReducer } from 'react';
import '../App.css';
import { useHistory } from "react-router-dom";
import firebase from './firebase/firebase';
import { db } from './firebase/firebase';
import { collection, getDocs } from "firebase/firestore";


const ListItem = () => {

  const usersCollectionRef = collection(db, "consultants");

  const [consultants, setConsultants ] = useState([]);  


   const history = useHistory();

    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setConsultants(data.docs.map((doc) => ({

        ...doc.data(), id: doc.id })))
        };
    getUsers();  
    }, [consultants]) 

    return(
        <>
      
      {consultants.map((consultant) => {

        return (
        <div className='container-row' onClick={() => history.push("/rating")}>
        <div className="container-item">
            <img className="image" src={consultant.image} alt={consultant.name} />
            <div className="row-description">
              <p className="ajustText">{consultant.name} {consultant.surname}</p>
              <p>{consultant.status}</p>
            </div>
        </div> 
        
        </div>        
        )
    }     )
}
      

    
    
    </>
    )
}

export default ListItem;