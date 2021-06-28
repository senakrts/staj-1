import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { login } from '../services/Services';

export default function Login() {
  const [username, getUsername] = useState('');
  const [password, getPassword] = useState('');
  const state = {
    token: ''
  };

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  const Login = (username, password) => {
    login(username, password).then(res => {
      state.token = res;
      console.log('token', state.token);
    });
  };

  let history = useHistory();
  const handleLoginButton = () => {
    Login(localStorage.getItem('username'), password);
    history.push('/home');
  };
  return (
    <div className='Login'>
      <Form onSubmit={handleSubmit}>
        <Form.Group size='lg' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type='username'
            value={username}
            onChange={e => getUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={e => getPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size='lg'
          type='submit'
          disabled={!validateForm()}
          onClick={handleLoginButton}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
