import React, { useEffect, useRef } from "react";
import { mount } from "clientDashboardApp/clientDashboardAppIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { clientDashboardAppPrefix } from "../../../constants/routes.constant";

const PersonalDashboardBaseName = `/${clientDashboardAppPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside appPersonalDashboard mfe.
  useEffect(() => {
    const appPersonalDashboardNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${PersonalDashboardBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[appPersonalDashboard] navigated", appPersonalDashboardNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[appPersonalDashboard] navigated",
        appPersonalDashboardNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(
    () => {
      if (location.pathname.startsWith(PersonalDashboardBaseName)) {
        window.dispatchEvent(
          new CustomEvent("[shell] navigated", {
            detail: location.pathname.replace(PersonalDashboardBaseName, ""),
          })
        );
      }
    },
    [location],
  );

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount appPersonalDashboard MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          PersonalDashboardBaseName,
          ''
        ),
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="appPersonalDashboard-mfe" />;
};