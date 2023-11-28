import React, { useEffect } from "react";
import "./index.css";
import { Image } from "../../atoms/image/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  personalLoginAppPrefix,
  companyLoginAppPrefix,
  landingAppPrefix,
} from "../../constants/routes.constant";

export const NavigationBar = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to={`/${landingAppPrefix}`}>
          <Image src="/assets/images/Logo.png" alt="logo" />
        </Link>
      </div>
      <div
        className="navbar-right"
        style={{
          display: window.location.href.includes("landing") ? "" : "none",
        }}
      >
        <a
          onClick={() => scrollToElement("contact")}
          style={{ marginRight: "1rem" }}
        >
          Contacto
        </a>
        <a
          onClick={() => scrollToElement("products")}
          style={{ marginRight: "1rem" }}
        >
          Productos
        </a>
        <a
          onClick={() => scrollToElement("about")}
          style={{ marginRight: "1rem" }}
        >
          Sobre
        </a>
        <a
          onClick={() => scrollToElement("hero")}
          style={{ marginRight: "1rem" }}
        >
          Inicio
        </a>
      </div>
    </nav>
  );
};
