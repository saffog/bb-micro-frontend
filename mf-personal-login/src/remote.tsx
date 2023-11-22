import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import {createRouter} from './router/RouterFactory';
import {RoutingStrategy} from './interfaces/Router.interface';
import {deferRender} from './mocks/mockingSetup';

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  const root = createRoot(mountPoint);

  deferRender().then(() => {
    root.render(<RouterProvider router={router} />
    );
  });

  // root.render(<RouterProvider router={router} />);
  return () => queueMicrotask(() => root.unmount());
};

export { mount };