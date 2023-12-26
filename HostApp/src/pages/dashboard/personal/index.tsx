import React, { useEffect, useRef } from "react";
import { mount } from "personalDashboardApp/personalDashboardAppIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { personalDashboardAppPrefix } from "../../../constants/routes.constant";

const PersonalDashboardBaseName = `/${personalDashboardAppPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside appPersonalLogin mfe.
  useEffect(() => {
    const appPersonalLoginNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${PersonalDashboardBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[appPersonalLogin] navigated", appPersonalLoginNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[appPersonalLogin] navigated",
        appPersonalLoginNavigationEventHandler
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
  // Mount appPersonalLogin MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      location.pathname = PersonalDashboardBaseName;
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