import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "login/Login";
import Admin from "layouts/Admin";
import "assets/css/material-dashboard-react.css?v=1.9.0";
import 'bootstrap/dist/css/bootstrap.min.css';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
