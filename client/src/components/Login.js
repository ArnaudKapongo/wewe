import React, {useState, useEffect } from 'react';
import { Container, Button, Paper, Typography, TextField } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import wemoov from '../assets/wemoov.png';

const Login = () => {  

    /*const [formData, setFormData] = useState({
        email: '',
        password: ''
    });*/
    
   // const { email, password } = formData;

   // const history = useHistory();

   // const onChange = (e) => setFormData({...formData, [e.target.name]:e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
       // if(formData.email === 'arnaud@gmail.com' && formData.password === '1234') {
           // history.push("/dashboard");
            {/*alert('good'); */}
            {/* redirection  */}
       /* } else {
            alert('bad');
        }  */

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
                
                variant="outlined" 
                label="Email" type="text" style={{
                marginTop: 30,
                marginBottom: 30
            }} fullWidth/>
            <TextField 
            name="password"
            
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