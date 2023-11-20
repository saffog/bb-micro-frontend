import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import HomePage from "./components/pages/home";

const App = () => (
  <HomePage />
);
ReactDOM.render(<App />, document.getElementById("app"));
