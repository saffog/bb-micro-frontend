import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { NavigationBar } from './organisms/navigation-bar/index';
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./routing/Router";

// const Landing=React.lazy(()=>import('landing/landing'));

const Host = () => (

  <>
    <>
      <NavigationBar />
    </>
    <Router />
  </>
);

export default Host;