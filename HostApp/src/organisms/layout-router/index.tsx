import React, { useEffect } from "react";
import {internetBankingMenuAppPrefix} from "../../constants/routes.constant";
import { Outlet, useNavigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar";
import "./index.css";

export const LayoutRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("[LoginApp] login", (event) => {
      navigate(
        `/${internetBankingMenuAppPrefix}?userId=${(event as CustomEvent<any>).detail.userId}`
      );
    });

    return () => {
      window.removeEventListener("[LoginApp] login", () => null);
    };
  }, []);

  return (
    <div className="root">
      <header>
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
      {/*<footer>*/}
      {/*</footer>*/}
    </div>
  );
};
