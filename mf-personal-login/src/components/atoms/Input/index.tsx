import React, {HTMLProps} from 'react';
import styles from './index.module.css';

export interface InputProps extends HTMLProps<HTMLInputElement> {
  required?: boolean;
  className?: string;
}

const InputForm = ({required = true, className, ...props }: InputProps) => {

  return (
    <input
      className={`${styles.input} ${className}`}
      required={required}
      {...props}
    />
  );
};

export default InputForm;
