import React, { useState } from 'react';
import Button from '../../atoms/Button';
import styles from './index.module.css';

export interface Props {
  title: string;
  content: string;
  onClose: () => void;
  buttonTitle?:string;
}

const Modal: React.FC<Props> = ({
  title,
  content,
  onClose,
  buttonTitle = 'Aceptar',
}: Props) => {
  const createMarkup = () => {
    return { __html: content };
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={createMarkup()}></p>
        <Button onClick={onClose} variant={'primary'} >{buttonTitle}</Button>
      </div>
    </div>
  );
};

export default Modal;
