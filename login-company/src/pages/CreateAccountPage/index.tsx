import React, { useState } from "react";
import FormTemplate from "../../components/templates/FormTemplate";
import Modal from "../../components/templates/ModalTemplate";
import { createAccount } from "../../apis/apis";
import { PageProps } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import styles from "../index.module.css";

const CreateAccountPage: React.FC<PageProps> = ({ title }: PageProps) => {
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
    }

    createAccount(empresa, representante, email, password, password2, ok)
      .then((data) => {
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
