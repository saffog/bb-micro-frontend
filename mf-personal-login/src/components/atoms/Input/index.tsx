import React, {CSSProperties, HTMLProps} from 'react';
import './index.css';

export interface InputProps extends HTMLProps<HTMLInputElement> {
  required?: boolean;
  style?: CSSProperties;
}

const InputForm = ({ value, onChange, required = true, type, style }: InputProps) => {
  return (
    <input
      className={`${style} inputForm`}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default InputForm;
