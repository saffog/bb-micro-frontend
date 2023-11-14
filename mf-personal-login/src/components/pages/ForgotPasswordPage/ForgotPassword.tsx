import React, {ChangeEvent, FormEvent, useState} from 'react';

import InputLabel from '../../molecules/InputLabel';
import ButtonForm from '../../atoms/Button';
import Card from '../../molecules/Card';
import usePost from '../../../hooks/usePost';
import {ForgotPasswordResponse} from '../../../interfaces/ForgotPassword.interface';

import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const {data, callPost, error, isPending } = usePost<ForgotPasswordResponse>('/forgot-password');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    callPost({
      body: JSON.stringify({ email }),
    });
  };

  return (
    <div className="container">
      <Card title='Recuperar Contraseña'>
        {!!data && !error ?
          (
            <p className="successMessage">{data?.statusMessage}</p>
          ) : (
            <form onSubmit={handleSubmit} className="forgotPasswordForm">
              <InputLabel
                name='email'
                title='Email:'
                value={email}
                onChange={handleEmailChange}
                type='email'
              />
              {!!error && <p className="errorMessage">{error.message}</p>}
              <ButtonForm type="submit">Recuperar Contraseña</ButtonForm>
            </form>
          )
        }
      </Card>
    </div>
  );
};

export default ForgotPassword;