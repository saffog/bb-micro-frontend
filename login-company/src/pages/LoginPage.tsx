import React, { useState } from "react";
import FormTemplate from "../components/templates/FormTemplate";
import { login } from "../apis/apis";

type LoginProps = {
  title?: string;
};

const LoginPage: React.FC<LoginProps> = ({ title }) => {
  const [error, setError] = useState("");
  const handleSubmit = (email: string, password: string) => {
    if (!email || !password) {
      setError("Por favor, complete todos los campos");
      return;
    }
    login(email, password)
      .then((data) => console.log(data))
      .catch((error) => setError(error.message));
    setError("");
  };

  return (
    <div>
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
