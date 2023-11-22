import React, {ChangeEvent, FormEvent, useState} from 'react';

import InputLabel from '../../molecules/InputLabel';
import ButtonForm from '../../atoms/Button';
import CheckboxForm from '../../atoms/CheckBox';
import Card from '../../molecules/Card';
import usePost from '../../../hooks/usePost';

import styles from './Signup.module.css';
import ContainerRow from '../../atoms/ContainerRow';
import {Link} from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const {callPost, error } = usePost('/signup');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleConfirmPasswordBlur = () => {
    if (password === confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (passwordMatch) return;

    try {
      const response = await callPost({body: JSON.stringify({ name, email, password })});
      if (response) {
        const event = new CustomEvent('[PersonalLoginApp] signup', {detail: response})
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
        <h2>Crear Cuenta</h2>
      </div>
      <div className={styles.body}>
        <Card>
          <form onSubmit={handleSubmit} className={styles.signupForm}>
            <InputLabel name='name' title='Nombre:' value={name} onChange={handleNameChange}/>
            <InputLabel
              name='email'
              title='Email'
              value={email}
              onChange={handleEmailChange}
              type='email'
            />
            <InputLabel
              name='password'
              title='Contraseña'
              value={password}
              onChange={handlePasswordChange}
              type='password'
            />
            <InputLabel
              name='confirmPassword'
              title='Reescribir Contraseña'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onBlur={handleConfirmPasswordBlur}
              type='password'
            />
            {!passwordMatch && <p className={styles.errorMessage}>Las contraseñas no coinciden.</p>}
            {!!error && <p className={styles.errorMessage}>Credenciales incorrectas. Inténtalo de nuevo.</p>}
            <CheckboxForm
              name='agreeTerms'
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
              title='Estoy de acuerdo con los términos y condiciones'
            />
            <ContainerRow>
              <ButtonForm variant="success" type="submit">Registrarse</ButtonForm>
              <Link to="/login">Iniciar Sesión</Link>
            </ContainerRow>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
