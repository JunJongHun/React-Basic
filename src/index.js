import React from "react";
import ReactDOM from "react-dom/client";
import AppCounter from "./AppCounter";
import AppProfile from "./AppProfile";
import AppMentors from "./components/AppMentors";
import Card from "./components/Card";
import CreateFile from "./components/CreateFile";
import Pointer from "./components/Pointer";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppMentors></AppMentors>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
