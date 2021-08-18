import React from "react";
import ReactDOM from "react-dom";
import { GlobalContext } from "./Contexts/GlobalContext";
import { ContextProvider } from "./Contexts/GlobalContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
