import React from 'react';
import "./index.css";

interface Props{
    src:string;
    alt:string;
}
export const Image = ({src,alt}:Props) => {
  return (
    <img src={src} alt={alt}/>
  )
}
