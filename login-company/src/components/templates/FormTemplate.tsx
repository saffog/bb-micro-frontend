import React from "react";
import LoginForm from "../organisms/LoginForm";
import CreateAccountForm from "../organisms/CreateAccountForm";
import PasswordRecoveryForm from "../organisms/PasswordRecoveryForm";
import '../../styles/Forms.css';

type FormTemplateProps = {
    title?: string;
    onSubmit: (...args: any[]) => void;
    formType: "login" | "createAccount" | "passwordRecovery";
};

const FormTemplate: React.FC<FormTemplateProps> = ({title, onSubmit, formType}) => {
  
  const formComponent = generateForm(formType, onSubmit);

  return (
    <div >
      <h2>{title}</h2>
      <div className="container-form">
      {formComponent}
      </div>
    </div>
  );
};

const generateForm = (formType: string, onSubmit: () => void): JSX.Element | null => {
  const formComponents: Record<string, JSX.Element> = {
    login: <LoginForm onSubmit={onSubmit} />,
    createAccount: <CreateAccountForm onSubmit={onSubmit} />,
    passwordRecovery: <PasswordRecoveryForm onSubmit={onSubmit} />,
  };

  return formComponents[formType] || null;
}

export default FormTemplate;