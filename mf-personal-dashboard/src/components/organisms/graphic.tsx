import React from 'react'
import { Line, Radar } from "react-chartjs-2";
import { data, options, dataChart, optionsChart, dataRadar } from "../data";

export const Graphic = () => {
  
  return (
    <div className="text-center bg-blue-500 rounded-lg shadow-lg ml-2 p-4 mb-2" >
        <h1 className="border-2 border-black rounded-lg mb-2">Información sobre la cuenta</h1>
        <div className='flex-row'>
          <Line className="mx-4 bg-white mt-2" options={options} data={data}></Line>
          <Line className="mx-4 bg-white mt-2" options={optionsChart} data={dataChart}></Line>
          
        </div>
    </div>
  )
}
