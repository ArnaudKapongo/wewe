import React, {useContext, useState } from 'react';
import { Container, Button, Paper, Typography, TextField } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom';
import { Context as AuthContext } from '../context/AuthContext';

const Register = () => { 

    const { state, signup } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });
    
    const onSubmit =  async (e) => {
        e.preventDefault();
        signup({ email, password});
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
            <Typography variant="h4">
                Incription
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
            onChange={onChange}
            name="password"
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