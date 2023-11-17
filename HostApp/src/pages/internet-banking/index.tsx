import React, { useEffect, useState } from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import { Button } from "../../atoms/button/index";
import { HeroContainer } from "../../organisms/hero-container/index";
import { AboutContainer } from "../../organisms/about-container";
import { ProductsContainer } from "../../organisms/products-container";
import { ContactContainer } from "../../organisms/contact-container";
import {internetBankingMenuAppPrefix, landingAppPrefix} from "../../constants/routes.constant";
import { StatusBar } from "../../organisms/status-bar";
import User from "../../interfaces/user.interface";
import SideBar from "../../organisms/side-bar";
import MyErrorBoundary from "../../boundary/ErrorBoundary";

const LandingBaseName = `/${landingAppPrefix}`;

const USERS = [
  {
    accountType: "PERSONAL",
    userName: "Juanito",
    userId: "1",
  },
  {
    accountType: "PERSONAL",
    userName: "Pedrito",
    userId: "2",
  },
  {
    accountType: "ENTERPRISE",
    userName: "Pablito",
    userId: "3",
  },
];

export default () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('userId');


  const [user, setUser] = useState<User>({
    accountType: "PERSONAL",
    userName: "Juanito",
    userId: "123",
  });

  useEffect(() => {
    setUser(USERS.find((user) => user.userId === id) as User)
  }, [id])

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
