import React from "react";
import { ButtonProps } from "../../../interfaces/interfaces";
import styles from "./index.module.css";

const Button: React.FC<ButtonProps> = ({
  text,
  styledClass,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.buttonForm}
       ${styledClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
