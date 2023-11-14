import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

Chart.register(
  LineElement, CategoryScale, LinearScale, PointElement
)

export const Graphic = () => {
  
  const labels = ["Nov 8", "Nov 9", "Nov 10", "Nov 11", "Nov 12", "Nov 13", "Nov 14"]

  const data = {
    labels ,
    datasets: [
      {
        label: "Ingresos",
        data: [8, 7, 4, 6, 8, 5, 10],
        tension: 0.5
      },
      {
        label: "Egresos",
        data: [8, 7, 4, 6, 8, 5, 10],
        tension: 0.5
      },
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  }

  return (
    <div className="text-center bg-blue-500 rounded-lg shadow-lg p-5" >
        <h1 className="border-2 border-black">Info</h1>

        <h4 className="flex-grow" > Ingresos vs Egresos </h4>
        <Line className="bg-white" options={options} data={data}></Line>
    </div>
  )
}
