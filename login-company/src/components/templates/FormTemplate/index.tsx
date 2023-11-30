import React from "react";

import { IconType } from 'react-icons';
import { BsBuildingFillAdd, BsBuildingFillLock } from "react-icons/bs";
import { FaBuildingShield } from "react-icons/fa6";

import LoginForm from "../../organisms/LoginForm";
import CreateAccountForm from "../../organisms/AccountForm";
import PasswordRecoveryForm from "../../organisms/PasswordRecoveryForm";
import { FormTemplateProps } from "../../../interfaces/interfaces";
import Card from '../../molecules/Card';


const iconsForm: {[key: string]: IconType} = {
  login: BsBuildingFillLock,
  createAccount: BsBuildingFillAdd,
  passwordRecovery: FaBuildingShield
}
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

const FormTemplate: React.FC<FormTemplateProps> = ({
  title,
  onSubmit,
  formType,
  error,
}: FormTemplateProps) => {
  const formComponent = generateForm(formType, onSubmit, error);

  return (
    <Card title={title} icon={iconsForm[formType]}>{formComponent}</Card>
  );
};

export default FormTemplate;
