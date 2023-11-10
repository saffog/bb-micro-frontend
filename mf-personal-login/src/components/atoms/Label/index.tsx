import React, {CSSProperties, ReactNode} from 'react';

interface LabelProps {
  name: string;
  value: ReactNode;
  isRequired?: boolean;
  style?: CSSProperties;
}
const LabelForm = ({ name, value, isRequired = true, style }: LabelProps) => {
  return (
    <label
      htmlFor={name}
      className={`${style} labelForm`}
    >
      {`${value} ${ isRequired ? '*' : ''}`}
    </label>
  );
};

export default LabelForm;
