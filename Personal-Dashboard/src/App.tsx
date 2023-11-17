import React from "react";
import {createRoot} from "react-dom/client";

import "./index.scss";
import { Dasboard } from "./components/pages/Dasboard";

const Personal_Dashboard = () => (
  <div>
    <Dasboard/>
  </div>
);

const root = createRoot(document.getElementById("personal_dashboard") !);
root.render(<Personal_Dashboard/>);

//ReactDOM.render(<App />, document.getElementById("app"));