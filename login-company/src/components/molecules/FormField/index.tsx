import React, {FocusEvent, useState} from "react";

import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import { FormFieldProps } from "../../../interfaces/interfaces";
import {valuesHandlerError, valuesWithPatternHandlerError} from '../../../constants/inputForm.constant';

import styles from "./index.module.css"

const FormField: React.FC<FormFieldProps> = ({
  labelContent,
  inputType,
  inputName,
  inputValue,
  onChange,
  onBlur,
  withPattern,
  infoMessage,
  required,
}: FormFieldProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const {target} = event;

    if (target.value && !target.validity.valid && target.required) {

      const valuesError = withPattern ? valuesWithPatternHandlerError : valuesHandlerError;
      setErrorMessage(valuesError[target.type].errorMessage);
    }
    else setErrorMessage('');

    onBlur?.(event)
  }

  return (
    <div className={styles.container}>
      <Label content={labelContent} />
      <Input
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={onChange}
        onBlur={handleBlur}
        required={required}
        pattern={withPattern ? valuesWithPatternHandlerError[inputType].pattern : undefined}
      />
      {(!errorMessage && infoMessage) &&<span className={styles.infoMessage}>{infoMessage}</span>}
      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default FormField;
