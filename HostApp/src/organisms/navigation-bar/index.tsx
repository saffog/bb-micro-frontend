import React from 'react'
import './index.css';
import { Image } from '../../atoms/image/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const NavigationBar = () => {

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/login">Login</a>
                <a href="/contacto">Contacto</a>
                <a href="/productos">Productos</a>
                <a href="/sobre">Sobre</a>
                <a href="/landing">Inicio</a>
            </div>
            <div className="navbar-right">
                <Image src='/assets/images/Logo.png' alt='logo' />
            </div>
        </nav>
    )
}
