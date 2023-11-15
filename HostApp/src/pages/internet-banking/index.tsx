import React, { useEffect, useRef } from "react";
import { mount } from "internetBankingMenuApp/internetBankingMenuAppIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { internetBankingMenuAppPrefix } from "../../constants/routes.constant";

const InternetBankingBaseName = `/${internetBankingMenuAppPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside appInternetBanking mfe.
  useEffect(() => {
    const appInternetBankingNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${InternetBankingBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[appInternetBanking] navigated", appInternetBankingNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[appInternetBanking] navigated",
        appInternetBankingNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(
    () => {
      if (location.pathname.startsWith(InternetBankingBaseName)) {
        window.dispatchEvent(
          new CustomEvent("[shell] navigated", {
            detail: location.pathname.replace(InternetBankingBaseName, ""),
          })
        );
      }
    },
    [location],
  );

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount appInternetBanking MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          InternetBankingBaseName,
          ''
        ),
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="appInternetBanking-mfe" />;
};