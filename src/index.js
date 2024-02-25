import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './styles/main.scss';
import Conatiner from "./components/common/container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Conatiner>
      <App />
   </Conatiner>
  </BrowserRouter>
);
