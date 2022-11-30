import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import AppMentorsImmer from "./AppMentorsImmer";
import AppForm from "./basic/AppForm";
import AppWrap from "./basic/AppWrap";
import reportWebVitals from "./reportWebVitals";
import AppCard from "./basic/AppCard";
import AppTheme from "./basic/AppTheme";
import AppMentorsButton from "./basic/AppMontorsButton";
import AppProducts from "./basic/AppProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppProducts></AppProducts>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
