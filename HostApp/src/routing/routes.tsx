import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { LayoutRouter } from "../organisms/layout-router"; 
import { personalDashboardAppPrefix, personalLoginAppPrefix, companyDashboardAppPrefix, companyLoginAppPrefix, internetBankingMenuAppPrefix, landingAppPrefix } from "../constants/routes.constant";


const AppLoginClientLazy = lazy(() => import("../pages/login/personal/index"));
const AppLoginEnterpriseLazy = lazy(() => import("../pages/login/company/index"));
const AppLandingLazy = lazy(() => import("../pages/landing/index"));
const AppInternetBanking = lazy(() => import("./../pages/internet-banking/index"));
const AppPersonalDashboard = lazy(() => import("./../pages/dashboard/personal/index"));
const AppEnterpriseDashboard = lazy(() => import("../pages/dashboard/company/index"));
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
        path: `/${landingAppPrefix}/*`,
        element: <Suspense fallback="Loading Login Client..."><AppLandingLazy /></Suspense>,
      },
      {
        path: `/${personalLoginAppPrefix}/*`,
        element: <Suspense fallback="Loading Login Personal..."><AppLoginClientLazy /></Suspense>,
      },
      {
        path: `/${companyLoginAppPrefix}/*`,
        element: <Suspense fallback="Loading Login Enterprise..."><AppLoginEnterpriseLazy /></Suspense>,
      },
      {
        path: `/${internetBankingMenuAppPrefix}/*`,
        element: <Suspense fallback="Loading Internet Banking Main Menu..."><AppInternetBanking /></Suspense>,
      },
      {
        path: `/${personalDashboardAppPrefix}/*`,
        element: <Suspense fallback="Loading Dashboard Client..."><AppPersonalDashboard /></Suspense>,
      },
      {
        path: `/${companyDashboardAppPrefix}/*`,
        element: <Suspense fallback="Loading Dashboard Enterprise..."><AppEnterpriseDashboard /></Suspense>,
      },
    ],
  }
];