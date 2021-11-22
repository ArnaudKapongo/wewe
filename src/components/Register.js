import React, {useState } from 'react';
import { Container, Button, Paper, Typography, TextField } from '@material-ui/core'
//import ListItem from './ListItem';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Register = () => {  
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const history = useHistory();

    const { email, password } = formData;
    
    const onChange = (e) => setFormData({...formData, [e.target.name]:e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if(formData.email === 'arnaud@gmail.com' && formData.password === '1234') {
            history.push("/dashboard");
        } else {
            alert('bad');
        } 
    }

    return (
    <Container maxWidth="md" style={{
        height: '-webkit-fill-available',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
    
        <Paper elevation={4} style={{
            padding: 36,
            display: 'flex',
            width: '40%',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <form onSubmit={onSubmit}>
            <Typography variant="h4">
                Register Here
            </Typography>
            <TextField variant="outlined" 
            value={email} 
            onChange={onChange} 
            name="email"
            label="Email" 
            type="text" 
            style={{
                marginTop: 30,
                marginBottom: 30
            }} fullWidth/>
            <TextField variant="outlined" 
            label="Mot de passe" 
            type="password" 
            name="password"
            onChange={onChange}
            value={password}
            fullWidth/>
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
               S'inscrire
            </Button>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Typography>
                    Connexion
                </Typography>
            </div>
            </form>
        </Paper>
    </Container>
    );
}

export default Register;