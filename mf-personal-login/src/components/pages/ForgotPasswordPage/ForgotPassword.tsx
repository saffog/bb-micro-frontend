import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';

import { FaUserShield } from 'react-icons/fa6';

import {ForgotPasswordResponse} from '../../../interfaces/ForgotPassword.interface';
import InputLabel from '../../molecules/InputLabel';
import ButtonForm from '../../atoms/Button';
import Card from '../../molecules/Card';
import usePost from '../../../hooks/usePost';

import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const {data, callPost, error} = usePost<ForgotPasswordResponse>('/forgot-password-person');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await callPost({body: JSON.stringify({email})});
      if (response) {
        const event = new CustomEvent('[PersonalLoginApp] forgot-password', {detail: response});
        window.dispatchEvent(event);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.container}>
      <Card title='Olvide mi Contraseña' icon={FaUserShield}>
        {!!data && !error ?
          (
            <p className={styles.successMessage}>{data?.statusMessage}</p>
          ) : (
            <form onSubmit={handleSubmit} className={styles.forgotPasswordForm}>
              <InputLabel
                name='email'
                title='Email'
                value={email}
                onChange={handleEmailChange}
                type='email'
                infoMessage='Se enviarán instrucciones al correo electrónico vinculado a su cuenta.'
              />
              {!!error && <p className={styles.errorMessage}>{error.message}</p> }
              <ButtonForm
                variant="success"
                type="submit"
                disabled={!email}
              >
                Recuperar Contraseña
              </ButtonForm>
              <p>¿Deseas regresar? <Link to="/">Iniciar Sesión</Link></p>
            </form>
          )
        }
      </Card>
    </div>
  );
};

export default ForgotPassword;