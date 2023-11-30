import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormTemplate from "../../components/templates/FormTemplate";
import Modal from "../../components/templates/ModalTemplate";
import { createAccount } from "../../apis/apis";

import styles from "../index.module.css";

const CreateAccountPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    } else if (password !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    createAccount(empresa, representante, email, password, password2, ok)
      .then((data) => {
        console.log(data);
        setModalOpen(true);
      })
      .catch((error) => {
        setError("Ha ocurrido un error");
        console.error("Error:", error);
      });
    setError("");
  };

  const handleOnClose = () => {
    setModalOpen(false);
    navigate("/");
  };

  return (
    <div className={styles.container}>
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
