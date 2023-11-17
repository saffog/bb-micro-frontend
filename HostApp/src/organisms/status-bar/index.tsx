import React from "react";
import User from "../../interfaces/user.interface";
import styles from "./index.module.css";
import { settings } from '../../constants/settings.constant';
import { FcBusinessman } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";


interface Props {
  user: User;
}

export const StatusBar = ({ user }: Props) => {
  return (
    <div className={styles.container} style={{background:`${settings[user.accountType].color}`}}>
      <div className={styles.section}>
        {user.accountType==='ENTERPRISE'?<FcDepartment/> : <FcBusinessman/>}
        {settings[user.accountType].label}
      </div>
      <div className={styles.section}>
        {user.userName}
        <FcPortraitMode />
        </div>
      
    </div>
  );
};
