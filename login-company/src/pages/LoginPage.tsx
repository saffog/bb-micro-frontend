import React from "react";
import FormTemplate from "../components/templates/FormTemplate";

type LoginProps = {
    title?: string
};

const LoginPage: React.FC<LoginProps> = ({title}) => {


  const handleSubmit = (email: string, password: string) => {
    fetch('https://mf-login-company.free.beeceptor.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token'
      },
      body: JSON.stringify({
        userEmail: email,
        password: password,
      }) 
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <h1>{title}</h1>
      <FormTemplate formType="login" title="Iniciar Sesión" onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;