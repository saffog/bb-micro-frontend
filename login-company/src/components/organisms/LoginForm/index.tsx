import React, { useState } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";
import ErrorMessage from "../../atoms/ErrorMessage";
import { LoginFormProps } from "../../../interfaces/interfaces";
import RedirectLink from "../../atoms/Link";

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
    <div>
      <FormField
        labelContent="* Email"
        inputType="text"
        inputName="email"
        inputValue={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <FormField
        labelContent="* Contraseña"
        inputType="password"
        inputName="password"
        inputValue={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {error && <ErrorMessage errorMesage={error} />}
      <Button text="Acceder" onClick={handleSubmit} />
      <RedirectLink to={"/password-recovery"} content={"¿Olvidó Contraseña?"} />
      <RedirectLink to={"/create-account"} content={"Registre su empresa"} />
    </div>
  );
};

export default LoginForm;
