import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/Index.scss";
import "./assets/styles/App.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/Auth/authContext";


const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter basename="/">
    <AuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>
);

serviceWorker.unregister();
