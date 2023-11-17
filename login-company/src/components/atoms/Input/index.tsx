import React from "react";
import { InputProps } from "../../../interfaces/interfaces";
import styles from "./index.module.css";

const Input: React.FC<InputProps> = ({
  type,
  value,
  name,
  checked,
  styledClass,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      checked={checked}
      className={`${styles.inputForm} ${styledClass}`}
      onChange={onChange}
    />
  );
};

export default Input;
