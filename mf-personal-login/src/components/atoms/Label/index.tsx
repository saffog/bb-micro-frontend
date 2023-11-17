import React, {ReactNode} from 'react';

import styles from './index.module.css';

interface LabelProps {
  name: string;
  value: ReactNode;
  isRequired?: boolean;
  className?: string;
}
const LabelForm = ({ name, value, isRequired = true, className }: LabelProps) => {
  return (
    <label
      htmlFor={name}
      className={`${styles.labelForm} ${className}`}
    >
      {`${value} ${ isRequired ? '*' : ''}`}
    </label>
  );
};

export default LabelForm;
