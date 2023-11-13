import React, {ChangeEvent, FormEvent, useState} from 'react';

import InputLabel from '../../molecules/InputLabel';
import ButtonForm from '../../atoms/Button';
import Card from '../../molecules/Card';

import './ForgotPassword.css';
import usePost from '../../../hooks/usePost';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const {data, callPost } = usePost(
    '/forgot-password',
    {
      body: JSON.stringify({ email }),
    });

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    callPost();

    setEmailSent(true);
  };

  return (
    <div className="container">
      <Card title='Recuperar Contraseña'>
        {emailSent ? (
          <p className="successMessage">
            Se ha enviado un correo con instrucciones para restablecer tu contraseña.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="forgotPasswordForm">
            <InputLabel
              name='email'
              title='Email:'
              value={email}
              onChange={handleEmailChange}
              type='email'
            />
            <ButtonForm type="submit">Recuperar Contraseña</ButtonForm>
          </form>
        )}
      </Card>
    </div>
  );
};

export default ForgotPassword;