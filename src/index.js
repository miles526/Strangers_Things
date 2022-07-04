import React from "react";
//import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('main')
);

