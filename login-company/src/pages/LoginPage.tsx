import React, { useState } from "react";
import FormTemplate from "../components/templates/FormTemplate";
import { login } from "../apis/apis";
import { PageProps } from "../interfaces/interfaces";

const LoginPage: React.FC<PageProps> = ({ title }: PageProps) => {
  const [error, setError] = useState("");
  const handleSubmit = (email: string, password: string) => {
    if (!email || !password) {
      setError("Por favor, complete todos los campos");
      return;
    }
    login(email, password)
      .then((data) => {
        const loginSucces = new CustomEvent("[loginCompany] loginSucces", {
          detail: data,
        });
        window.dispatchEvent(loginSucces);
        console.log(data);
      })
      .catch((error) => setError(error.message));
    setError("");
  };

  return (
    <div className="container">
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
