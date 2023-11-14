import React from "react";
import { InputProps } from "../../interfaces/interfaces";

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
      className={styledClass}
      onChange={onChange}
    />
  );
};

export default Input;
