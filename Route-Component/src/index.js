import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Route from "./Route"

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Route />
  </StrictMode>,
  rootElement
);
