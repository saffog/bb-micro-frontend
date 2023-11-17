import React, { useState } from "react";
import Button from "../../atoms/Button";
import { ModalProps } from "../../../interfaces/interfaces";
import styles from "./index.module.css";

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  onClose,
}: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button text="Aceptar" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
