import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from '../components/managers/navigation-manager';
import HomePage from '../components/pages/home';


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
        element: <HomePage />,
      },
      {
        path: "main",
        element: <HomePage />,
      }
    ],
  },
];