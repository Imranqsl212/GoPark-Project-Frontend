import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Conatiner from "./components/common/container";

import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Conatiner>
      <App />
   </Conatiner>
  </BrowserRouter>
);
