import React from "react";
import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router";

import AuthOrApp from "./authOrApp";
import Dashboard from "../dashboard/dashboard";
import Wallet from "../wallet/wallet";

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path="/wallets" component={Wallet} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
