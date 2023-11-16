import React from 'react';
import ReactDOM from 'react-dom/client';

import {LocalRoutes} from './router/Routes';
import {BrowserRouter} from 'react-router-dom';
import {deferRender} from './mocks/mockingSetup';

const App = () => (
  <LocalRoutes />
);

const root = ReactDOM.createRoot(document.getElementById('appPersonalLogin-mfe')!);

deferRender().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
})
