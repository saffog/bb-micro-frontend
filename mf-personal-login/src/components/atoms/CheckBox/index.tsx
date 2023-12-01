import React, {InputHTMLAttributes} from 'react';

import styles from './index.module.css';
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  checked: boolean;
  title?: string;
  className?: string;
  callbackMap?:Map<string, () => void>;
}
const CheckboxForm = ({name, title, required = true, className, ...props}: CheckboxProps) => {

  // Liskov Principle bull shit. :D
  switch(name){
  case 'agreeTerms':
    return (
      <div className={`${styles.checkboxForm} ${className}`}>
        <input
          type="checkbox"
          id={name}
          required={required}
          {...props}
        />
        <p>Estoy de acuerdo con los <a href="#" onClick={props.callbackMap?.get(name)}>términos y condiciones</a></p>
      </div>
    );
  default:
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
  }
  
};

export default CheckboxForm;
