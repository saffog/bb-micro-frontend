import React, { useEffect, useRef } from "react";
import { mount } from "companyLoginApp/companyLoginAppIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { companyLoginAppPrefix } from "../../../constants/routes.constant";

const CompanyLoginBaseName = `/${companyLoginAppPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside appCompanyDashboard mfe.
  useEffect(() => {
    const appCompanyLoginNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${CompanyLoginBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[appCompanyLogin] navigated", appCompanyLoginNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[appCompanyLogin] navigated",
        appCompanyLoginNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(
    () => {
      if (location.pathname.startsWith(CompanyLoginBaseName)) {
        window.dispatchEvent(
          new CustomEvent("[shell] navigated", {
            detail: location.pathname.replace(CompanyLoginBaseName, ""),
          })
        );
      }
    },
    [location],
  );

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount appCompanyLogin MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          CompanyLoginBaseName,
          ''
        ),
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="appCompanyLogin-mfe" />;
};