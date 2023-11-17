import { createBrowserRouter, createMemoryRouter } from "react-router-dom";

import {RoutingStrategy} from '../interfaces/Router.interface';
import {remoteRoutes} from './Routes';


interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
}

export function createRouter({ strategy, initialPathname }: CreateRouterProps) {
  if (strategy === 'browser') {
    return createBrowserRouter(remoteRoutes);
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(remoteRoutes, { initialEntries: initialEntries });
}