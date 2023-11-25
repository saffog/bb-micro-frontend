import React, {ReactNode} from 'react';
import { IconType } from 'react-icons';

import styles from './index.module.css';

interface CardProps {
  icon?: IconType;
  children: ReactNode;
  title?: string;
  className?: string;
}
const Card = ({children, title, className, icon: Icon}: CardProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.contentTitle}>
        {title && <h4>{title}</h4>}
        {Icon && <Icon className={styles.icon}/>}
      </div>
      {children}
    </div>
  );
};

export default Card;
