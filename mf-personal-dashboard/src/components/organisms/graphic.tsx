import React from 'react'
import { Line, Radar } from "react-chartjs-2";
import { data, options, dataChart, optionsChart, dataRadar } from "../data";

import styles from "../../styles/styles.module.css";

export const Graphic = () => {
  
  return (
    <div className={styles.general_graphic} >
        <h1 className={styles.title_graphic}>Información sobre la cuenta</h1>
        <div className={styles.flex_row}>
          
          <div className={styles.half} >
            <Line className={styles.graphic} options={options} data={data}></Line>
          </div>
          <div className={styles.half}>
            <Line className={styles.graphic} options={optionsChart} data={dataChart}></Line>
          </div>
          
        </div>
    </div>
  )
}
