import React, {useState, useEffect } from 'react';
import { Container, Button, Paper, Typography, TextField } from '@material-ui/core'
//import ListItem from './ListItem';
import { useHistory } from "react-router-dom";
import firebase from './firebase/firebase';
import { db } from './firebase/firebase';
import { collection, getDocs } from "firebase/firestore";
import { signup, login, logout, useAuth } from './firebase/firebase';
import wemoov from '../assets/wemoov.png';

const Login = () => {  

    const usersCollectionRef = collection(db, "consultants");

    const [users, setUsers ] = useState([]);  


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const { email, password } = formData;

    const history = useHistory();

    const onChange = (e) => setFormData({...formData, [e.target.name]:e.target.value });

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({

            ...doc.data(), id: doc.id })))
        };
        getUsers();  
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        if(formData.email === 'arnaud@gmail.com' && formData.password === '1234') {
            history.push("/dashboard");
            {/*alert('good'); */}
            {/* redirection  */}
        } else {
            alert('bad');
        } 
    }

    return (
    <Container maxWidth="md" style={{
        height: '-webkit-fill-available',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
   
    
     {/*   {users.map((user) => {

            return (
            <div>
            <h1>Name: {user.name}</h1>
            <h1>Surname: {user.surname}</h1>
            <img src={user.image} />
            </div>        
                )
        })
    } */}
    
        <Paper elevation={4} style={{
            padding: 36,
            display: 'flex',
            width: '40%',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <form onSubmit={onSubmit}>
              <img src={wemoov} alt={wemoov} className="wemoovimage"/>
            <TextField
                name="email"
                value={email}
                onChange={onChange}
                variant="outlined" 
                label="Email" type="text" style={{
                marginTop: 30,
                marginBottom: 30
            }} fullWidth/>
            <TextField 
            name="password"
            value={password}
            onChange={onChange}
            variant="outlined" 
            label="Mot de passe" type="password" fullWidth/>
            <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            style={{
                marginTop: 30,
                marginBottom: 5
            }}
            >
                Connexion
            </Button>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Typography>
                   {/* S'inscrire */}
                </Typography>
            </div>
            </form>
        </Paper>
    </Container>
    );
}

export default Login;