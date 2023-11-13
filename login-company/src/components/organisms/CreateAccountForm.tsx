import React, { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import {Link} from 'react-router-dom'

type CreateAccountFormProps = {
  onSubmit: (empresa: string , representante: string, email: string, password: string, password2: string, ok: boolean) => void;
};

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({ onSubmit }) => {

  const [empresa, setEmpresa] = useState("");
  const [representante, setRepresentante] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [ok, setOk] = useState(false);


  const handleSubmit = () => {
    onSubmit(empresa, representante, email, password, password2, ok);
  }
  

  return (
    <div>
      <FormField labelContent="* Empresa" inputType="text" inputName="empresa" inputValue={empresa} onChange={(event) => setEmpresa(event.target.value)} />
      <FormField labelContent="* Representante" inputType="text" inputName="representante" inputValue={representante} onChange={(event) => setRepresentante(event.target.value)} />
      <FormField labelContent="* Email" inputType="text" inputName="email" inputValue={email} onChange={(event) => setEmail(event.target.value)} />
      <FormField labelContent="* Contraseña" inputType="password" inputName="password"  inputValue={password} onChange={(event) => setPassword(event.target.value)}/>
      <FormField labelContent="* Recordar Contraseña" inputType="password" inputName="password2" inputValue={password2} onChange={(event) => setPassword2(event.target.value)} />
      <Input type="checkbox" name="ok" value="" onChange={() => setOk(!ok)} /> Estoy de acuerdo con los terminos de uso y privacidad
      <br />
      <Button text="Inscribirse" onClick={handleSubmit} />
      <Link to='/'>Regresar a Login</Link>
    </div>
  );
};

export default CreateAccountForm;