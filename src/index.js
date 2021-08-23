import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./Contexts/GlobalContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById("root")
);
