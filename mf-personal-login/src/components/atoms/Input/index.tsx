import React, {HTMLProps} from 'react';
import styles from './index.module.css';

export interface InputProps extends HTMLProps<HTMLInputElement> {
  required?: boolean;
  className?: string;
}

const InputForm = ({ value, onChange, required = true, type, className }: InputProps) => {
  return (
    <input
      className={`${styles.input} ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default InputForm;
