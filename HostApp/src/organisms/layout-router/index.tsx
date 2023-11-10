import React from 'react'
import { clientLoginAppPrefix, enterpriseLoginAppPrefix } from '../../constants/routes.constant'
import { Link, Outlet } from 'react-router-dom'

export const LayoutRouter = () => {
  return (
    <>
      <nav style={{ marginBottom: "3rem" }}>
        <Link to={`/${clientLoginAppPrefix}`} style={{ marginRight: "1rem" }}>
          Login Client
        </Link>
        <Link to={`/${enterpriseLoginAppPrefix}`} style={{ marginRight: "1rem" }}>
          Login Enterprise
        </Link>
        {/* <Link to={`/${app2RoutingPrefix}/page-a`} style={{ marginRight: "1rem" }}>
          App2 PageA
        </Link>
        <Link to={`/${app2RoutingPrefix}/page-b`}>App2 PageB</Link> */}
      </nav>
      <Outlet />
    </>
  )
}
