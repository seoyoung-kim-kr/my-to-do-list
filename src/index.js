import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppTodo from "./AppTodo";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppTodo />
  </React.StrictMode>
);

reportWebVitals();
