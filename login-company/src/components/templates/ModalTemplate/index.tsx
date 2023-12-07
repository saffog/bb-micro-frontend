import React, {ReactNode} from 'react';
import styles from './index.module.css';
import Button from '../../atoms/Button';

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
        <Button text={buttonTitle} onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
