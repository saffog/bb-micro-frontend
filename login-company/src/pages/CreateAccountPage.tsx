import React, { useState } from "react";
import FormTemplate from "../components/templates/FormTemplate";
import Modal from "../components/templates/ModalTemplate";

type CreateAccountProps = {
    title?: string
};

const CreateAccountPage: React.FC<CreateAccountProps> = ({title}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (empresa: string , representante: string, email: string, password: string, password2: string, ok: boolean) => {
    fetch('https://mf-login-company.free.beeceptor.com/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token'
      },
      body: JSON.stringify({
        userName: empresa,
        userEmail: email,
      })
    })
    .then(response => response.json())
    .then(data => { 
      setModalOpen(true);
      console.log(data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  const handleOnClose = () => {
    console.log("onClose");
    setModalOpen(false);
    window.location.href = "/";
  }

  return (
    <div>
      <h1>{title}</h1>
      <FormTemplate formType="createAccount" title="Crear Cuenta Empresarial" onSubmit={handleSubmit} />
      {modalOpen && <Modal title="Cuenta Creada" content="Se ha creado la cuenta de la empresa." onClose={handleOnClose} />}
    </div>
  );
};

export default CreateAccountPage;