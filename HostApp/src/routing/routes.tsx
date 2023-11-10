import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { LayoutRouter } from "../organisms/layout-router"; 
import { clientDashboardAppPrefix, clientLoginAppPrefix, enterpriseDashboardAppPrefix, enterpriseLoginAppPrefix, internetBankingMenuAppPrefix, landingAppPrefix } from "../constants/routes.constant";


const AppLoginClientLazy = lazy(() => import("./../pages/login/client/index"));
// const App2Lazy = lazy(() => import("../components/App2"));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutRouter />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${landingAppPrefix}`} />,
      },
      {
        path: `/${clientLoginAppPrefix}/*`,
        element: <Suspense fallback="Loading Login Client..."><AppLoginClientLazy /></Suspense>,
      },
    //   {
    //     path: `/${enterpriseLoginAppPrefix}/*`,
    //     element: <Suspense fallback="Loading Login Enterprise..."><App2Lazy /></Suspense>,
    //   },
    //   {
    //     path: `/${internetBankingMenuAppPrefix}/*`,
    //     element: <Suspense fallback="Loading Internet Banking Main Menu..."><App2Lazy /></Suspense>,
    //   },
    //   {
    //     path: `/${clientDashboardAppPrefix}/*`,
    //     element: <Suspense fallback="Loading Dashboard Client..."><App2Lazy /></Suspense>,
    //   },
    //   {
    //     path: `/${enterpriseDashboardAppPrefix}/*`,
    //     element: <Suspense fallback="Loading Dashboard Enterprise..."><App2Lazy /></Suspense>,
    //   },
    ],
  }
];