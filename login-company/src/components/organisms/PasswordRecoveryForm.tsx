import React, { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import {Link} from 'react-router-dom'

type PasswordRecoveryFormProps = {
  onSubmit: (email: string) => void;
};

const PasswordRecoveryForm: React.FC<PasswordRecoveryFormProps> = ({ onSubmit }) => {

  const[email, setEmail] = useState("");

  const handleSubmit = () => {
    onSubmit(email);
  }
  

  return (
    <div>
      <FormField labelContent="Email" inputType="text" inputName="email" inputValue={email} onChange={(event) => setEmail(event.target.value)} />
      <Button text="Contacte un agente" onClick={handleSubmit} />
      <Link to='/'>Regresar a Login</Link>
    </div>
  );
};

export default PasswordRecoveryForm;