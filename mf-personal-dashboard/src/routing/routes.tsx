import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from '../components/managers/navigation-manager';
import {Dasboard} from '../components/pages/Dasboard';


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
        element: <Dasboard />,
      },
      {
        path: "main",
        element: <Dasboard />,
      }
    ],
  },
];