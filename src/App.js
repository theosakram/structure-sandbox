import React from "react";
import { Home, Detail } from "./views";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" children={<Detail />} />
          <Route path="/" children={<Home />} />
        </Switch>
      </Router>
    </div>
  );
}
