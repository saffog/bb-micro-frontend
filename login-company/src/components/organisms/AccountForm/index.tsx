import React, { useState } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { CreateAccountFormProps } from "../../../interfaces/interfaces";
import styles from "../index.module.css";
import RedirectLink from "../../atoms/Link";
import ErrorMessage from "../../atoms/ErrorMessage";

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({
  onSubmit,
  error,
}: CreateAccountFormProps) => {
  const [empresa, setEmpresa] = useState("");
  const [representante, setRepresentante] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [ok, setOk] = useState(false);

  const handleSubmit = () => {
    onSubmit(empresa, representante, email, password, password2, ok);
  };

  return (
    <div>
      <FormField
        labelContent="* Empresa"
        inputType="text"
        inputName="empresa"
        inputValue={empresa}
        onChange={(event) => setEmpresa(event.target.value)}
      />
      <FormField
        labelContent="* Representante"
        inputType="text"
        inputName="representante"
        inputValue={representante}
        onChange={(event) => setRepresentante(event.target.value)}
      />
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
      <FormField
        labelContent="* Recordar Contraseña"
        inputType="password"
        inputName="password2"
        inputValue={password2}
        onChange={(event) => setPassword2(event.target.value)}
      />
      <Input type="checkbox" name="ok" value="" onChange={() => setOk(!ok)} />{" "}
      Estoy de acuerdo con los terminos de uso y privacidad
      <br />
      {error && <ErrorMessage errorMesage={error} />}
      <Button text="Inscribirse" onClick={handleSubmit} />
      <RedirectLink to={"/"} content="Regresar a Login" />
    </div>
  );
};

export default CreateAccountForm;
