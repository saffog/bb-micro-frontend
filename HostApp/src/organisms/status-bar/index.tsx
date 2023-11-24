import React from "react";
import User from "../../interfaces/user.interface";
import styles from "./index.module.css";
import { settings } from "../../constants/settings.constant";
import { FcBusinessman } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import DropdownMenu from "../../atoms/dropdown-menu";

interface Props {
  user: User;
}

export const StatusBar = ({ user }: Props) => {
  return (
    <div
      className={styles.container}
      style={{ background: `${settings[user.accountType].color}` }}
    >
      <div className={styles.section}>
        <span><i>{settings[user.accountType].label}</i></span>
      </div>
      <div className={styles.section}>
        <DropdownMenu title={user.userName} items={[
          {
            slug: "profile",
            anchor: "Mi perfil",
          },
          {
            slug: "landing",
            anchor: "Logout",
          },
        ]} />
      </div>
    </div>
  );
};
