import React, { useState } from "react";
import { AccountType } from "../../interfaces/user.interface";
import { settings } from "../../constants/settings.constant";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaHome,
  FaChartLine,
  FaDollarSign,
  FaTruck,
  FaPlus,
  FaBell,
  FaUserPlus,
  FaLandmark,
  FaUser,
} from "react-icons/fa";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import CompanyDashboardBase from "../../pages/dashboard/company";
import PersonalDashboardBase from "../../pages/dashboard/personal";
import MyErrorBoundary from "../../boundary/ErrorBoundary";

interface Props {
  accountType: AccountType;
}

const getIconByName = (iconName: string) => {
  switch (iconName) {
    case "FaHome":
      return <FaHome />;
    case "FaChartLine":
      return <FaChartLine />;
    case "FaDollarSign":
      return <FaDollarSign />;
    case "FaTruck":
      return <FaTruck />;
    case "FaPlus":
      return <FaPlus />;
    case "FaBell":
      return <FaBell />;
    case "FaUserPlus":
      return <FaUserPlus />;
    case "FaLandmark":
      return <FaLandmark />;
    case "FaUser":
      return <FaUser />;
    // Add more cases for other icons as needed
    default:
      return null; // You may want to handle unknown icons differently
  }
};

const SideBar = ({ accountType }: Props) => {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div className={open ? styles.containerOpen : styles.containerClosed}>
      <div className={open ? styles.sidenav : styles.sidenavClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
          {open ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
        </button>
        {settings[accountType].menu.options.map((menu) => {
          return (
            <NavLink
              key={menu.title}
              className={styles.sideitem}
              to={menu.route}
            >
              {getIconByName(menu.icon)}
              <span className={open ? styles.linkText : styles.linkTextClosed}>
                {menu.title}
              </span>
            </NavLink>
          );
        })}
      </div>
      <div className={styles.content}>
        <MyErrorBoundary>
          {accountType === "ENTERPRISE" ? (
            // Uncoment this code to check the integration
            // <CompanyDashboardBase />
            <>
              <h1>CompanyDashboardBase</h1>
              <p>Implement here the MF</p>
            </>
          ) : (
            // Uncoment this code to check the integration
            // <PersonalDashboardBase />
            <>
              <h1>PersonalDashboardBase</h1>
              <p>Implement here the MF</p>
            </>
          )}
        </MyErrorBoundary>
      </div>
    </div>
  );
};

export default SideBar;
