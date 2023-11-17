import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import styles from './index.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}
const ButtonForm = ({ className, children, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.buttonForm} ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
