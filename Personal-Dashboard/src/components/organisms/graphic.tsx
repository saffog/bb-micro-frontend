import React from 'react'
import { Line, Radar } from "react-chartjs-2";
import { data, options, dataChart, optionsChart, dataRadar } from "../data";

export const Graphic = () => {
  
  return (
    <div className="text-center bg-blue-500 rounded-lg shadow-lg ml-2 p-4 w-9/12 mb-2" >
        <h1 className="border-2 border-black mb-2">Información sobre la cuenta</h1>

        <Line className="bg-white mt-2" options={options} data={data}></Line>
        <Line className="bg-white mt-2" options={optionsChart} data={dataChart}></Line>
        <Radar className="bg-white mt-2" data={dataRadar}/>

    </div>
  )
}
