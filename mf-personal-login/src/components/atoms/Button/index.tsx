import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import styles from './index.module.css';

type TypeButtonVariant = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant: TypeButtonVariant;
}
const ButtonForm = ({ className, children, type, variant='primary', ...props }: ButtonProps) => {
  const buttonVariantClass = `buttonForm-${variant}`;

  return (
    <button
      type={type}
      className={`${styles.buttonForm} ${styles[buttonVariantClass]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
