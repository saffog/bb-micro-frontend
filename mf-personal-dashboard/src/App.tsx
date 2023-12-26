import React from "react";
import {createRoot} from "react-dom/client";

import { Dashboard } from "./components/pages/Dashboard";

const Personal_Dashboard = () => (
  <div>
    <Dashboard/>
  </div>
);

const root = createRoot(document.getElementById("appPersonalDashboard-mfe")!);
root.render(<Personal_Dashboard/>);

//ReactDOM.render(<App />, document.getElementById("app"));