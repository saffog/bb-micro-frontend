import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import HomePage from "./components/pages/home";
import {runStandalone} from '../styleLoader';

import "./index.css";

interface Props {
  isStandalone?: boolean;
}

const App = ({isStandalone}: Props) => {

  useEffect(() => {
    // If we receive the isStandAlone prop we will initialize the style loader in standalone mode
    if (isStandalone) {
      runStandalone();
    }
  }, [isStandalone]);
  return (
    <HomePage/>
  );
};
ReactDOM.render(<App isStandalone />, document.getElementById("appCompanyDashboard-mfe"));
