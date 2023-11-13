
import React, { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import {Link} from "react-router-dom";

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(email,password);
  }
  

  return (
    <div>
      <FormField labelContent="Email" inputType="text" inputName="email" inputValue={email} onChange={(event) => setEmail(event.target.value)} />
      <FormField labelContent="Contraseña" inputType="password" inputName="password" inputValue={password} onChange={(event) => setPassword(event.target.value)} />
      <Button text="Acceder" onClick={handleSubmit} />
      <Link to='/password-recovery'>¿Olvidó Contraseña?</Link>
      <Link to='/create-account'>Registre su empresa</Link>
    </div>
  );
};

export default LoginForm;