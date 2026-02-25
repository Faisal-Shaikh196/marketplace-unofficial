import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { MyToastRegion } from "./components/ui/Toast/Toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyToastRegion />
    <App />
  </React.StrictMode>
);
