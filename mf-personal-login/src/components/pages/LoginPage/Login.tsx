import React, {ChangeEvent, FormEvent, useState} from 'react';

import InputLabel from '../../molecules/InputLabel';
import Card from '../../molecules/Card';
import ButtonForm from '../../atoms/Button';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Email: ', email);
    console.log('Password: ', password);
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