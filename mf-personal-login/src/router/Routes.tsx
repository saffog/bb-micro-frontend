import React from 'react';
import {Outlet, useRoutes} from 'react-router-dom';

import {ForgotPasswordPage, LoginPage, RegisterPage} from '../components/pages';
import {NavigationManager} from '../handlers/navigation';

const LocalRoutes = () => {
  return useRoutes([
    {
      path: 'login',
      element: <LoginPage/>,
    },
    {
      path: 'signup',
      element: <RegisterPage/>,
    },
    {
      path: 'forgot-password',
      element: <ForgotPasswordPage/>,
    },
  ]);
};

const remoteRoutes = [{
  path: '/',
  element: (
    <NavigationManager>
      <Outlet />
    </NavigationManager>
  ),
  children: [
    {
      index: true,
      element: <LoginPage/>,
    },
    {
      path: 'signup',
      element: <RegisterPage/>,
    },
    {
      path: 'forgot-password',
      element: <ForgotPasswordPage/>,
    },
  ],
}];

export {LocalRoutes, remoteRoutes};