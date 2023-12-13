import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import {deferRender} from './mocks/mockingSetup';
import {LocalRoutes} from './router/Routes';
import {runStandalone} from '../styleLoader';

import './index.css';

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
    <LocalRoutes/>
  );
};

const root = ReactDOM.createRoot(document.getElementById('appPersonalLogin-mfe')!);

deferRender().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App isStandalone />
      </BrowserRouter>
    </React.StrictMode>
  );
});
