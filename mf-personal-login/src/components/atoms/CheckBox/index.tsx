import React, {InputHTMLAttributes} from 'react';
import styles from './index.module.css';
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  checked: boolean;
  title?: string;
  className?: string;
}
const CheckboxForm = ({name, checked, onChange, title, required = true, className}: CheckboxProps) => {
  return (
    <div className={`${styles.checkboxForm} ${className}`}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      { title ? <p>{title}</p> : null }
    </div>
  );
};

export default CheckboxForm;
