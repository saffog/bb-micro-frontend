import React from 'react'
import { Line, Radar } from "react-chartjs-2";
import { data, options, dataChart, optionsChart, dataRadar } from "../data";

export const Graphic = () => {
  
  return (
    <div className="text-center mx-2 p-4 mb-2" >
        <h1 className="border-2 border-black rounded-lg mb-2">Información sobre la cuenta</h1>
        <div className='flex flex-row'>
          
          <div className='basis-1/2' >
            <Line className="mx-4 bg-white" options={options} data={data}></Line>
          </div>
          <div className='basis-1/2'>
            <Line className="mx-4 bg-white" options={optionsChart} data={dataChart}></Line>
          </div>
          
        </div>
    </div>
  )
}
