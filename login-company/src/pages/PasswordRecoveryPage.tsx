import React, { useState } from "react";
import FormTemplate from "../components/templates/FormTemplate";
import Modal from "../components/templates/ModalTemplate";
import { recoverPassword } from "../apis/apis";
import { PageProps } from "../interfaces/interfaces";

const PasswordRecoveryPage: React.FC<PageProps> = ({ title }: PageProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (email: string) => {
    if (!email) {
      setError("Por favor, complete todos los campos");
      return;
    } else {
      recoverPassword(email)
        .then((data) => {
          setModalOpen(true);
          console.log(data);
        })
        .catch((error) => {
          setError("Ha ocurrido un error");
          console.error("Error:", error);
        });
      setError("");
    }
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
        formType="passwordRecovery"
        title="Olvidó Contraseña"
        onSubmit={handleSubmit}
        error={error}
      />
      {modalOpen && (
        <Modal
          title="Recuperar Contraseña"
          content="Se ha enviado un correo electronico para recuperar la contraseña."
          onClose={handleOnClose}
        />
      )}
    </div>
  );
};

export default PasswordRecoveryPage;
