import React, {ReactNode} from 'react';
import Button from '../../atoms/Button';
import styles from './index.module.css';

export interface Props {
  title: string;
  content?: string;
  onClose: () => void;
  buttonTitle?:string;
  children?: ReactNode;
}

const Modal = ({
  title,
  content,
  onClose,
  buttonTitle = 'Aceptar',
  children,
}: Props) => {
  const createMarkup = () => {
    return { __html: content ?? <></> };
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>{title}</h2>
        {content && <p dangerouslySetInnerHTML={createMarkup()}></p>}
        {children}
        <Button onClick={onClose} variant={'success'} >{buttonTitle}</Button>
      </div>
    </div>
  );
};

export default Modal;
