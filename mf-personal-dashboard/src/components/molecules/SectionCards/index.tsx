import React, {ReactNode} from 'react';

import styles from "./index.module.css";

interface SectionCardsProps {
  titleSection: string;
  action?: () => void;
  children: ReactNode;
  enabledButton?: boolean;
}

const SectionCards = ({titleSection, children, action, enabledButton}: SectionCardsProps) => (
  <div className={styles.section_card}>
    <div className="p-4 min-[768px]:p-6">
      <div className={styles.header_section_card}>
        <h5 className={styles.title_section_card}>
          {titleSection}
        </h5>
        {!enabledButton && action && <button
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