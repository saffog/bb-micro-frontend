import React, {useEffect, useState} from "react";
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
import { NavLink } from "react-router-dom";
import MyErrorBoundary from "../../boundary/ErrorBoundary";
import useDevice from '../../hooks/useDevice';

import styles from "./index.module.css";

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
    default:
      return null;
  }
};

const SideBar = ({ accountType }: Props) => {

  const [open, setOpen] = useState(true);
  const { isMobile } = useDevice();

  useEffect(() => {
    if (isMobile) {
      setOpen(false)
    }
  }, [isMobile]);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const DashboardComponent = React.lazy(
    () => import(`../../pages/dashboard/${settings[accountType].contentFolder}`)
  );

  return (
    <div className={open ? styles.containerOpen : styles.containerClosed}>
      <div className={open ? styles.containerSidenav : styles.containerSidenavClosed}>
        <div className={open ? styles.sidenav : styles.sidenavClosed}>
          <button className={styles.menuBtn} onClick={toggleOpen}>
            {open ?
              <div className={styles.headerSidenav}>
                <FaAngleDoubleLeft />
                {settings[accountType].label.toUpperCase()}
              </div>  :
              <FaAngleDoubleRight />
            }
          </button>
          {settings[accountType].menu.options.map((menu) => {
            return (
              <NavLink
                key={menu.title}
                className={styles.sideItem}
                to={menu.route}
                style={
                  menu.title === "Inicio"
                    ? ({
                      backgroundColor: "#f5f5f5",
                    })
                    : ({})

                }
              >
                {open && getIconByName(menu.icon)}
                <span className={open ? styles.linkText : styles.linkTextClosed}>
                {open ? menu.title : getIconByName(menu.icon)}
              </span>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className={styles.content}>
        <MyErrorBoundary>
          <React.Suspense fallback={<div>Loading...</div>}>
            <DashboardComponent />
          </React.Suspense>
        </MyErrorBoundary>
      </div>
    </div>
  );
};

export default SideBar;
