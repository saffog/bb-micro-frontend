import React from "react";
import { Outlet } from "react-router-dom";
import { NavigationManager } from "../components/managers/navigation-manager";
import LoginPage from "../pages/LoginPage";
import CreateAccountPage from "../pages/CreateAccountPage";
import PasswordRecoveryPage from "../pages/PasswordRecoveryPage";

export const routes = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <LoginPage title="Cuenta Empresarial" />,
      },
      {
        path: "/",
        element: <LoginPage title="Cuenta Empresarial" />,
      },
      {
        path: "/create-account",
        element: <CreateAccountPage title="Cuenta Empresarial" />,
      },
      {
        path: "/password-recovery",
        element: <PasswordRecoveryPage title="Cuenta Empresarial" />,
      },
    ],
  },
];
