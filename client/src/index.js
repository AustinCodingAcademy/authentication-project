import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const oldFetch = window.fetch;
window.fetch = (url, settings = {}) => {
  return oldFetch(url, 
    {...settings,
      headers: {...settings.headers, authorization: localStorage.getItem("token")}
    }
    );
};



ReactDOM.render(
  <App />,
  document.getElementById("root")
);

