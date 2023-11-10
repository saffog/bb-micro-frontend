import React, {ReactNode} from 'react';

import './index.css';

interface CardProps {
  children: ReactNode;
  title?: string;
}
const Card = ({children, title}: CardProps) => {
  return (
    <div className="card">
      {!!title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );
};

export default Card;
