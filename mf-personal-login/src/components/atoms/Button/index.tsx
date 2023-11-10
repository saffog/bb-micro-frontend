import React, {ButtonHTMLAttributes, CSSProperties, ReactNode} from 'react';
import './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties;
  children: ReactNode;
}
const ButtonForm = ({ style, children, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${style} buttonForm`}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
