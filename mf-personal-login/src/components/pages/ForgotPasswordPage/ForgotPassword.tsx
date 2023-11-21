import React, {ChangeEvent, FormEvent, useState} from 'react';

import InputLabel from '../../molecules/InputLabel';
import ButtonForm from '../../atoms/Button';
import Card from '../../molecules/Card';
import usePost from '../../../hooks/usePost';
import {ForgotPasswordResponse} from '../../../interfaces/ForgotPassword.interface';

import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const {data, callPost, error} = usePost<ForgotPasswordResponse>('/forgot-password');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await callPost({body: JSON.stringify({email})});
      if (response) {
        const event = new CustomEvent('[PersonalLoginApp] forgot-password', {detail: response})
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
        <h2>Olvide mi contraseña</h2>
      </div>
      <div className={styles.body}>
        <Card>
          {!!data && !error ?
            (
              <p className={styles.successMessage}>{data?.statusMessage}</p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.forgotPasswordForm}>
                <InputLabel
                  name='email'
                  title='Email:'
                  value={email}
                  onChange={handleEmailChange}
                  type='email'
                />
                {!!error && <p className={styles.errorMessage}>{error.message}</p>}
                <ButtonForm variant="success" type="submit">Recuperar Contraseña</ButtonForm>
              </form>
            )
          }
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;