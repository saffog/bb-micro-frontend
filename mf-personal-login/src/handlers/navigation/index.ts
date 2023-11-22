import { ReactElement, useEffect } from 'react';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';

import {remoteRoutes} from '../../router/Routes';


interface NavigationManagerProps {
  children: ReactElement;
}

export const NavigationManager = ({ children }: NavigationManagerProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function hostNavigationHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;
      if (location.pathname === pathname || !matchRoutes(remoteRoutes, { pathname })) {
        return;
      }
      navigate(pathname);
    }

    window.addEventListener('[host] navigated', hostNavigationHandler);

    return () => {
      window.removeEventListener('[host] navigated', hostNavigationHandler);
    };
  }, [location]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('[PersonalLoginApp] navigated', { detail: location.pathname })
    );
  }, [location]);

  return children;
};