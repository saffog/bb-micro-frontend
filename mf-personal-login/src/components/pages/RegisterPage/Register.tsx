import React, {ChangeEvent, FormEvent, useState} from 'react';

import InputLabel from '../../molecules/InputLabel';
import ButtonForm from '../../atoms/Button';
import CheckboxForm from '../../atoms/CheckBox';
import Card from '../../molecules/Card';

import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="container">
      <Card title='Registro'>
        <form onSubmit={handleSubmit} className="signupForm">
          <InputLabel name='name' title='Nombre:' value={name} onChange={handleNameChange}/>
          <InputLabel
            name='email'
            title='Email:'
            value={email}
            onChange={handleEmailChange}
            type='email'
          />
          <InputLabel
            name='password'
            title='Contraseña:'
            value={password}
            onChange={handlePasswordChange}
            type='password'
          />
          <InputLabel
            name='confirmPassword'
            title='Reescribir Contraseña:'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onBlur={handleConfirmPasswordBlur}
            type='password'
          />
          {!passwordMatch && <p className="errorMessage">Las contraseñas no coinciden.</p>}
          <CheckboxForm
            name='agreeTerms'
            checked={agreeTerms}
            onChange={handleAgreeTermsChange}
            title='Estoy de acuerdo con los términos y condiciones'
          />
          <ButtonForm type="submit">Registrarse</ButtonForm>
        </form>
      </Card>
    </div>
  );
};

export default Register;
