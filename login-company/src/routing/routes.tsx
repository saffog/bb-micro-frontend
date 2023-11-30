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
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/create-account",
        element: <CreateAccountPage />,
      },
      {
        path: "/password-recovery",
        element: <PasswordRecoveryPage title="Cuenta Empresarial" />,
      },
    ],
  },
];
