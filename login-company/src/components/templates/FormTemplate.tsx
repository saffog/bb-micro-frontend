import React from "react";
import LoginForm from "../organisms/LoginForm";
import CreateAccountForm from "../organisms/CreateAccountForm";
import PasswordRecoveryForm from "../organisms/PasswordRecoveryForm";
import "../../styles/Forms.css";
import { FormTemplateProps } from "../../interfaces/interfaces";
const FormTemplate: React.FC<FormTemplateProps> = ({
  title,
  onSubmit,
  formType,
  error,
}: FormTemplateProps) => {
  const formComponent = generateForm(formType, onSubmit, error);

  return (
    <div>
      <h2>{title}</h2>
      <div className="container-form">{formComponent}</div>
    </div>
  );
};

const generateForm = (
  formType: string,
  onSubmit: () => void,
  error: string
): JSX.Element | null => {
  const formComponents: Record<string, JSX.Element> = {
    login: <LoginForm onSubmit={onSubmit} error={error} />,
    createAccount: <CreateAccountForm onSubmit={onSubmit} error={error} />,
    passwordRecovery: (
      <PasswordRecoveryForm onSubmit={onSubmit} error={error} />
    ),
  };

  return formComponents[formType] || null;
};

export default FormTemplate;
