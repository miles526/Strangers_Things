import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main"

const App = () => {
  return (
    <div className="app">
      <Main />
    </div>
  );
};
const Root = createRoot(document.getElementById("root"));
Root.render(<BrowserRouter><div><App /></div></BrowserRouter>);

