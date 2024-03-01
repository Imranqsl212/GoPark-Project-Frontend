import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { NotificationProvider } from './contexts/notificationContext';
import NotificationConatiner from "./components/Notification/NotificationConatiner";
import Conatiner from "./components/common/container";
import App from "./App";

import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NotificationProvider>
      <Conatiner>
        <NotificationConatiner>
          <App />
        </NotificationConatiner>
      </Conatiner>
    </NotificationProvider>
  </BrowserRouter>
);
