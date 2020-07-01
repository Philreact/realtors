import React from "react";

import "./App.scss";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Layout>
  );
}

export default App;
