import React, {ReactNode} from 'react';
import styles from './index.module.css';

interface ContainerRowProps {
  children: ReactNode;
}
const ContainerRow = ({ children }: ContainerRowProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default ContainerRow;
