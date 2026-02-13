// React core library
import React from "react";
// ReactDOM connects React with the actual HTML page
import ReactDOM from "react-dom/client";
// Import main App component
import App from "./App";
// Import global CSS styling
import "./styles.css";

// This connects React to <div id="root"></div> in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside StrictMode (helps detect issues)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
