import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from '../components/managers/navigation-manager';
import {Dashboard} from '../components/pages/Dashboard';


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
        element: <Dashboard />,
      },
      {
        path: "main",
        element: <Dashboard />,
      }
    ],
  },
];