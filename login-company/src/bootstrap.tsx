import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routing/router-factory";
import { RoutingStrategy } from "./routing/types";
import "./index.css";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mock-request/setupMSW");
  return worker.start();
}

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  enableMocking().then(() => {
    const root = createRoot(mountPoint);
    root.render(<RouterProvider router={router} />);
    return () => queueMicrotask(() => root.unmount());
  });
};

export { mount };
