import React, {ReactNode} from 'react';

import styles from './index.module.css';

interface AccountsSection {
  title: string;
  action?: () => void;
  children: ReactNode;
}

const AccountsSection = ({title, children, action}: AccountsSection) => (
  <div className={styles.section}>
    <div className={styles.headerSection}>
      <h5 className={styles.title}>
        {title}
      </h5>
      {action && <button
        className={styles.button}
        type="button" onChange={action}>
        ver más
      </button>}
    </div>
    <div className={styles.children}>
      {children}
    </div>
  </div>
);
export default AccountsSection;
