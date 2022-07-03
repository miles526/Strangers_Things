import React from "react";
//import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('main');

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  rootElement
);

