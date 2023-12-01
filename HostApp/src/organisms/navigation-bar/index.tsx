import React from "react";
import {Link, useLocation} from "react-router-dom";

import { Image } from "../../atoms/image";
import { landingAppPrefix } from "../../constants/routes.constant";

import "./index.css";

export const NavigationBar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/landing';

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
    </nav>
  );
};
