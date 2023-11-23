import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';

import InputLabel from '../../molecules/InputLabel';
import Card from '../../molecules/Card';
import ButtonForm from '../../atoms/Button';
import usePost from '../../../hooks/usePost';
import ContainerRow from '../../atoms/ContainerRow';

import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {callPost, error} = usePost('/login');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await callPost({body: JSON.stringify({ email, password })});
      if (response) {
        const event = new CustomEvent('[LoginApp] login', {detail: response});
        window.dispatchEvent(event);
      }
    } catch (e) {

      console.error(e);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Cuenta Personal</h1>
        {/*<h2>Iniciar Sesión</h2>*/}
      </div>
      <Card title='Iniciar Sesión' className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <InputLabel
            name='email'
            title='Email'
            type='email'
            value={email}
            onChange={handleEmailChange}
          />
          <InputLabel
            name='password'
            title='Contraseña'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
          {!!error && <p className={styles.errorMessage}>Credenciales incorrectas. Inténtalo de nuevo.</p>}
          <ContainerRow>
            <ButtonForm disabled={!Boolean(email && password)} variant="success" type="submit">Iniciar sesión</ButtonForm>
            <Link to="/signup">Nuevo Usuario</Link>
            <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          </ContainerRow>
        </form>
      </Card>
    </div>
  );
};

export default Login;