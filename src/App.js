import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              !token ? <Login {...props} /> : <Redirect to="/dashboard" />
            }
          />

          <Route
            path="/dashboard"
            exact
            render={(props) =>
              token ? <Dashboard {...props} /> : <Redirect to="/" />
            }
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
