import React from 'react'
import { personalLoginAppPrefix, companyLoginAppPrefix } from '../../constants/routes.constant'
import { Link, Outlet } from 'react-router-dom'
import { NavigationBar } from '../navigation-bar'

export const LayoutRouter = () => {
  return (
    <>
    <NavigationBar />
    <Outlet />
    </>
  )
}
