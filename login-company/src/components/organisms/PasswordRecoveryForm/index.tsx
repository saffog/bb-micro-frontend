import React, { useState } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";
import { PasswordRecoveryFormProps } from "../../../interfaces/interfaces";
import RedirectLink from "../../atoms/Link";
import ErrorMessage from "../../atoms/ErrorMessage";

const PasswordRecoveryForm: React.FC<PasswordRecoveryFormProps> = ({
  onSubmit,
  error,
}: PasswordRecoveryFormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    onSubmit(email);
  };

  return (
    <div>
      <FormField
        labelContent="Email"
        inputType="text"
        inputName="email"
        inputValue={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {error && <ErrorMessage errorMesage={error} />}
      <Button text="Contacte un agente" onClick={handleSubmit} />
      <RedirectLink to={"/"} content={"Regresar a Login"} />
    </div>
  );
};

export default PasswordRecoveryForm;
