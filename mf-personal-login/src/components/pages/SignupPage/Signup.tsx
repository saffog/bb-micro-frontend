import React, { ChangeEvent, FormEvent, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {FaCircleCheck, FaUserPlus} from 'react-icons/fa6';

import InputLabel from '../../molecules/InputLabel';
import ButtonForm from '../../atoms/Button';
import CheckboxForm from '../../atoms/CheckBox';
import Card from '../../molecules/Card';
import usePost from '../../../hooks/usePost';
import Modal from './../../templates/ModalTemplate/index';
import { contentTermsAndConditions } from '../../../constants/termsCond.constant';

import styles from './Signup.module.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenSuccess, setModalOpenSuccess] = useState(false);

  const navigate = useNavigate();

  const { callPost, error } = usePost('/signup-person');
  const handleOnClose = () => {
    setModalOpen(false);
  };

  const handleCloseModalSuccess = () => {
    setModalOpenSuccess(false);
    navigate('/');
  };

  const onClickTermsAndConditions = () => {
    setModalOpen(true);
  };

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
    if (!passwordMatch) return;

    try {
      const response = await callPost({
        body: JSON.stringify({ name, email, password }),
      });
      if (response) {
        const event = new CustomEvent('[PersonalLoginApp] signup', {
          detail: response,
        });
        window.dispatchEvent(event);
        setModalOpenSuccess(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.container}>
      <Card title="REGISTRARSE" icon={FaUserPlus} className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <InputLabel
            name="name"
            title="Nombre"
            value={name}
            onChange={handleNameChange}
          />
          <InputLabel
            name="email"
            title="Email"
            value={email}
            onChange={handleEmailChange}
            type="email"
          />
          <InputLabel
            name="password"
            title="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            infoMessage="La constraseña al menos debe tener 8 caracteres, un numero y una letra en mayuscula."
            withPattern
          />
          <InputLabel
            name="confirmPassword"
            title="Reescribir Contraseña"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onBlur={handleConfirmPasswordBlur}
            type="password"
          />
          {!passwordMatch && (
            <p className={styles.errorMessage}>Las contraseñas no coinciden.</p>
          )}
          {!!error && (
            <p className={styles.errorMessage}>
              Credenciales incorrectas. Inténtalo de nuevo.
            </p>
          )}

          <div className={styles.actionForm}>
            <CheckboxForm
              name="agreeTerms"
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
              callbackMap={new Map().set('agreeTerms', onClickTermsAndConditions)}
            />
            <ButtonForm
              variant="success"
              disabled={!(email && password && name && agreeTerms)}
              type="submit"
            >
              REGISTRARSE
            </ButtonForm>
          </div>
          <p>
            ¿Estás registrado? <Link to="/">Inicia Sesión</Link>
          </p>
        </form>
        {modalOpen && (
          <Modal
            title="Terminos y Condiciones"
            content={contentTermsAndConditions}
            onClose={handleOnClose}
            buttonTitle="Volver"
          />
        )}
        {modalOpenSuccess && (
          <Modal title='¡Exito!' buttonTitle='Aceptar' onClose={handleCloseModalSuccess}>
            <div className={styles.contentModalSuccess}>
              <FaCircleCheck className={styles.iconSuccess}/>
              <h3>Su usuario fue registrado exitosamente</h3>
            </div>
          </Modal>
        )}
      </Card>
    </div>
  );
};

export default Signup;
