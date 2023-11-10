import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";

//Create a Broser Router with the routes declared in the routes component
const browserRouter = createBrowserRouter(routes);

export function Router() {
  return (
    <RouterProvider router={browserRouter} />
  );
}