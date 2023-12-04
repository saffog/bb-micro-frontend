import {IconType} from 'react-icons';
import {Link} from 'react-router-dom';
import React from 'react';

interface CardProps {
  icon: IconType;
  title: string;
  number: string;
  description: string;
  total: string;
  url?: string;
}
const Card = ({icon: Icon, title, total, description, number, url}: CardProps) => (
  <div className="flex-1 flex flex-col mt-3 text-gray-700 bg-white rounded-lg shadow-lg">
    <div className="p-4">
      <div className="flex items-center pb-4">
        <div className="pr-2">
          <Icon className="text-gray-600" size='20'/>
        </div>
        <div className="px-1 ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
          {title}
        </div>
        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
          numero
        </span>
        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
          {number}
        </div>
      </div>
      <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
        {description}
      </h4>
      <div className="mt-1">
        {total}
        <span className="text-gray-600 text-sm">   /wk</span>
      </div>
      <div className="mt-2 flex justify-end">
        <Link to={url ? url : '/'}>
          <span className="text-md font-semibold text-button">Más detalles</span>
        </Link>
        {/*<span className="text-sm text-gray-600">(based on 234 ratings)</span>*/}
      </div>
    </div>
  </div>
);

export default Card;