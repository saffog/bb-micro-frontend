import React, { useState } from "react";
import FormTemplate from "../components/templates/FormTemplate";
import Modal from "../components/templates/ModalTemplate";
import { createAccount } from "../apis/apis";

type CreateAccountProps = {
  title?: string;
};

const CreateAccountPage: React.FC<CreateAccountProps> = ({ title }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (
    empresa: string,
    representante: string,
    email: string,
    password: string,
    password2: string,
    ok: boolean
  ) => {
    if (
      !empresa ||
      !representante ||
      !email ||
      !password ||
      !password2 ||
      !ok
    ) {
      setError("Por favor, complete todos los campos");
      return;
    }

    createAccount(empresa, representante, email, password, password2, ok)
      .then((data) => {
        setModalOpen(true);
        console.log(data);
      })
      .catch((error) => {
        setError("Ha ocurrido un error");
        console.error("Error:", error);
      });
    setError("");
  };

  const handleOnClose = () => {
    console.log("onClose");
    setModalOpen(false);
    window.location.href = "/";
  };

  return (
    <div>
      <h1>{title}</h1>
      <FormTemplate
        formType="createAccount"
        title="Crear Cuenta Empresarial"
        onSubmit={handleSubmit}
        error={error}
      />
      {modalOpen && (
        <Modal
          title="Cuenta Creada"
          content="Se ha creado la cuenta de la empresa."
          onClose={handleOnClose}
        />
      )}
    </div>
  );
};

export default CreateAccountPage;
