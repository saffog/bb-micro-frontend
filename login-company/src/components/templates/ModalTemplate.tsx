import React, { useState } from "react";
import Button from "../atoms/Button";
import "../../styles/Modal.css";
import { ModalProps } from "../../interfaces/interfaces";

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  onClose,
}: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <Button text="Aceptar" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
