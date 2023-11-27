import React, {InputHTMLAttributes} from 'react';

import styles from './index.module.css';
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  checked: boolean;
  title?: string;
  className?: string;
}
const CheckboxForm = ({name, title, required = true, className, ...props}: CheckboxProps) => {
  return (
    <div className={`${styles.checkboxForm} ${className}`}>
      <input
        type="checkbox"
        id={name}
        required={required}
        {...props}
      />
      { title ? <p>{title}</p> : null }
    </div>
  );
};

export default CheckboxForm;
