import React, { useState } from "react";
import { LoginLayout } from "../../molecules/login-layout";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { companyLoginAppPrefix, personalLoginAppPrefix, internetBankingMenuAppPrefix } from "../../constants/routes.constant";
import { Image } from '../../atoms/image/index';

export const HeroContainer = () => {
    const navigate=useNavigate();
    const onClickLoginPersonal = () => { navigate(`/${personalLoginAppPrefix}`)};
    const onClickLoginEnterprise = () => {navigate(`/${companyLoginAppPrefix}`) };
    const onClickInternetBanking = () => {navigate(`/${internetBankingMenuAppPrefix}`) };


    return (
        <div className={styles.container}>
            <LoginLayout
                title="Bienvenido a BAU-Banking: Transformando la Banca para Ti."
                bodyContent={
                    `Tu dinero, tu control. BAU-Banking ofrece una suite completa de soluciones bancarias diseñadas pensando en ti. 
                    Únete a nosotros y descubre el poder de tomar el control de tus finanzas.
                    `
                }
                buttonProps={[{
                    name: "Login Personal",
                    type: "button",
                    onClick: onClickLoginPersonal,
                },{
                    name: "Login Empresarial",
                    type: "button",
                    onClick: onClickLoginEnterprise,

                },{
                    name: "Internet Banking(Testing)",
                    type: "button",
                    onClick: onClickInternetBanking,

                }]}
            />
            
            <div style={{flex:2}}>
                <img src={'/assets/images/hero-banking.png'} alt="Hero" style={{width:'800px'}}/>
            </div>
            
        </div>
    );
};
