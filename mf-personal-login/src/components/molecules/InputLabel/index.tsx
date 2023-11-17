import React from 'react';
import LabelForm from '../../atoms/Label';
import InputForm, {InputProps} from '../../atoms/Input';
import styles from './index.module.css';

interface InputLabelProps extends InputProps {
  title: string;
  name: string;
  className?: string;
  direction?: 'row' | 'column';
}
const InputLabel = ({ direction = 'column', title, name, type='text', value, onChange, onBlur, required, className }: InputLabelProps) => {
  return (
    <div className={`${styles.formGroup} ${className} ${direction === 'row' ? styles.row : styles.column }`}>
      <LabelForm value={title} name={name} />
      <InputForm
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={styles.inputForm}
      />
    </div>
  );
};

export default InputLabel;
