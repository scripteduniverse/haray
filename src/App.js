import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Layout from "./components/Layout/Layout";
import FaqMain from "./components/Faq/Faq";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
      </Switch>
      <Switch>
        <Route path="/faq">
          <FaqMain />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
