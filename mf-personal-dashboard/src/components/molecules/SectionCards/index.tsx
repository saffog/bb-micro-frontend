import React, {ReactNode} from 'react';

import styles from "./index.module.css";

interface SectionCardsProps {
  titleSection: string;
  action?: () => void;
  children: ReactNode;
}

const SectionCards = ({titleSection, children, action}: SectionCardsProps) => (
  <div className={styles.section_card}>
    <div className="p-6">
      <div className={styles.header_section_card}>
        <h5 className={styles.title_section_card}>
          {titleSection}
        </h5>
        {action && <button
          className={styles.button_section_card}
          type="button" onChange={action}>
          ver más
        </button>}
      </div>
      <div className="flex flex-row gap-8">
        {children}
      </div>
    </div>
  </div>
);

export default SectionCards;