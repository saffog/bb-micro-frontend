import React, { useEffect, useRef } from "react";
import { mount } from "clientDashboardApp/clientDashboardAppIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { enterpriseDashboardAppPrefix } from "../../../constants/routes.constant";

const EnterpriseDashboardBaseName = `/${enterpriseDashboardAppPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside appEnterpriseDashboard mfe.
  useEffect(() => {
    const appEnterpriseDashboardNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${EnterpriseDashboardBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[appEnterpriseDashboard] navigated", appEnterpriseDashboardNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[appEnterpriseDashboard] navigated",
        appEnterpriseDashboardNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(
    () => {
      if (location.pathname.startsWith(EnterpriseDashboardBaseName)) {
        window.dispatchEvent(
          new CustomEvent("[shell] navigated", {
            detail: location.pathname.replace(EnterpriseDashboardBaseName, ""),
          })
        );
      }
    },
    [location],
  );

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount appEnterpriseDashboard MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          EnterpriseDashboardBaseName,
          ''
        ),
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="appEnterpriseDashboard-mfe" />;
};