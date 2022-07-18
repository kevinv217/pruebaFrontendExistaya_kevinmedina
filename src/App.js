import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./style/v1/scss/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Default from "./layout/Default";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Default} />
      </Switch>
    </Router>
  );
}
