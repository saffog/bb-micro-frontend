import React from "react";
import {createRoot} from "react-dom/client";

import "./index.scss";
import { Graphic } from "./componets/graphic";
import Card from "./componets/card";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl inline-grid ">
    <Graphic/>
    <Card />
  </div>
);

const root = createRoot(document.getElementById("app") !);
root.render(<App/>);

//ReactDOM.render(<App />, document.getElementById("app"));