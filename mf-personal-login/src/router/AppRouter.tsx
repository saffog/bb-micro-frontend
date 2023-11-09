import React from 'react';
import {useRoutes} from 'react-router-dom';

import {ForgotPasswordPage, LoginPage, RegisterPage} from '../components/pages';

const AppRouter = () => {
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

export default AppRouter;