import React, { useState } from "react";

import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";
import ErrorMessage from "../../atoms/ErrorMessage";
import { LoginFormProps } from "../../../interfaces/interfaces";
import RedirectLink from "../../atoms/Link";

import styles from "./index.module.css";

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  error,
}: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(email, password);
  };

  return (
    <div className={styles.container}>
      <FormField
        labelContent="* Email"
        inputType="email"
        inputName="email"
        inputValue={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <FormField
        labelContent="* Contraseña"
        inputType="password"
        inputName="password"
        inputValue={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      {error && <ErrorMessage errorMesage={error} />}
      <div className={styles.actionForm}>
        <Button text="Acceder" onClick={handleSubmit} disabled={!(email && password)} />
        <div className={styles.forgotPassword}>
          <RedirectLink to={"/password-recovery"} content={"¿Olvidó su Contraseña?"} />
        </div>
      </div>

      <p>¿Es nueva su empresa? <RedirectLink to={"/create-account"} content="Registrela aquí" /></p>
    </div>
  );
};

export default LoginForm;
