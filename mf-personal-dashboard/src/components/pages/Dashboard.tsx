import React from 'react'

import { Graphic } from "../organisms/graphic";
import Card from "../organisms/card";
import { Investments } from '../organisms/investments';
import styles from "../../styles/styles.module.css";

export const Dashboard = () => {
  
  return (
    <div className={styles.dashboard}>
        <Investments/>
        <Card/>
        <Graphic/> 
    </div>
  )
}