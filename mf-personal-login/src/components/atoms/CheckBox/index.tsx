import React, {InputHTMLAttributes} from 'react';
import './index.css'
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  checked: boolean;
  title?: string;
}
const CheckboxForm = ({name, checked, onChange, title, required = true}: CheckboxProps) => {
  return (
    <div className="checkboxForm">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      { !!title ? <label htmlFor={name}>{title}</label> : null }
    </div>
  );
};

export default CheckboxForm;
