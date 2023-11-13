import React, {ChangeEvent, FormEvent, useState} from 'react';

import InputLabel from '../../molecules/InputLabel';
import Card from '../../molecules/Card';
import ButtonForm from '../../atoms/Button';

import './Login.css';
import usePost from '../../../hooks/usePost';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {data, callPost } = usePost(
    '/login',
    {
      body: JSON.stringify({ email, password }),
    });

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Email: ', email);
    console.log('Password: ', password);
    callPost();
  };

  return (
    <div className="container">
      <Card title='Iniciar sesión'>
        <form onSubmit={handleSubmit} className="loginForm">
          <InputLabel
            name='email'
            title='Email: '
            type='email'
            value={email}
            onChange={handleEmailChange}
          />
          <InputLabel
            name='password'
            title='Contraseña: '
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <ButtonForm type="submit">Iniciar sesión</ButtonForm>
        </form>
      </Card>
    </div>
  );
};

export default Login;