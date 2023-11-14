import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { FormFieldProps } from "../../interfaces/interfaces";

const FormField: React.FC<FormFieldProps> = ({
  labelContent,
  inputType,
  inputName,
  inputValue,
  onChange,
}: FormFieldProps) => {
  return (
    <div>
      <Label content={labelContent} />
      <Input
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
