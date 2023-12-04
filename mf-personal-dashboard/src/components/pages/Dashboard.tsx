import React from 'react'

import { Graphic } from "../organisms/graphic";
import Card from "../organisms/card";
import { Promos } from '../organisms/promos';
import styles from "../../styles/styles.module.css";

export const Dashboard = () => {
  
  return (
    <div className={styles.dashboard}>
        <Promos/>
        <Card/>
        <Graphic/> 
    </div>
  )
}