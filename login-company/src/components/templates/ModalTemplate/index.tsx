import React, { useState } from "react";
import Button from "../../atoms/Button";
import { ModalProps } from "../../../interfaces/interfaces";
import styles from "./index.module.css";

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  onClose,
  buttonTitle="Aceptar"

}: ModalProps) => {
  const createMarkup = () => {
    return { __html: content };
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={createMarkup()}></p>
        <Button text={buttonTitle} onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
