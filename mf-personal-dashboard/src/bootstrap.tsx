import React from "react";
import { createRoot, Root} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {createRouter} from "./routing/router-factory";
import {RoutingStrategy} from "./routing/types";
import "./index.scss";
import {createShadowContainer, deleteShadowContainer, runStandalone} from '../styleLoader';

const APP_KEY = 'appPersonalDashboard-mfe';

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
  isStandalone,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
  isStandalone?: boolean;
}) => {
  try {
    let root: Root;
    if (isStandalone) {
      root = createRoot(mountPoint);
      runStandalone();
    } else {
      const appPlaceholder = createShadowContainer(APP_KEY);
      if (!appPlaceholder) return;
      root = createRoot(appPlaceholder);
    }

    const router = createRouter({ strategy: routingStrategy, initialPathname });

    root.render(<RouterProvider router={router} />);

    return () => {
      deleteShadowContainer(APP_KEY);
      queueMicrotask(() => root.unmount());
    };
  } catch (error) {
    // React.StrictMode enabled cause DOMException:
    // Failed to execute 'attachShadow' on 'Element': Shadow root cannot be created on a host which already hosts a shadow tree.
    // console.log('🚀 ~ file: Remote.js:45 ~ useEffect ~ error:', error);
  }
};

export { mount };