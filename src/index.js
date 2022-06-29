import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// UI
import "bootstrap/dist/css/bootstrap.min.css";

// Axios
import axios from "axios";

// Redux
import { Provider } from "react-redux";
import store from "./Store";

axios.defaults.baseURL = "http://localhost:3001/api";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
