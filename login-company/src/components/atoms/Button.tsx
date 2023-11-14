import React from "react";
import { ButtonProps } from "../../interfaces/interfaces";

const Button: React.FC<ButtonProps> = ({
  text,
  styledClass,
  onClick,
}: ButtonProps) => {
  return (
    <button className={styledClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
