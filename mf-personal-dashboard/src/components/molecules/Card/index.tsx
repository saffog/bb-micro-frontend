import React from 'react';
import {IconType} from 'react-icons';
import {Link} from 'react-router-dom';

import styles from './index.module.css';

interface CardProps {
  icon: IconType;
  title: string;
  number: string;
  description: string;
  total: string;
  url?: string;
}
const Card = ({icon: Icon, title, total, description, number, url}: CardProps) => (
  <div className={styles.card}>
    <div className="p-4">
      <div className={styles.header_card}>
        <div className="pr-2">
          <Icon className="text-gray-600" size='20'/>
        </div>
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
      <h4 className={styles.description}>
        {description}
      </h4>
      <div className="mt-1">
        {total}
        <span className={styles.label_total}>   /total</span>
      </div>
      <div className="mt-2 flex justify-end">
        <Link to={url ? url : '/'}>
          <span className={styles.link_card}>Más detalles</span>
        </Link>
        {/*<span className="text-sm text-gray-600">(based on 234 ratings)</span>*/}
      </div>
    </div>
  </div>
);

export default Card;