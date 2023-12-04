import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import { Image } from "../../atoms/image";
import { landingAppPrefix } from "../../constants/routes.constant";

import "./index.css";
import {USERS} from '../../constants/users.constant';
import User from '../../interfaces/user.interface';
import DropdownMenu from '../../atoms/dropdown-menu';
import {ITEMS_MENU} from '../../constants/dropdown-menu.constant';

export const NavigationBar = () => {
  const [currentUser, setCurrentUser] = useState<User>();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isLandingPage = location.pathname === '/landing';
  const userId = queryParams.get("userId");

  useEffect(() => {
    const hasUser = USERS.find((user) => user.userId === userId);
    if(hasUser) setCurrentUser(hasUser);
  }, [userId]);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <Link className="navbarLeft" to={`/${landingAppPrefix}`}>
        <Image src="/assets/images/Logo.png" alt="logo" />
      </Link>
      { isLandingPage && (
        <div className="navbarRight">
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
      {!isLandingPage && currentUser && (
        <div className="navbarRight">
          <DropdownMenu title={currentUser.userName} items={ITEMS_MENU} />
        </div>
      )}
    </nav>
  );
};
