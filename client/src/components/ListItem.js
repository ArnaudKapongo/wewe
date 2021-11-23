import React, {useState, useEffect, useReducer } from 'react';
import '../App.css';
import { useHistory } from "react-router-dom";

import { Link } from 'react-router-dom';


/*
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
        <>
     
        <div className='container-row' key={consultant.id} >
        <div className="container-item">
            <img className="image" src={consultant.image} alt={consultant.name} />
            <div className="row-description">
              <p className="ajustText">{consultant.name} {consultant.surname}</p>
              <p>{consultant.status}</p>
            </div>
        </div> 
        
        </div>
         
        </>       
        )
    }     )
}
      

    
    
    </>
    )
}
*/
//export default ListItem;