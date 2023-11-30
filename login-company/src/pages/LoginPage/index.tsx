import React, { useState } from "react";

import FormTemplate from "../../components/templates/FormTemplate";
import { login } from "../../apis/apis";

import styles from "../index.module.css";

const LoginPage: React.FC = () => {
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
