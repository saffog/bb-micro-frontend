import React, {ReactNode} from 'react';

import styles from './index.module.css';

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}
const Card = ({children, title, className}: CardProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
