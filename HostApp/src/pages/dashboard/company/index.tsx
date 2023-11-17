import React, { useEffect, useRef } from "react";
import { mount } from "companyDashboardApp/companyDashboardAppIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { companyDashboardAppPrefix } from "../../../constants/routes.constant";
import MyErrorBoundary from "../../../boundary/ErrorBoundary";

const CompanyDashboardBaseName = `/${companyDashboardAppPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside appCompanyDashboard mfe.
  useEffect(() => {
    const appCompanyDashboardNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${CompanyDashboardBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener(
      "[appCompanyDashboard] navigated",
      appCompanyDashboardNavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        "[appCompanyDashboard] navigated",
        appCompanyDashboardNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(CompanyDashboardBaseName)) {
      window.dispatchEvent(
        new CustomEvent("[shell] navigated", {
          detail: location.pathname.replace(CompanyDashboardBaseName, ""),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount appCompanyDashboard MFE
  useEffect(() => {
    try {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          CompanyDashboardBaseName,
          ""
        ),
      });
      isFirstRunRef.current = false;
    } catch (error) {}
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="appCompanyDashboard-mfe" />;
};
