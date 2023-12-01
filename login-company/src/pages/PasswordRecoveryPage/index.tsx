import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormTemplate from "../../components/templates/FormTemplate";
import Modal from "../../components/templates/ModalTemplate";
import { recoverPassword } from "../../apis/apis";

import styles from "../index.module.css";

const PasswordRecoveryPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (email: string) => {
    if (!email) {
      setError("Por favor, complete todos los campos");
      return;
    } else {
      recoverPassword(email)
        .then((data) => {
          console.log(data);
          setModalOpen(true);
        })
        .catch((error) => {
          setError("Ha ocurrido un error");
          console.error("Error:", error);
        });
      setError("");
    }
  };

  const handleOnClose = () => {
    setModalOpen(false);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <FormTemplate
        formType="passwordRecovery"
        title="Olvide mi Contraseña"
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
