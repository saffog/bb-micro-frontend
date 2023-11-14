import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

Chart.register(
  LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend
)

export const Graphic = () => {
  
  const labels = ["Nov 8", "Nov 9", "Nov 10", "Nov 11", "Nov 12", "Nov 13", "Nov 14"]

  const data = {
    labels ,
    datasets: [
      {
        label: "Ingresos",
        data: [8, 7, 4, 6, 8, 5, 10],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.5
      },
      {
        label: "Egresos",
        data: [4, 2, 5, 8, 2, 7, 1],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
    },
  }

  return (
    <div className="text-center bg-blue-500 rounded-lg shadow-lg ml-2 md:container" >
        <h1 className="border-2 border-black">Info</h1>

        <h4 className="flex-grow" > Ingresos vs Egresos </h4>
        <Line className="bg-white" options={options} data={data}></Line>
    </div>
  )
}
