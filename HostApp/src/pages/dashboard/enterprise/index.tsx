import React, { useEffect, useRef } from "react";
import { mount } from "enterpriseLoginApp/enterpriseLoginAppIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { enterpriseLoginAppPrefix } from "../../../constants/routes.constant";

const EnterpriseLoginBaseName = `/${enterpriseLoginAppPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside appEnterpriseLogin mfe.
  useEffect(() => {
    const appEnterpriseLoginNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${EnterpriseLoginBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[appEnterpriseLogin] navigated", appEnterpriseLoginNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[appEnterpriseLogin] navigated",
        appEnterpriseLoginNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(
    () => {
      if (location.pathname.startsWith(EnterpriseLoginBaseName)) {
        window.dispatchEvent(
          new CustomEvent("[shell] navigated", {
            detail: location.pathname.replace(EnterpriseLoginBaseName, ""),
          })
        );
      }
    },
    [location],
  );

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount appEnterpriseLogin MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          EnterpriseLoginBaseName,
          ''
        ),
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="appEnterpriseLogin-mfe" />;
};