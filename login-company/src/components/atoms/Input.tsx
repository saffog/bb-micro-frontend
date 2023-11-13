import React from "react";

type InputProps = {
    type: string;
    value?: string;
    name?: string;
    checked?: boolean;
    styledClass?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, value, name, checked, styledClass, onChange }) => {
  return <input type={type} name={name} value={value} checked={checked} className={styledClass} onChange={onChange} />;
};

export default Input;