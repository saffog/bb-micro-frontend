import React, { useState } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";
import { PasswordRecoveryFormProps } from "../../../interfaces/interfaces";
import RedirectLink from "../../atoms/Link";
import ErrorMessage from "../../atoms/ErrorMessage";

import styles from "./index.module.css";

const PasswordRecoveryForm: React.FC<PasswordRecoveryFormProps> = ({
  onSubmit,
  error,
}: PasswordRecoveryFormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    onSubmit(email);
  };

  return (
    <div className={styles.container}>
      <FormField
        labelContent="* Email"
        inputType="email"
        inputName="email"
        inputValue={email}
        onChange={(event) => setEmail(event.target.value)}
        infoMessage="Se enviarán instrucciones al correo electrónico vinculado a su cuenta."
        required
      />
      {error && <ErrorMessage errorMesage={error} />}
      <Button text="Recuperar Contraseña" onClick={handleSubmit} disabled={!email} />
      <p>Deseas regresar? <RedirectLink to={"/"} content={"Iniciar Sesión"} /></p>
    </div>
  );
};

export default PasswordRecoveryForm;
