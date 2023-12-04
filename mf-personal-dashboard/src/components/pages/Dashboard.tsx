import React from 'react'

import { Graphic } from "../organisms/graphic";
import Cards from "../organisms/cards";
import { Investments } from '../organisms/investments';
import styles from "../../styles/styles.module.css";

export const Dashboard = () => {
  
  return (
    <div className={styles.dashboard}>
      {/*<Investments/>*/}
      <div className="flex flex-row gap-8">
        <div className="flex-1">
          <Cards/>
        </div>
        <div className="flex-1">
          <Graphic/>
        </div>
      </div>
    </div>
  )
}