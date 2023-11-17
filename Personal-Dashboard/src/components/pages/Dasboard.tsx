import React from 'react'

import { Graphic } from "../organisms/graphic";
import Card from "../organisms/card";

export const Dasboard = () => {
  return (
    <div className="mt-8 text-2xl flex mx-4">
        <Graphic/> 
        <Card/>
    </div>
  )
}
