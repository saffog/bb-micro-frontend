import React, { useEffect, useRef } from "react";
import { mount } from "personalLoginApp/personalLoginAppIndex";
import { useLocation, useNavigate } from "react-router-dom";
import { personalLoginAppPrefix } from "../../../constants/routes.constant";

const PersonalLoginBaseName = `/${personalLoginAppPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside appPersonalLogin mfe.
  useEffect(() => {
    const appPersonalLoginNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${PersonalLoginBaseName}${pathname}`;
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
      if (location.pathname.startsWith(PersonalLoginBaseName)) {
        window.dispatchEvent(
          new CustomEvent("[shell] navigated", {
            detail: location.pathname.replace(PersonalLoginBaseName, ""),
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
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          PersonalLoginBaseName,
          ''
        ),
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="appPersonalLogin-mfe" />;
};