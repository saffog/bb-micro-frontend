export interface PageProps {
  title?: string;
}

export interface FormTemplateProps {
  title?: string;
  onSubmit: (...args: any[]) => void;
  formType: "login" | "createAccount" | "passwordRecovery";
  error: string;
}

export interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  error: string;
}

export interface PasswordRecoveryFormProps {
  onSubmit: (email: string) => void;
  error: string;
}

export interface CreateAccountFormProps {
  onSubmit: (
    empresa: string,
    representante: string,
    email: string,
    password: string,
    password2: string,
    ok: boolean
  ) => void;
  error: string;
}

export interface FormFieldProps {
  labelContent: string;
  inputType: string;
  inputName: string;
  inputValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  text: string;
  styledClass?: string;
  onClick?: () => void;
}

export interface InputProps {
  type: string;
  value?: string;
  name?: string;
  checked?: boolean;
  styledClass?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps {
  content: string;
  styledClass?: string;
}
