import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRouter from './router/AppRouter';
import {BrowserRouter} from 'react-router-dom';

const deferRender = async () => {
  if (process.env.NODE_ENV !== 'development') return;
  const { worker } = await import('./mocks/browser');
  return worker.start();
};

const App = () => (
  <AppRouter />
);

const root = ReactDOM.createRoot(document.getElementById('root')!);

deferRender().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
})
