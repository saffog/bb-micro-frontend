import React from "react";
import ReactDOM from "react-dom/client";
import CreateAccountPage from "./pages/CreateAccountPage";
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./index.css";
import "./mock-request/setupMSW";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mock-request/setupMSW");
  return worker.start();
}

const App = () => (
  <div className="container">
    <Routes>
      <Route path="/" element={<LoginPage title="Cuenta Empresarial" />} />
      <Route
        path="/create-account"
        element={<CreateAccountPage title="Cuenta Empresarial" />}
      />
      <Route
        path="/password-recovery"
        element={<PasswordRecoveryPage title="Cuenta Empresarial" />}
      />
    </Routes>
  </div>
);

enableMocking().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
});
