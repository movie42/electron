import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
declare global {
  interface Window {
    electron?: {
      notificationApi: {
        sendNotification: (message: string) => void;
      };
    };
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
