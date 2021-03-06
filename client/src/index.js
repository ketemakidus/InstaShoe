import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import "./index.css";



ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root'));

