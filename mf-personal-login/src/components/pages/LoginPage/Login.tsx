import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Link} from 'react-router-dom';

import { FaUserLock } from 'react-icons/fa6';

import ButtonForm from '../../atoms/Button';
// import CheckboxForm from '../../atoms/CheckBox';
import InputLabel from '../../molecules/InputLabel';
import Card from '../../molecules/Card';
import usePost from '../../../hooks/usePost';

import styles from './Login.module.css';
// import Modal from './../../templates/ModalTemplate/index';
// import { contentTermsAndConditions } from './../../../constants/termsCond.constant';
import { login, useLoggedIn } from "../../data/login";
import LoginNest from './Login-nest';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [saveData, setSaveData] = useState(false);
  const {callPost, error} = usePost('/login-person');
  // const [modalOpen, setModalOpen] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  //
  // const handleOnClose = () => {
  //   setModalOpen(false);
  // };
  //
  // const onClickTermsAndConditions=()=>{
  //   setModalOpen(true);
  // }

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
        <LoginNest/>
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
            {/*<CheckboxForm*/}
            {/*  name='agreeTerms'*/}
            {/*  checked={saveData}*/}
            {/*  onChange={() => setSaveData(!saveData)}*/}
            {/*  callbackMap={new Map().set('agreeTerms', onClickTermsAndConditions)}*/}
            {/*  title='¿Recuerdame?'*/}
            {/*  className={styles.saveData}*/}
            {/*  required={false}*/}
            {/*/>*/}
          </div>
          {!!error && <p className={styles.errorMessage}>Credenciales incorrectas. Inténtalo de nuevo.</p>}
          <div className={styles.actionForm}>
            <ButtonForm
              disabled={!(email && password)}
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
      {/*{modalOpen && (*/}
      {/*  <Modal*/}
      {/*    title="Terminos y Condiciones"*/}
      {/*    content={contentTermsAndConditions}*/}
      {/*    onClose={handleOnClose}*/}
      {/*    buttonTitle="Volver"*/}
      {/*  />*/}
      {/*)}*/}
    </div>
    
  );
};

export default Login;