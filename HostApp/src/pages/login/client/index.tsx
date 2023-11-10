import React, { useEffect, useRef } from "react";
import { mount } from "landingApp/landingPageIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { clientLoginAppPrefix } from "../../../constants/routes.constant";

const ClientLoginBaseName = `/${clientLoginAppPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside appClientLogin mfe.
  useEffect(() => {
    const appClientLoginNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${ClientLoginBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[appClientLogin] navigated", appClientLoginNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[appClientLogin] navigated",
        appClientLoginNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(
    () => {
      if (location.pathname.startsWith(ClientLoginBaseName)) {
        window.dispatchEvent(
          new CustomEvent("[shell] navigated", {
            detail: location.pathname.replace(ClientLoginBaseName, ""),
          })
        );
      }
    },
    [location],
  );

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount appClientLogin MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          ClientLoginBaseName,
          ''
        ),
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="appClientLogin-mfe" />;
};