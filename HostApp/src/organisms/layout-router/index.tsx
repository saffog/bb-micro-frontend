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
    window.addEventListener('[LoginApp] login', (event) => {
      navigate(`/${internetBankingMenuAppPrefix}?id=${event.detail.userId}`)
    });

    return () => {
      window.removeEventListener('[LoginApp] login', () => null);
    }
  }, []);

  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
}
