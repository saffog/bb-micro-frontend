import React from "react";
import {createRoot} from "react-dom/client";

import "./index.css";

import "PersonalDashboard/index"
import { Dasboard } from "PersonalDashboard/components/pages/Dasboard";

import "svelte/index"
import Home from "svelte/Home";

const App = () => (
  <div className="container">
    <div>Name: mf_contenedor</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Home/>
    <Dasboard/>
  </div>
);

const root = createRoot(document.getElementById("app") !);
root.render(<App/>);

//ReactDOM.render(<App />, document.getElementById("app"));
