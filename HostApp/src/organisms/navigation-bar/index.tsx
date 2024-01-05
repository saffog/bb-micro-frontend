import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import { Image } from "../../atoms/image";
import { landingAppPrefix } from "../../constants/routes.constant";

import {USERS} from '../../constants/users.constant';
import User from '../../interfaces/user.interface';
import DropdownMenu from '../../atoms/dropdown-menu';
import {ITEMS_MENU} from '../../constants/dropdown-menu.constant';
import useDevice from '../../hooks/useDevice';

import {IoMenu} from 'react-icons/io5';

import styles from "./index.module.css";

export const NavigationBar = () => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const {isMobile} = useDevice();

  const queryParams = new URLSearchParams(location.search);

  const isLandingPage = location.pathname === '/landing';
  const userId = queryParams.get("userId");

  useEffect(() => {
    const hasUser = USERS.find((user) => user.userId === userId);
    if(hasUser) setCurrentUser(hasUser);
  }, [userId]);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (isMobile)  setMenuOpen(false);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {!isMobile &&
        <Link className={styles.navbarLeft} to={`/${landingAppPrefix}`}>
          <Image src="/assets/images/Logo.png" alt="logo" />
        </Link>
      }
      {isMobile &&
        <div className={styles.navbarMobile}>
          <Link className={styles.navbarLeft} to={`/${landingAppPrefix}`}>
            <Image src="/assets/images/Logo.png" alt="logo" />
          </Link>
          { isLandingPage && <IoMenu onClick={toggleMenu} className={styles.hamburgerButton}/> }
          { !isLandingPage && currentUser && (
            <div className={styles.navbarRight}>
              <DropdownMenu title={currentUser.userName} items={ITEMS_MENU} />
            </div>
          )}
        </div>
      }
      { isLandingPage && (
        <div className={`${styles.navbarRight} ${isMobile ? ( menuOpen ? {} : styles.menuClosed ) : {}}`}>
          <a onClick={() => scrollToElement("contact")} >
            Contacto
          </a>
          <a onClick={() => scrollToElement("products")} >
            Productos
          </a>
          <a onClick={() => scrollToElement("about")} >
            Sobre
          </a>
          <a onClick={() => scrollToElement("hero")}>
            Inicio
          </a>
        </div>
      )}
      {!isMobile && !isLandingPage && currentUser && (
        <div className={styles.navbarRight}>
          <DropdownMenu title={currentUser.userName} items={ITEMS_MENU} />
        </div>
      )}
    </nav>
  );
};
