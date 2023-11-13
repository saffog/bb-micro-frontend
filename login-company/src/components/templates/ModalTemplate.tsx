import React, { useState } from 'react';
import Button from '../atoms/Button';
import '../../styles/Modal.css';

interface ModalProps {
    title: string;
    content: string;
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({title, content, onClose}) => {

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