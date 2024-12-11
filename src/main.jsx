import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextStore from "./context/ContextStore.jsx";
import Router from "./Router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextStore>
        <Router />
      </ContextStore>
    </BrowserRouter>
  </StrictMode>
);
