import React from 'react'
import './index.css';
import { Image } from '../../atoms/image/index';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { clientLoginAppPrefix, enterpriseLoginAppPrefix, landingAppPrefix } from '../../constants/routes.constant';


export const NavigationBar = () => {

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to={`/${clientLoginAppPrefix}`} style={{ marginRight: "1rem" }}>
                    Login Personal
                </Link>
                <Link to={`/${enterpriseLoginAppPrefix}`} style={{ marginRight: "1rem" }}>
                    Login Enterprise
                </Link>
                <Link to={`/${landingAppPrefix}`} style={{ marginRight: "1rem" }}>
                    Contacto
                </Link>
                <Link to={`/${landingAppPrefix}`} style={{ marginRight: "1rem" }}>
                    Productos
                </Link>
                <Link to={`/${landingAppPrefix}`} style={{ marginRight: "1rem" }}>
                    Sobre
                </Link>
                <Link to={`/${landingAppPrefix}`} style={{ marginRight: "1rem" }}>
                    Inicio
                </Link>
            </div>
            <div className="navbar-right">
                <Image src='/assets/images/Logo.png' alt='logo' />
            </div>
        </nav>
    )
}
