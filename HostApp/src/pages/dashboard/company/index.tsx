import React, { useEffect, useRef } from "react";
import { mount } from "companyDashboardApp/companyDashboardAppIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { companyDashboardAppPrefix } from "../../../constants/routes.constant";

const CompanyDashboardBaseName = `/${companyDashboardAppPrefix}`;

export default () => {
  console.log("Entering to pages/dashboard/company/index.tsx");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside appCompanyDashboard mfe.
  useEffect(() => {
    console.log("Listening to navigation events dispatched inside appCompanyDashboard mfe");
    const appCompanyDashboardNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${CompanyDashboardBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      console.log("Before navigate"+newPathname);
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
    console.log("Listening for shell location changes");
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
      console.log("Mounting appCompanyDashboard MFE");
      if (!isFirstRunRef.current) {
        return;
      }
      console.log("Before mount"+location.pathname);
      location.pathname = CompanyDashboardBaseName;
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          CompanyDashboardBaseName,
          ""
        ),
      });
      isFirstRunRef.current = false;
    } catch (error) { console.log(error); }
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="appCompanyDashboard-mfe" />;
};
