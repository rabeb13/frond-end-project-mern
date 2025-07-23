import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../JS/Actions/user';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

//Si l’utilisateur tape dans <input name="email" />, alors newUser.email est mis à jour.
const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value});
};

//➡️ C’est ce qui se passe quand on clique sur le bouton “S’inscrire” :

const handleUser = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    dispatch(login(user)); // envoie une action Redux avec les données
navigate('/profile'); // redirige vers la page de profil après l'inscription
};


  return (
    <div>
        
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type='email' 
        name='email'
        placeholder='Enter Email' 
        onChange={handleChange}
        />
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type='text' 
        name='password'
        placeholder='Enter Password' 
        onChange={handleChange}
        />
       
        <Link to='/profile'>
        <Button variant="primary" type="submit" onClick={handleUser}>
            login
            </Button>
        </Link>
    </div>
  )
}



export default Login;
