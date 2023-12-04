import React from "react";
import { useNavigate } from "react-router-dom";

import { LoginLayout } from "../../molecules/login-layout";
import { companyLoginAppPrefix, personalLoginAppPrefix } from "../../constants/routes.constant";

import styles from "./index.module.css";

export const HeroContainer = () => {
    const navigate=useNavigate();
    const onClickLoginPersonal = () => { navigate(`/${personalLoginAppPrefix}`)};
    const onClickLoginEnterprise = () => {navigate(`/${companyLoginAppPrefix}`) };
    // const onClickInternetBanking = () => {navigate(`/${internetBankingMenuAppPrefix}`) };


    return (
        <div className={styles.container} id="hero">
          <div className={styles.layoutContainer}>
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

              }]}
            />
          </div>
          <div className={styles.imageContainer}>
              <img className={styles.image} src={'/assets/images/hero-banking.png'} alt="Hero"/>
          </div>
        </div>
    );
};
