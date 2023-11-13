import React from "react";

type ButtonProps = {
  text: string;
  styledClass?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, styledClass, onClick }) => {
  return <button className={styledClass} onClick={onClick}>{text}</button>;
};

export default Button;