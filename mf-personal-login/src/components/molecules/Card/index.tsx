import React, {ReactNode} from 'react';

import styles from './index.module.css';

interface CardProps {
  children: ReactNode;
  title?: string;
}
const Card = ({children, title}: CardProps) => {
  return (
    <div className={styles.card}>
      {!!title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );
};

export default Card;
