import React, {FocusEvent, useState} from 'react';
import LabelForm from '../../atoms/Label';
import InputForm, {InputProps} from '../../atoms/Input';
import {valuesHandlerError, valuesWithPatternHandlerError} from '../../../constants/inputForm.constant';

import styles from './index.module.css';

interface InputLabelProps extends InputProps {
  title: string;
  name: string;
  className?: string;
  direction?: 'row' | 'column';
  infoMessage?: string;
  withPattern?: boolean;
}
const InputLabel = ({
  direction = 'column',
  title,
  name,
  type='text',
  onChange,
  onBlur,
  className,
  infoMessage,
  withPattern = false,
  ...props
}: InputLabelProps) => {
  const [error, setError] = useState('');

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const {target} = event;

    if (target.value && !target.validity.valid && target.required) {
      const valuesError = withPattern ? valuesWithPatternHandlerError : valuesHandlerError;
      setError(valuesError[target.type].errorMessage);
    }
    else setError('');

    onBlur?.(event);
  };

  return (
    <div className={`${styles.formGroup} ${className} ${direction === 'row' ? styles.row : styles.column }`}>
      <LabelForm value={title} name={name} />
      <InputForm
        type={type}
        onChange={onChange}
        onBlur={handleBlur}
        className={styles.inputForm}
        pattern={withPattern ? valuesWithPatternHandlerError[type].pattern : undefined}
        {...props}
      />
      {(!error && infoMessage) &&<span className={styles.infoMessage}>{infoMessage}</span>}
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default InputLabel;
