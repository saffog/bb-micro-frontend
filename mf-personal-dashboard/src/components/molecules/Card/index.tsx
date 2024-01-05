import React from 'react';
import {IconType} from 'react-icons';
import {Link} from 'react-router-dom';

import styles from './index.module.css';
import useDevice from '../../../hooks/useDevice';

interface CardProps {
  icon: IconType;
  title: string;
  number: string;
  description: string;
  total: string;
  url?: string;
}
const Card = ({icon: Icon, title, total, description, number, url}: CardProps) => {
  const { isMobile } = useDevice();
  return (
    <div className={styles.card}>
      <div className="px-6 min-[768px]:p-4 text-center min-[768px]:text-left">
        {!isMobile &&
          <div className={styles.header_card}>
            <Icon className="text-gray-600" size='20'/>
            <div className={styles.title}>
              {title}
            </div>
            <span className={styles.label_number}>
              numero
            </span>
            <div className={styles.number}>
              {number}
            </div>
          </div>
        }
        { isMobile &&
          <div className="flex flex-col pb-2 items-center">
            <div className="flex flex-row">
              <div className="pr-2">
                <Icon className="text-gray-600" size='20'/>
              </div>
              <div className={styles.title}>
                {title}
              </div>
            </div>
            <div className="flex flex-row">
            <span className={styles.label_number}>
              numero
            </span>
              <div className={styles.number}>
                {number}
              </div>
            </div>
          </div>
        }
        <h3 className={styles.description}>
          {description}
        </h3>
        <div className={styles.total}>
          {total}
          <span className={styles.label_total}>   /total</span>
        </div>
        {!isMobile &&
          <div className="mt-2 flex justify-end">
            <Link to={url ? url : '/'}>
              <span className={styles.link_card}>Más detalles</span>
            </Link>
            {/*<span className="text-sm text-gray-600">(based on 234 ratings)</span>*/}
          </div>
        }
      </div>
    </div>
  )
};

export default Card;