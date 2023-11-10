import React, {CSSProperties} from 'react';
import LabelForm from '../../atoms/Label';
import InputForm, {InputProps} from '../../atoms/Input';
import './index.css';

interface InputLabelProps extends InputProps {
  title: string;
  name: string;
  style?: CSSProperties;
}
const InputLabel = ({ title, name, type='text', value, onChange, onBlur, required, style }: InputLabelProps) => {
  return (
    <div className={`${style} formGroup`}>
      <LabelForm value={title} name={name} />
      <InputForm
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
    </div>
  );
};

export default InputLabel;
