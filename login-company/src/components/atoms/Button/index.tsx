import React from "react";
import { ButtonProps } from "../../../interfaces/interfaces";
import styles from "./index.module.css";

const Button: React.FC<ButtonProps> = ({
  text,
  styledClass,
  onClick,
}: ButtonProps) => {
  return (
    <button className={`${styles.buttonForm} ${styledClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
