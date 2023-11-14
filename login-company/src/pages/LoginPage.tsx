import React, { useState } from "react";
import FormTemplate from "../components/templates/FormTemplate";

type LoginProps = {
  title?: string;
};

const LoginPage: React.FC<LoginProps> = ({ title }) => {
  const [error, setError] = useState("");
  const handleSubmit = (email: string, password: string) => {
    if (!email || !password) {
      setError("Por favor, complete todos los campos");
      return;
    } else {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-token",
        },
        body: JSON.stringify({
          userEmail: email,
          password: password,
        }),
      })
        .then((response) => {
          if (response.status === 401) {
            setError("Usuario o contraseña incorrectos");
          }
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => {
          console.log("Ha ocurrido un error", error);
        });
      setError("");
    }
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
