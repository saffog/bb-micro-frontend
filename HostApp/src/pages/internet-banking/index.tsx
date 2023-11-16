import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../atoms/button/index";
import { HeroContainer } from "../../organisms/hero-container/index";
import { AboutContainer } from "../../organisms/about-container";
import { ProductsContainer } from "../../organisms/products-container";
import { ContactContainer } from "../../organisms/contact-container";
import { landingAppPrefix } from "../../constants/routes.constant";
import { StatusBar } from "../../organisms/status-bar";
import User from "../../interfaces/user.interface";
import SideBar from "../../organisms/side-bar";
import MyErrorBoundary from "../../boundary/ErrorBoundary";

const LandingBaseName = `/${landingAppPrefix}`;

export default () => {
  const [user, setUser] = useState<User>({
    accountType: "ENTERPRISE",
    userName: "Jhon Doe",
    userId: "User Id",
  });

  return (
    <>
      <div className="container">
        <MyErrorBoundary>
          <StatusBar user={user} />
          <SideBar accountType={user.accountType} />
        </MyErrorBoundary>
      </div>
    </>
  );
};
