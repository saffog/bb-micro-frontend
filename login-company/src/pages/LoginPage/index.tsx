import React, { useState } from "react";
import FormTemplate from "../../components/templates/FormTemplate";
import { login } from "../../apis/apis";
import { PageProps } from "../../interfaces/interfaces";
import styles from "../index.module.css";

const LoginPage: React.FC<PageProps> = ({ title }: PageProps) => {
  const [error, setError] = useState("");
  const handleSubmit = (email: string, password: string) => {
    if (!email || !password) {
      setError("Por favor, complete todos los campos");
      return;
    }
    login(email, password)
      .then((data) => {
        const loginSucces = new CustomEvent("[LoginApp] login", {
          detail: data,
        });
        window.dispatchEvent(loginSucces);
      })
      .catch((error) => setError(error.message));
    setError("");
  };

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <FormTemplate
        formType="login"
        title="Iniciar Sesión"
        onSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
};

export default LoginPage;
