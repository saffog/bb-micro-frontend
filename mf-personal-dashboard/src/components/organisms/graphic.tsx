import React from 'react'
import { Line } from "react-chartjs-2";
import { data, options, dataChart, optionsChart } from "../data";

import styles from "../../styles/styles.module.css";
import SectionCards from '../molecules/SectionCards';

export const Graphic = () => {
  
  return (
    <div className="flex flex-col gap-2">
      <SectionCards titleSection="Inversiones">
        <Line className={styles.graphic} options={options} data={data}></Line>
      </SectionCards>
      <SectionCards titleSection="Ingresos & Egresos">
        <Line className={styles.graphic} options={optionsChart} data={dataChart}></Line>
      </SectionCards>
    </div>

  )
}
