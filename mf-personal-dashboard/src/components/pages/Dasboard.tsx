import React from 'react'

import { Graphic } from "../organisms/graphic";
import Card from "../organisms/card";

export const Dasboard = () => {
  return (
    <div className="mt-8 text-2xl mx-4">
        <Card/>
        <Graphic/> 
    </div>
  )
}