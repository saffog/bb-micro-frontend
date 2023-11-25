import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';

import { FaUserLock } from "react-icons/fa6";

import InputLabel from '../../molecules/InputLabel';
import Card from '../../molecules/Card';
import ButtonForm from '../../atoms/Button';
import usePost from '../../../hooks/usePost';
import ContainerRow from '../../atoms/ContainerRow';

import styles from './Login.module.css';
import CheckboxForm from '../../atoms/CheckBox';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveData, setSaveData] = useState(false);
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
      <Card title='Iniciar Sesión' icon={FaUserLock}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <InputLabel
            name='email'
            title='Correo Electronico'
            type='email'
            value={email}
            onChange={handleEmailChange}
          />
          <div className={styles.containerSaveData}>
            <InputLabel
              name='password'
              title='Contraseña'
              type='password'
              value={password}
              onChange={handlePasswordChange}
            />
            <CheckboxForm
              name='agreeTerms'
              checked={saveData}
              onChange={() => setSaveData(!saveData)}
              title='¿Recuerdame?'
              className={styles.saveData}
            />
          </div>

          {!!error && <p className={styles.errorMessage}>Credenciales incorrectas. Inténtalo de nuevo.</p>}
          <div className={styles.actionForm}>
            <ButtonForm
              disabled={!Boolean(email && password)}
              variant="success"
              type="submit"
            >
              Iniciar sesión
            </ButtonForm>
            <div className={styles.forgotPassword}>
              <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
            </div>
          </div>
          <p>¿Eres nuevo usuario? <Link to="/signup">Registrate!</Link></p>
        </form>
      </Card>
    </div>
  );
};

export default Login;