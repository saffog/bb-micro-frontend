import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

type FormFieldProps = {
    labelContent: string,
    inputType: string,
    inputName: string,
    inputValue?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormField: React.FC<FormFieldProps> = ({labelContent, inputType, inputName, inputValue, onChange}) => {
  return (
      <div>
        <Label content={labelContent}/>
        <Input type={inputType} name={inputName} value={inputValue} onChange={onChange}/>
      </div>
  )
}

export default FormField;
