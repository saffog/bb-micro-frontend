import React, {useEffect} from 'react'
import {
  personalLoginAppPrefix,
  companyLoginAppPrefix,
  personalDashboardAppPrefix, internetBankingMenuAppPrefix
} from '../../constants/routes.constant'
import {Link, Outlet, useNavigate} from 'react-router-dom'
import { NavigationBar } from '../navigation-bar'

export const LayoutRouter = () => {
  const navigate=useNavigate();

  useEffect(() => {
    window.addEventListener('[PersonalLoginApp] login', (event) => {
      navigate(`/${internetBankingMenuAppPrefix}`)
      console.log('EVENT LISTENER', event);
    });

    window.addEventListener('[PersonalLoginApp] signup', (event) => {
      navigate(`/${personalDashboardAppPrefix}`)
      console.log('EVENT LISTENER', event);
    });

    window.addEventListener('[PersonalLoginApp] forgot-password', (event) => {
      navigate(`/${personalDashboardAppPrefix}`)
      console.log('EVENT LISTENER', event);
    });

    return () => {
      window.removeEventListener('[PersonalLoginApp] login', () => null);
      window.removeEventListener('[PersonalLoginApp] signup', () => null);
      window.removeEventListener('[PersonalLoginApp] forgot-password', () => null);

    }
  }, []);

  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
}
